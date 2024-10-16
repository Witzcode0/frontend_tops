import React from 'react'
import { Typography, Grid, Button, Box } from '@mui/material'

const Hero = () => {
  return (
    <Grid container spacing={2} alignItems="center" sx={{ padding: 2 }}>
      <Grid item xs={12} sm={6}>
        <Typography 
          variant='h2' 
          component='h1' 
          sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, fontWeight: 'bold' }}
        >
          Welcome to My Website
        </Typography>
        <Typography 
          variant='h5' 
          component='h2' 
          sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' }, marginTop: 2 }}
        >
          This is a test website for learning React and MUI
        </Typography>
        <Button 
          variant='contained' 
          color='primary' 
          sx={{ marginTop: 3, fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' } }}
        >
          Click Me
        </Button>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box
          component="img"
          sx={{
            width: '100%',
            maxHeight: { xs: '250px', sm: '400px', md: '500px' }, // Scaling for responsiveness
            objectFit: 'cover',
            borderRadius: 2,
          }}
          alt='Placeholder'
          src='https://5.imimg.com/data5/SELLER/Default/2022/11/WK/DD/KY/180187398/it-traning-png-500x500.png'
        />
      </Grid>
    </Grid>
  )
}

export default Hero
