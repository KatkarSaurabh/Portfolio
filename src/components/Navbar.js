import React from 'react'
import './Navbar.css'
import {Link,Outlet} from 'react-router-dom'
import logo from '../assets/pfheader.jpg'
import contact_logo from '../assets/contactmeImage.jpg'
import {AppBar, Toolbar, Typography, IconButton, Stack, Box, Menu, MenuList, MenuItem} from '@mui/material'
import {HomeRounded} from '@mui/icons-material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

  return <AppBar position='static' style={{height:'3.5rem'}}>
    <Toolbar style={{fontSize:'1rem'}}>
    <IconButton size='large' edge='start' color='inherit' aria-label='logo' >
    <AcUnitIcon></AcUnitIcon>
    </IconButton>
    <Typography color='inherit' component='div' sx={{flexGrow:1}}>
      Welcome
    </Typography>
    <Box direction='row' spacing={4}>
      <Link to='/intro' className='menuItem'>Home</Link>
      <Link to='/about' className='menuItem'>About Me</Link>
      <Link to='/projects' className='menuItem'>Projects</Link>
      <Link to='/contact' className='menuItem'>Contact Me</Link>
    </Box>
    

    </Toolbar>
  </AppBar>
}

export default Navbar
