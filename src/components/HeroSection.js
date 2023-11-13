import React from 'react';
import { Box, Button, Container, CssBaseline, Grid, Typography, useTheme  } from '@mui/material';
import Snowfall from 'react-snowfall';

const HeroSection = () => {
    const theme = useTheme();
  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
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
          background: 'linear-gradient(to right, #bdd7ea, #eff7fd)',
          color: '#333',
           // Set width to 100% on all screen sizes
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row', // Change flex direction to row on medium screens and above
          },
        }}
      >
        <Box style={{width: '50%', alignItems: 'left', margin: 20 }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }} gutterBottom>
            Your Catchy Heading Here
          </Typography>
          <Typography variant="h5" paragraph>
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
    </div>
  );
};

export default HeroSection;
