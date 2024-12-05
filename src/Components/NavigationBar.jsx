// NavigationBar.jsx
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavigationBar = ({ onLogout }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "black",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Seller
        </Typography>
        <IconButton
          color="inherit"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        >
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit" onClick={onLogout}>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
