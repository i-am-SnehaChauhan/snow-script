import React from 'react';
import { Button, Container, CssBaseline, Grid, Typography } from '@mui/material';
import Snowfall from 'react-snowfall';

const HeroSection = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Snowfall snowflakeCount={100} style={{ zIndex: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      <CssBaseline />
      <Container
        component="main"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '100vh',
          background: 'linear-gradient(to right, #87CEFA, #FFFFFF)', // Light blue to white gradient
          color: '#333', // Darker text color for better readability
          padding: (theme) => theme.spacing(8, 4),
        }}
      >
        <div>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }} gutterBottom>
            Your Catchy Heading Here
          </Typography>
          <Typography variant="h5" paragraph>
            A brief description of what your website or product offers.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}> {/* Use the primary color for the button */}
            Register
          </Button>
        </div>
        <img
          src="path-to-your-image.jpg" // Replace with the actual path to your image
          alt="Your Alt Text"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Container>
    </div>
  );
};

export default HeroSection;
