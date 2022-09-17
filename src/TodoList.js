import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import Todo from './Todo'
import AddTodos from './AddTodos'
import { Link } from 'react-router-dom'


const TodoList = () => {
    const [username, setUsername] = useState("");
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [warning, setWarning] = useState("");

    const handleDeleteEvent = async (id) => {
        setWarning("Wait Until This Procces Done!")
        document.getElementById("root").classList.add("freeze")
        await axios.delete(`${process.env.REACT_APP_API_KEY}/users/${id}`)
        const newData = data.filter((data) => data.id !== id)
        setData(newData);
        setWarning("")
        document.getElementById("root").classList.remove("freeze")
    }
    const handleClickEvent = async (addTodos) => {
        setWarning("Wait Until This Procces Done!")
        document.getElementById("root").classList.add("freeze")
        await axios.post(`${process.env.REACT_APP_API_KEY}/users/`, {
            todo: addTodos
        })
        if(data.length===0){
            const newData = {
                todo: addTodos,
                id: 1 + ""
            }
            const newDatas = [...data, newData]
            setData(newDatas)
        }
        else{
            const newData = {
                todo: addTodos,
                id: (parseInt(data[data.length-1].id) + 1) + ""
            }
            const newDatas = [...data, newData]
            setData(newDatas)
        }
        setWarning("")
        document.getElementById("root").classList.remove("freeze")
    }

    const handleEditEvent = async(id, editText) => {
        setWarning("Wait Until This Procces Done!")
        document.getElementById("root").classList.add("freeze")
        await axios.put(`https://631a122bdc236c0b1ed5e725.mockapi.io/users/${id}`, {
            todo: editText
        })
        const localdata = data.map((data) => {
            if (data.id === id) {
                data.todo = editText;
            }
            return data
        })
        setData(localdata)
        setWarning("")
        document.getElementById("root").classList.remove("freeze")

    }

    useEffect(() => {
        const savedUsername = JSON.parse(localStorage.getItem("username"));
        if (savedUsername)
            setUsername(savedUsername);
        async function fetchData() {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_KEY}/users`);
            setData(response.data);
            setLoading(false);

        }
        fetchData();

    }, [])
   
    return loading ?
        <div className='loading'>
            <h1>Loading Data...</h1>
        </div>
        :
        
        <div className='todo-body'>
            <div className='todo'>
                <div className='info-bar'>
                    <h1>TODO List</h1>
                    <div>
                        <p>{username}</p>
                        <Link to="/"><button>Logout</button></Link>
                    </div>

                </div>
                <div className='add-todos'>
                    <AddTodos handleClickEvent={handleClickEvent} />
                </div>

                <div className='list-todo' >
                    {data.map(todo =>
                        <Todo key={todo.id} id={todo.id} todo={todo.todo} handleDeleteEvent={handleDeleteEvent} handleEditEvent={handleEditEvent} />)}
                </div>
                <p>{warning}</p>
            </div>


        </div>

}

export default TodoList