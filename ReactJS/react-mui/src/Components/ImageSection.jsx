import React from 'react'
import { Grid, Box, Typography } from '@mui/material'

const images = [
    'https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?uid=R46621437&ga=GA1.1.1345549411.1725276812&semt=ais_hybrid', 
    'https://img.freepik.com/free-psd/virtual-reality-banner-template_23-2148940691.jpg?uid=R46621437&ga=GA1.1.1345549411.1725276812&semt=ais_hybrid',
    'https://img.freepik.com/free-vector/flat-world-graphics-day-illustration_23-2148886889.jpg?uid=R46621437&ga=GA1.1.1345549411.1725276812&semt=ais_hybrid', 
    'https://img.freepik.com/free-vector/abstract-colorful-pattern-design-background-use-modern-design-cover-poster-template-brochure-decorated-flyer-banner_460848-13751.jpg?uid=R46621437&ga=GA1.1.1345549411.1725276812&semt=ais_hybrid', 
    'https://img.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg?uid=R46621437&ga=GA1.1.1345549411.1725276812&semt=ais_hybrid',
    'https://img.freepik.com/free-vector/internet-day-concept-illustration_114360-5349.jpg?uid=R46621437&ga=GA1.1.1345549411.1725276812&semt=ais_hybrid'  
  ]
const ImageSection = () => {
  return (
    <Box sx={{ padding: { xs: 4, md: 8 } }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Our Gallery
      </Typography>
      <Grid container spacing={3}>
        {images.map((src, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component="img"
              src={src}
              alt={`Gallery image ${index + 1}`}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ImageSection;
