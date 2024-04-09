import React from 'react'
import './AppManagement.css'

export default function AppManagement() {
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
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id="ammenu">
                            <h2>App Management</h2>
                            <div id='ambox'>
                                <input type="text" id='amt1' value={'App name'} readOnly/>
                                <input type="text" id='amt2' value={'Developer name'} readOnly/>
                                <input type="text" id='amt3' value={'User mail ID'} readOnly/>
                                <button id='amb1'><i class="bi bi-file-earmark-break" id='ami1'></i>Test</button>
                                <button id='amb2'><i class="bi bi-clipboard-check" id='ami1'></i>Approve</button>
                                <button id='amb3'><i class="bi bi-ban" id='ami1'></i>Block</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
