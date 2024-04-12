import React from 'react'
import "./Feedback.css"

export default function Feedback() {
  return (
    <div>

        <div class="div2" id='div2'>
            <section>
                <div class="container">
                    <div class="row">
                        <h2 id='fh'>Feedback</h2>
                        <form action="" id='f2'>
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
            </section>
    
        </div>
    </div>
  )
}
