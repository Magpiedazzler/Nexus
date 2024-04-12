import React from 'react'
import './Report.css'
import imageOne from "./12.jpg"

export default function Report() {
  return (
    <div>

        <div class="div2" id='div2'>
    <section>
        <div class="container">
            <div class="row">
                    <h1 id='rh'>App Report</h1>
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
    </section>
        </div>
    </div>
  )
}
