import React from 'react'
import { Typography, Grid, Box, Paper } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly'

const services = [
  {
    icon: <CodeIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
    title: 'Web Development',
    description: 'Build fast, modern, and scalable websites with the latest technologies.'
  },
  {
    icon: <MobileFriendlyIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
    title: 'Mobile App Development',
    description: 'Develop user-friendly mobile applications for iOS and Android platforms.'
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
    title: 'UI/UX Design',
    description: 'Create engaging and intuitive interfaces that provide an exceptional user experience.'
  }
]

const Services = () => {
  return (
    <Box sx={{ padding: { xs: 4, md: 8 } }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Our Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', height: '100%' }}>
              {service.icon}
              <Typography variant="h6" component="h3" sx={{ marginY: 2, fontWeight: 'bold' }}>
                {service.title}
              </Typography>
              <Typography variant="body1" component="p">
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Services;
