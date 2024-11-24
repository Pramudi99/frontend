import React from 'react'
import LoginPage from '../pages/LoginPage/LoginPage'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage/ForgotPasswordPage'
import VerifyOtpPage from '../pages/VerifyOtpPage/VerifyOtpPage'


function routes() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/passwordchange" element={<ForgotPasswordPage/>}/>
        <Route path="/verifyOtp" element={<VerifyOtpPage />}/>
      </Routes>
    </div>
  )
}

export default routes
