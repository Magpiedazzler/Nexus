import React from 'react'
import './EditProfile.css'

export default function EditProfile() {
  return (
    <div>
      <div class="div2" id='epdiv'>
            <section>
                <div class="container">
                    <div class="row">
                        <h2 id='eph'>Edit your Profile</h2>
                        <form action="" id='epf2'>
                        <h4>Avatar</h4><br /><br />
                        <img id='eimg' class="img-raised rounded-circle img-fluid" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixlr.com%2F&psig=AOvVaw3WDqgSsQOWtW5p-q7q-7gb&ust=1713440072180000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDG8fSTyYUDFQAAAAAdAAAAABAE" alt="" />
                        <input type="file" id='epbtn'/>
                        <label htmlFor="epbtn" id='epbtnlabel'>Choose Image</label><br /><br />
                        <h4>Full Name</h4>
                        <input type="text" name="" id="epname" placeholder='Name'/><br /><hr id='ep'/><br />
                        <h4>Email Id</h4>
                        <input type="text" name="" id="epmail" placeholder='Email'/><br /><hr id='ep'/><br />
                        <h4>Contact No</h4>
                        <input type="text" name="" id="epcno" placeholder='Contact No'/><br /><hr id='ep'/><br />
                        <h4>Bio</h4>
                        <input type="text" name="" id="epbio" placeholder='About yourself'/><br /><hr id='ep1'/><br />
                        <button id="button">Save</button>
                        </form>
                    </div>
                </div>
            </section>
    
        </div>
    </div>
  )
}
