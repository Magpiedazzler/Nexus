import React from 'react'
import "./Signup.css"
function Signup() {
  return (
    <>
    <form action="" id='form'>
      <h1 id="h1">Registration</h1>
      <input type="text" name="" id="name" placeholder='Full Name' /><br /><hr /><br />
      <input type="text" name="" id="phn" placeholder='Contact No'/><br /><hr /><br />
      <input type="text" name="" id="mail" placeholder='Email'/><br /><hr /><br />
      <input type="password" name="" id="pswd1" placeholder='Create Password'/><br /><hr /><br />
      <input type="password" name="" id="cpswd" placeholder='Confirm Password'/><br /><hr /><br />
      <input type="submit" name="" id="btn" />
      </form>
    </>
  )
}

export default Signup
