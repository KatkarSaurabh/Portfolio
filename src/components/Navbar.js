import React from 'react'
import './Navbar.css'
import {Link,Outlet} from 'react-router-dom'
import logo from '../assets/pfheader.jpg'
import contact_logo from '../assets/contactmeImage.jpg'
import {AppBar, Toolbar, Typography, IconButton, Stack} from '@mui/material'
import {HomeRounded} from '@mui/icons-material';
import AcUnitIcon from '@mui/icons-material/AcUnit';

function Navbar() {
  // return (
  //   <nav className="navbar">
  //     <div><Link to='/intro' className='logo'>SSK</Link></div>
  //     <div className="menu">
  //       <Link to='/intro' className='menuItem' >Home</Link>
  //       <Link to='/about' className='menuItem'>About</Link>
  //       <Link to='/projects' className='menuItem'>Projects</Link>
  //     </div>
  //       <Link className='contact' to='/contact'>ContactMe</Link>
  //   </nav>
  // );
  return <AppBar position='fixed'>
    <Toolbar>
    <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
    <AcUnitIcon></AcUnitIcon>
    </IconButton>
    <Typography style={{fontSize:'large'}} color='inherit' component='div' sx={{flexGrow:55}}>
      Welcome
    </Typography>
    <Stack style={{display:'flex',fontSize:'large'}} direction='row' spacing={4}>
      <Link to='/intro' className='menuItem'>Home</Link>
      <Link to='/about' className='menuItem'>About Me</Link>
      <Link to='/projects' className='menuItem'>Projects</Link>
      <Link to='/contact' className='menuItem'>ContactMe</Link>
    </Stack>
    </Toolbar>
  </AppBar>
}

export default Navbar
