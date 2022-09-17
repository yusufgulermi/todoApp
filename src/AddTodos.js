
import React, { useState } from 'react'

const AddTodos = ({ handleClickEvent }) => {
    const [addTodos, setAddTodos] = useState("");
    const [warning, setWarning] = useState("");

    const handleClick = () => {
        if (addTodos.length >= 3) {
            handleClickEvent(addTodos)
            setAddTodos("");
            setWarning("");
        }
        else {
            setWarning("You mush at least type 3 letter!")
        }
    }
    return (
        <div id="add-todo">
            <div className='add-todo'>
            <input
                className='input-todo'
                text="text"
                value={addTodos}
                onChange={(e) => setAddTodos(e.target.value)}
                placeholder="Add your new todo">

            </input>
            <button className='add-btn' onClick={handleClick}>Add</button>

            </div>
            <div>
                <p>{warning}</p>
            </div>
        </div>



    )
}

export default AddTodos