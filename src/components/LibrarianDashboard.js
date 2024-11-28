import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import axios from 'axios';

const LibrarianDashboard = () => {
  const [librarianProfile, setLibrarianProfile] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch librarian profile
        const profileRes = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/librarian/profile`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setLibrarianProfile(profileRes.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        alert('Error fetching profile. Please try again.');
      }
    };

    fetchProfile();
  }, []);

  return (
    <Container maxWidth="lg">
      {/* Greeting Section */}
      <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Your Email: {librarianProfile.email}
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Welcome, {librarianProfile.name}! 👋
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Use the navigation bar above to manage books, view issued records, and ensure smooth library operations. 📚
        </Typography>
      </Box>
    </Container>
  );
};

export default LibrarianDashboard;
