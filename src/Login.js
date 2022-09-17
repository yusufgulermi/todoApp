import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
const Login = () => {
  const [username, setUsername] = useState("");
  const handleOnChange = (e) => {
    setUsername(e.target.value)
  }
 

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(username))
  },[username])

  return (
    <div className='login' id='login'>
      <div className='login-body'>
        <div className='head'>
          <h1>Hello Stranger! Do You Want to Make Your Plan for Today?</h1>
          <h1>Type Your Name and Let's Start!</h1>
        </div>
        <div className='log-info'>
          <input
            className='username'
            type="text"
            placeholder="Type your Name Here..."
            value={username}
            onChange={handleOnChange}>
          </input>
          {username.length > 0 ?
            <Link to="/todoList"><button className='login-btn'>Login</button></Link>
            :
            <p><br/>Type at least 1 Character!</p>}

        </div>
      </div>


    </div>
  )
}

export default Login