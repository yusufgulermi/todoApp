
import React, { useState } from 'react'


const Todo = ({ todo, id, handleDeleteEvent, handleEditEvent }) => {
  const [editText, setEditText] = useState("");

  const handleDelete = () => {
    handleDeleteEvent(id);

  }
  const handleEdit = () => {
    if(editText.length>=3){
      handleEditEvent(id, editText);
      myfunction();
    }
  }
  const myfunction = () => {
    const element = document.getElementById(`${id}`)
    element.classList.contains("edit") ? element.classList.remove("edit") :
      element.classList.add("edit")

  }
  const myFunction =()=>{
    document.getElementById(`${id}`).classList.toggle("done")
}
  return (
    <div className='solo-todos' id={id} onClick={myFunction}>
      <div className='solo-todo'>
        <p>{todo}</p>
        <div>
          <button id='delete' onClick={handleDelete}>Delete</button>
          <button id='edit' onClick={myfunction}>Edit</button>
        </div>
      </div>
      <div className='hidden-edit'>
        <input
          text="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          placeholder="Edit your todo"></input>
        <button id='edit' onClick={handleEdit}>Sumbit</button>
      </div>


    </div>
  )
}

export default Todo