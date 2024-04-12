import React from 'react'
import './AdminSidebar.css'

export default function AdminSidebar() {
  return (
    <div>
      <div class="div2">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id='sidebar'>
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
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
