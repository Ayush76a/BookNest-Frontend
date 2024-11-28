import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path if necessary

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <AppBar 
      position="static"
      sx={{ backgroundColor: '#2c3e50', padding: '0 16px' }}
    >
      <Toolbar>
        {/* Add the logo image */}
        <img
          src={logo} // Use the imported logo
          alt="BookNest Logo"
          style={{ height: '40px', marginRight: '16px' }}
        />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          BookNest
        </Typography>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          {!token ? (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </>
          ) : (
            <>
              {userRole === 'Admin' && (
                <>
                  <Button color="inherit" component={Link} to="/admin">
                    Dashboard
                  </Button>
                  <Button color="inherit" component={Link} to="/books">
                    View Books
                  </Button>
                  <Button color="inherit" component={Link} to="/add-book">
                    Add Book
                  </Button>
                </>
              )}
              {userRole === 'Librarian' && (
                <>
                  <Button color="inherit" component={Link} to="/librarian">
                    Dashboard
                  </Button>
                  <Button color="inherit" component={Link} to="/books">
                    View Books
                  </Button>
                  <Button color="inherit" component={Link} to="/issued-books">
                    Issued Books
                  </Button>
                </>
              )}
              {userRole === 'Member' && (
                <>
                  <Button color="inherit" component={Link} to="/member">
                    Dashboard
                  </Button>
                  <Button color="inherit" component={Link} to="/books">
                    View Books
                  </Button>
                </>
              )}
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
