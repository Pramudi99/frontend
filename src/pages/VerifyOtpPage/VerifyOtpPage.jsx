import React from 'react'
import VerifyOtp from '../../components/VerifyOtp/VerifyOtp'
import "../LoginPage/Layout.css"
import girlImage from '../../assets/images/girl-image.png'


function ResetPasswordPage() {
  return (
    <div className="app-container">
    
    <div className="image-section">
    <img src={ girlImage } alt="girl-image" className="image" />
    </div>

    <div className="form-section">
      <VerifyOtp/>
    </div>
  </div>    
  )
}

export default ResetPasswordPage