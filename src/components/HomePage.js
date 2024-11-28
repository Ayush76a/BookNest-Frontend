import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box 
        sx={{
          mt: 10, 
          textAlign: 'center', 
          padding: '16px', 
          borderRadius: '8px', 
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome🤗 to BookNest !  🎉
        </Typography>
        <Typography variant="h6" paragraph>
        A library management system that empowers Admins, Librarians, and Members to manage, track, and organize books effortlessly like a book wizard! ✨
        </Typography>
        
        <Box 
          sx={{ 
            mt: 5, 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 3,
            marginTop: '40px' // Increase margin between description and buttons
          }}
        >
          <Button 
            variant="contained" 
            component={Link} 
            to="/login"
            sx={{
              padding: '10px 20px', 
              fontSize: '16px', 
              borderRadius: '8px',
              backgroundColor: '#2c3e50', // Navbar color
              color: '#fff',
              '&:hover': {
                backgroundColor: '#34495e', // Slightly lighter shade
              },
            }}
          >
            Login
          </Button>
          <Button 
            variant="outlined" 
            component={Link} 
            to="/signup"
            sx={{
              padding: '10px 20px', 
              fontSize: '16px', 
              borderRadius: '8px',
              borderColor: '#2c3e50', // Navbar color
              color: '#2c3e50',
              '&:hover': {
                backgroundColor: '#ecf0f1', // Light gray on hover
              },
            }}
          >
            Signup
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
