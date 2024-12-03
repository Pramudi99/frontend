import React from 'react';
import { Box, List, ListItemButton, ListItemText, Typography, Divider } from '@mui/material';

const Sidebar = ({ onNavigate }) => {
  const menuItems = [
    { text: 'Dashboard', key: 'dashboard' },
    { text: 'Add Product', key: 'addProduct' },
    { text: 'Order List', key: 'orderList' },
    { text: 'Refund Request', key: 'refundRequest' },
  ];

  const handleNavigation = (key) => {
    if (onNavigate) {
      onNavigate(key);
    }
  };

  return (
    <Box
      sx={{
        width: 200,
        borderRight: '1px solid #ccc',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#f9f9f9',
        overflowY: 'auto',
        p: 2,
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Seller Panel
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.key}
            onClick={() => handleNavigation(item.key)}
            sx={{
              borderBottom: '1px solid #ddd',
            }}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
