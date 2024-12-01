import React from 'react'
import TextField from '@mui/material/TextField';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './VerifyOtp.css'


function ResetPassword() {
    return (
        <div>
            <div className="top">
                <ArrowBackIosIcon className="back-icon" style={{ fontSize: '18px' }} />
                <p className='back-text'>Go Back</p>
            </div>

            <div className='verifyotp-container'>
                <h1>Enter OTP</h1>
                <p>We have shared a code to your registered email address</p>

                <div className="verifyotp-box">
                    <TextField
                        id="otp-input"
                        type="text"
                        fullWidth
                        className="custom-textfield"
                        inputProps={{ style: { textAlign: 'center' } }} 
                    />

                    <button
                        className="custom-button"
                        fullWidth
                    >
                        Verify
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ResetPassword
