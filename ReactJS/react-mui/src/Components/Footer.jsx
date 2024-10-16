import React from 'react'
import { Grid, Box, Typography, Link, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'black', padding: { xs: 4, md: 8 } }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Company Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h3" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" component="p">
            We are a leading company in providing full-stack development and digital marketing services, helping businesses grow.
          </Typography>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h3" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="#" color="inherit" underline="hover" sx={{ marginBottom: 1 }}>
              Home
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ marginBottom: 1 }}>
              Services
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ marginBottom: 1 }}>
              Contact Us
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ marginBottom: 1 }}>
              Blog
            </Link>
          </Box>
        </Grid>

        {/* Social Media Icons */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h3" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="#" target="_blank" aria-label="Facebook" sx={{ color: 'black' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" target="_blank" aria-label="Twitter" sx={{ color: 'black' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" target="_blank" aria-label="LinkedIn" sx={{ color: 'black' }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="#" target="_blank" aria-label="Instagram" sx={{ color: 'black' }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="body2" component="p">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer;
