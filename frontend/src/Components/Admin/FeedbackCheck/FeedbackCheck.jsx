import React from 'react'
import './FeedbackCheck.css'

export default function FeedbackCheck() {
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
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" id="fcmenu">
                            <h2>Feedback</h2>
                            <div id='fcbox'>
                                <label htmlFor="" id='fcl'>User Name: </label>
                                <input type="text" id='fct1' readOnly/><br/><br />
                                <label htmlFor="" id='fcl'>Reaction about the store: </label>
                                <input type="text" id='fct2' readOnly/><br/><br />
                                <label htmlFor="" id='fcl'>Feedback Category: </label>
                                <input type="text" id='fct3' readOnly /><br /><br />
                                <label htmlFor="" id='fcl'>User Feedback: </label><br />
                                <textarea name="" id="fct4" cols="30" rows="10" readOnly></textarea><br /><br />
                                <textarea name="" id="fct5" cols="30" rows="10" placeholder='Leave comments'></textarea><br /><br />
                                <input type="button" id='fcb1' value={'Submit'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
