import React from "react"
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword"
import shoppingGirl from '../../assets/images/shopping-girl.png'
import "../LoginPage/Layout.css"


function ForgotPasswordPage() {
    return (
        <div className="app-container">

            <div className="image-section">
                <img src={shoppingGirl} alt="shopping girl" className="image" />
            </div>

            <div className="form-section">
                <ForgotPassword />
            </div>
        </div>
    );
}

export default ForgotPasswordPage
