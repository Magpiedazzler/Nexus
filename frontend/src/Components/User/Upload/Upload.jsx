import React from 'react'
import './Upload.css'

export default function Upload() {
  return (
    <div>

        <div class="div2" id='div2'>
    <section>
        <div class="container">
            <div class="row">
                    <h4 id='uh'>UPLOAD YOUR APPLICATION</h4>
                    <form action="" id='form3'>
                    <input type="text" id='appname' placeholder='Application Name' /><br /><hr id='hr1_1'/><br />
                    <textarea name="" id="desc" cols="30" rows="10" placeholder='Description of the Application'></textarea><br /><hr id='hr2'/><br />
                    <label id='text'>Upload your App file</label><input type="file" name="" id="appfile"/><br /><hr id='hr1_2'/><br />
                    <input type="text" name="" id="devname" placeholder='Developer name'/><br /><hr id='hr1'/><br />
                    <input type="text" name="" id="publname" placeholder='Publisher name'/><br /><hr id='hr1'/><br />
                    <input type="text" name="" id="category" placeholder='Category'/><br /><hr id='hr1'/><br />
                    <label id='text'>Upload sample screen shots</label><input type="file" name="" id="scrnsht" /><br /><hr id='hr1_2'/><br />
                    <label id='text1'>Upload app icon</label><input type="file" name="" id="appicon" /><br /><hr id='hr1'/><br />
                    <input type="submit" name="" id="subbtn" />
                    </form>
            </div>
        </div>
    </section>
        </div>
    </div>
  )
}
