import React from 'react';
import { Box, Button, Container, CssBaseline, Grid, Typography, useTheme  } from '@mui/material';
import Snowfall from 'react-snowfall';
import BG from '../assets/BG.jpg';

const HeroSection = () => {
    const theme = useTheme();
  return (
    <Box style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      <Snowfall 
        snowflakeCount={250} 
        color="#fff"
        style={{ zIndex: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '100vh',
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            backgroundImage: `url(${BG})`,
            backgroundSize: 'cover',
            filter: 'blur(2px)', // Adjust the blur intensity as needed
          },
          // background: 'linear-gradient(to right, #bdd7ea, #eff7fd)',
          color: '#333',
           // Set width to 100% on all screen sizes
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row', // Change flex direction to row on medium screens and above
          },
        }}
      >
       '
        <Box style={{width: '50%', alignItems: 'left', marginLeft: 60, top:0, marginTop: '-60px' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#fff' }} gutterBottom>
            Your Catchy Heading Here
          </Typography>
          <Typography variant="h5" paragraph sx={{color: '#fff'}}>
            A brief description of what your website or product offers.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Register
          </Button>
        </Box>
        <Box 
          style={{width: '50%', alignItems: 'right', margin: 20 }}
        >
        <img
          src="path-to-your-image.jpg"
          alt="Your Alt Text"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
