import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminAppManagementPage from '../Pages/Admin/AdminAppManagementPage'
import AdminCompliantPage from '../Pages/Admin/AdminCompliantPage'
import AdminFeedbackCheckPage from '../Pages/Admin/AdminFeedbackCheckPage'
import AdminUserAccountPage from '../Pages/Admin/AdminUserAccountPage'
import AdminViewFeedbackPage from '../Pages/Admin/AdminViewFeedbackPage'

export default function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/account' element={<AdminUserAccountPage/>}/>
        <Route path='/app_management' element={<AdminAppManagementPage/>}/>
        <Route path='/compliant' element={<AdminCompliantPage/>}/>
        <Route path='/feedback' element={<AdminFeedbackCheckPage/>}/>
        <Route path='/feedback_view' element={<AdminViewFeedbackPage/>}/>  
      </Routes>
    </div>
  )
}
