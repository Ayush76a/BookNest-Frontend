import React, { useState, useEffect } from 'react'; 
import { Box, Typography, Container } from '@mui/material';
import axios from 'axios';

const MemberDashboard = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/member/profile`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        alert('Failed to load profile. Please try again.');
      }
    };
    fetchProfile();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Your Email: {user.email}
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Welcome, {user.name}! 👋
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Use the navigation bar above to explore books, view your borrowed list, or discover new reads. 📖
        </Typography>
      </Box>
    </Container>
  );
};

export default MemberDashboard;
