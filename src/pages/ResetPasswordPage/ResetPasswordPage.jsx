import React from 'react'
import ResetPassword from '../../components/ResetPassword/ResetPassword'
import fashionGirl from '../../assets/images/fashion-girl.png'
import "../LoginPage/Layout.css"

function ResetPasswordPage() {
  return (
    <div className="app-container">
    
          <div className="image-section">
          <img src={ fashionGirl } alt="fashion-girl" className="image" />
          </div>
    
          <div className="form-section">
            <ResetPassword />
          </div>
        </div>
  )
}

export default ResetPasswordPage
