import React from 'react'
import './CompliantCheck.css'

export default function CompliantCheck() {
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
                            <div class="btn-group dropend">
                                <button id='hp' type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-patch-question" id='help'><br />Help</i><br /><br />
                                </button>
                                <ul class="dropdown-menu">
                                    <li><i class="bi bi-chat-fill" id='i1'></i>Feedback</li>
                                    <li><i class="bi bi-shield-fill-exclamation" id='i1'></i>Compliant</li>
                                    <li><i class="bi bi-file-person-fill" id='i1'></i>About</li>
                                    <li><i class="bi bi-person-raised-hand" id='i1'></i>Get Help</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id="ccmenu">
                            <h2>Compliants</h2>
                            <div id='ccbox'>
                                
                                <input type="text" id='cct1' value={'Account name'} readOnly/>
                                <input type="text" id='cct2' value={'User mail ID'} readOnly/>
                                <input type="text" id='cct3' value={'App name'} readOnly/>
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" id='ccb1' aria-expanded="false" aria-controls="collapseOne">
                                    View Compliant<i class="bi bi-chevron-down" id='cci1'></i>
                                </button>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p>Description about the compliant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
