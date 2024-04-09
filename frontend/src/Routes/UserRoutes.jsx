import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Components/User/Signup/Signup'
import Signin from '../Components/User/Signin/Signin'
import Home from '../Components/User/Home/Home'
import Feedback from '../Components/User/Feedback/Feedback'
import Upload from '../Components/User/Upload/Upload'
import Download from '../Components/User/Download/Download'
import Report from '../Components/User/Report/Report'
import App from '../Components/User/Apps/App'
import Games from '../Components/User/Games/Games'

function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<Signin/>}/>
      </Routes>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/feedback' element={<Feedback/>}/>
      </Routes>
      <Routes>
        <Route path='/upload' element={<Upload/>}/>
      </Routes>
      <Routes>
        <Route path='/install' element={<Download/>}/>
      </Routes>
      <Routes>
        <Route path='/report' element={<Report/>}/>
      </Routes>
      <Routes>
        <Route path='/apps' element={<App/>}/>
      </Routes>
      <Routes>
        <Route path='/games' element={<Games/>}/>
      </Routes>
    </div>
  )
}

export default UserRoutes
