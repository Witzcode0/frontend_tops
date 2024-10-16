import { AppBar, Typography, Button, Toolbar } from '@mui/material'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';


const Navbar = () => {
  return (
    <AppBar position='static' color='primary'>
        <Toolbar>

        <Typography variant="h6" flexGrow={1}>
            Tops Technologies Pvt. Ltd.
        </Typography>
        <Button color='inherit  ' startIcon={<PersonAddIcon/>}>
            Register
        </Button>
        <Button color='inherit  ' startIcon={<LoginIcon/>}>
            Login
        </Button>
        <Button color='inherit  ' startIcon={<AccountBoxIcon></AccountBoxIcon>}>
            Profile
        </Button>
        <Button color='inherit  ' startIcon={<LogoutIcon/>}>
            Logout
        </Button>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;
