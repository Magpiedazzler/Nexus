import React from 'react'
import './Upload.css'

export default function Upload() {
  return (
    <div>
      <div class="topnav">
            <h2 id='t2'>Nexus</h2>
            <input type="text" id='search' placeholder='Search..'/>
            <button id='searchicon'><i class="bi bi-search" id='search1'></i></button>
            <button id='notification'><i class="bi bi-bell" id='notify'></i></button>
            <button id='profileicon'><i class="bi bi-person-circle" id='profile'></i></button>
        </div>

        <div class="div2">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <button id="hm"><i class="bi bi-house"id='home'>Home</i><br /><br /></button>
                <button id="ap"><i class="bi bi-app"id='app'>Apps</i><br /><br /></button>
                <button id="gm"><i class="bi bi-controller" id='game'>Games</i><br /><br /></button>
                <button id="lb"><i class="bi bi-collection"id='library'>Library</i><br /><br /></button>
                <button id="hp"><i class="bi bi-patch-question" id='help'>Help</i><br /><br /></button>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id="menu2">
                    <h4 id='uh'>Upload your application</h4>
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
        </div>
    </section>
        </div>
    </div>
  )
}
