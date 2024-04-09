import React from 'react'
import './Signin.css'

export default function Signin() {
  return (
    <div>
      <form action="" id="form1">
      <h1 id='t1'>Sign in</h1><br /><br />
      <input type="text" name="" id="username" placeholder='Username'/><br /><hr id='line'/><br />
      <input type="password" name="" id="pswd" placeholder='Password'/><br /><hr id='line'/><br />
      <input type="submit" value={"Login"} id="submit"/><br/>
      <a href="./register" id='crt'>New User</a>
      </form>
    </div>
  )
}
