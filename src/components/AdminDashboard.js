import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import axios from 'axios';

const AdminDashboard = () => {
  const [adminProfile, setAdminProfile] = useState({ name: '', email: '' });

  // Access the BACKEND_URL from the environment variables
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch Admin Profile using BACKEND_URL
        const profileRes = await axios.get(`${BACKEND_URL}/admin/profile`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setAdminProfile(profileRes.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        alert('Error fetching profile. Please try again.');
      }
    };
    fetchProfile();
  }, [BACKEND_URL]);

  return (
    <Container maxWidth="lg">
      {/* Greeting Section */}
      <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Your Email: {adminProfile.email}
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ mt: 8 }}>
          Welcome, {adminProfile.name}! 👋
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Use the navigation bar above to manage books, view records, or perform administrative tasks. 🚀
        </Typography>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
