import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserAccount from '../Components/Admin/UserAccount/UserAccount'
import FeedbackCheck from '../Components/Admin/FeedbackCheck/FeedbackCheck'
import ViewFeedback from '../Components/Admin/ViewFeedback/ViewFeedback'
import CompliantCheck from '../Components/Admin/CompliantCheck/CompliantCheck'
import AppManagement from '../Components/Admin/AppManagement/AppManagement'

export default function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/account' element={<UserAccount/>}/>
      </Routes>
      <Routes>
        <Route path='/feedback' element={<FeedbackCheck/>}/>
      </Routes>
      <Routes>
        <Route path='/feedback_view' element={<ViewFeedback/>}/>
      </Routes>
      <Routes>
        <Route path='/compliant' element={<CompliantCheck/>}/>
      </Routes>
      <Routes>
        <Route path='/app_management' element={<AppManagement/>}/>
      </Routes>
    </div>
  )
}
