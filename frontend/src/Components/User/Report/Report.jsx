import React from 'react'
import './Report.css'
import imageOne from "./12.jpg"

export default function Report() {
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
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id="rmenu">
                    <h1>App Report</h1>
                    <div id='rbox'>
                    <div>
                        <img src={imageOne} alt="Sample app icon" id='img1'/>
                    </div><br />
                        <input type="text" name="" id="rtext" value={'App Name'} readOnly/><br /><br />
                        <select name="" id="rs">
                            <option value="">Choose category</option>
                            <option value="">Graphic violence</option>
                            <option value="">Hateful or abusive content</option>
                            <option value="">Improper content rating</option>
                            <option value="">Illegal prescription or other drug</option>
                            <option value="">Sexual content</option>
                            <option value="">Copycat or impersonation</option>
                            <option value="">Other objection</option>
                        </select><br /><hr id='rhr'/><br />
                        <textarea name="" id="rt" cols="30" rows="10" placeholder='Describe your issue...'></textarea><br /><br />
                        <input type="button" name="" id="rbtn" value={'Send'}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    </div>
  )
}
