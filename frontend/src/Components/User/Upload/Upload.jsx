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
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id='basic'>
                          <h3>Basic Details</h3><br /><br />
                          <input type="text" id='appname' placeholder='Application Name' /><br /><hr id='hr1_1'/><br />
                          <textarea name="" id="desc" cols="30" rows="10" placeholder='Description of the Application'></textarea><br /><hr id='hr2'/><br />
                          <input type="text" name="" id="devname" placeholder='Developer name'/><br /><hr id='hr1'/><br />
                          <input type="text" name="" id="publname" placeholder='Publisher name'/><br /><hr id='hr1'/><br />
                          <input type="text" name="" id="category" placeholder='Category'/><br /><hr id='hr1'/><br />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id='basic1'>
                          <h3>Upload files</h3><br /><br />
                          <input type="file" id='upbtn'/>
                          <label htmlFor="upbtn" id='upbtnlabel'>Upload app icon</label><br /><br />
                          <input type="file" id='upbtn'/>
                          <label htmlFor="upbtn" id='upbtnlabel'>Upload screen shots</label><br /><br />
                          <input type="file" id='epbtn'/>
                          <label htmlFor="upbtn" id='upbtnlabel'>Upload app file</label><br /><br />
                        </div>
                      </div>
                    </div>
                    <input type="submit" name="" id="subbtn" />
                    </form>
            </div>
        </div>
    </section>
        </div>
    </div>
  )
}
