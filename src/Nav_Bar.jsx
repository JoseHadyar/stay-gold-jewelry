import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}> Stay Gold </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Promociones </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Productos </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Log In </Typography>
          <Typography> <CartWidget/> </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

