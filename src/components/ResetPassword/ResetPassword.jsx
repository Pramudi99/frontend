import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import './ResetPassword.css'

function ResetPassword() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

    const handleClickShowPassword = (type) => () => {
        switch (type) {
            case "current":
                setShowCurrentPassword((prev) => !prev);
                break;
            case "new":
                setShowNewPassword((prev) => !prev);
                break;
            case "confirm":
                setShowConfirmNewPassword((prev) => !prev);
                break;
            default:
                break;
        }
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div>
            <div className="top">
                <ArrowBackIosIcon className="back-icon" style={{ fontSize: '18px' }} />
                <p className='back-text'>Go Back</p>
            </div>

            <div className="resetpw-container">
                <h1>Reset Password</h1>

                <div className="resetpw-box">
                    <label htmlFor="current-password">Current Password:</label>
                    <TextField
                        id="current-password"
                        type={showCurrentPassword ? "text" : "password"}
                        fullWidth
                        value={currentPassword}
                        style={{marginBottom: '8px'}}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="custom-textfield"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle current password visibility"
                                        onClick={handleClickShowPassword("current")}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showCurrentPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />



                    <label htmlFor="new-password">New Password:</label>
                    <TextField
                        id="new-password"
                        type={showNewPassword ? "text" : "password"}
                        fullWidth
                        value={newPassword}
                        style={{marginBottom: '8px'}}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="custom-textfield"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle new password visibility"
                                        onClick={handleClickShowPassword("new")}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />



                    <label htmlFor="confirm-new-password">Confirm New Password:</label>
                    <TextField
                        id="confirm-new-password"
                        type={showConfirmNewPassword ? "text" : "password"}
                        fullWidth
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        className="custom-textfield"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle confirm new password visibility"
                                        onClick={handleClickShowPassword("confirm")}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showConfirmNewPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />


                    <button
                        className="custom-button"
                        fullWidth
                    >
                        Change Password
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
