import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className="izq">
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
            </IconButton>
            <Link className='uTitle' to={'/'}>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}> Stay Gold </Typography>
            </Link>
          </div> 
          <div className="cen">
            <Link className="category" to={'/category/1'}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Relojes </Typography>
            </Link>
            <Link className="category" to={'/category/2'}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Aros </Typography>
            </Link>
            <Link className="category" to={'/category/3'}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> Collares </Typography>
            </Link>
            
          </div>
          <div className="der">
            <Typography> <CartWidget/> </Typography>
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

