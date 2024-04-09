import React from 'react'
import "./Feedback.css"

export default function Feedback() {
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
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id="menu1">
                        <form action="" id='f2'>
                        <h2 id='fh'>Feedback</h2>
                        <p id='fp1'>We would like your feedback to improve our service</p><br/>
                        <p id='fp2'>What is your opinion about Nexus</p><br />
                        <button id='fb1'><i class="bi bi-emoji-tear"></i></button>
                        <button id='fb2'><i class="bi bi-emoji-frown"></i></button>
                        <button id='fb3'><i class="bi bi-emoji-neutral"></i></button>
                        <button id='fb4'><i class="bi bi-emoji-smile"></i></button>
                        <button id='fb5'><i class="bi bi-emoji-laughing"></i></button><br /><br />
                        <p id='fp3'>Select the feedback category</p><br />
                        <div id='d2'>
                            <button id='fb6'>Compliment</button>
                            <button id='fb7'>Suggestion</button>
                            <button id='fb8'>Compliant</button>
                        </div><br />
                        <p id='fp4'>Leave your feedback below</p><br />
                        <textarea name="" id="ft1" cols="30" rows="10"></textarea><br />
                        <button id='fb9'>Send</button>
                        </form>
                        </div>
                    </div>
                </div>
            </section>
    
        </div>
    </div>
  )
}
