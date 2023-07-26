import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';


const pages = ['About', '', 'Clubs', 'Matches'];
// const settings = ['Logout', 'Login', 'Signup'];


function ResponsiveAppBar() {

  const {user} = useContext(UserContext)

  const navigate = useNavigate();

  const modifiedSettings = user
  ? ["Logout"]
  : ["Login", "Signup"]

//if you are not logged in, there should not be a logout option

//if you are destroyed logout should not show

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

//bug icon on line 53 has been commented out, not part of my styling

  return (
    <AppBar position="static" sx={{ backgroundColor: '#dfff4f' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/about"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'purple',
              textDecoration: 'none',
            }}
          >
            NYC🎾TC 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page ? page : page}`} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page ? page : "Home"}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/about"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'purple',
              textDecoration: 'none',
            }}
          >
               NYC🎾TC 
               
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component={Link}
                to={`/${page ? page : page}`}
                sx={{ my: 2, color: 'green', display: 'block' }}
              >
                {page ? page : "home"}
              </Button>
            ))} 
          </Box>
{/* is page home a / or  */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="your avatar" src={user.avatar_url} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {modifiedSettings.map((setting) => {
                return (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link to={`/${setting}`} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </Link>
                  </ MenuItem>
                )}
              )}
            
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default ResponsiveAppBar;


//untoucehd

// onClose={handleCloseUserMenu}
// >
//   {settings.map((setting) => {
//     return (
//       <MenuItem key={setting} onClick={handleCloseUserMenu}>
//         <Link to={`/${setting}`} onClick={handleCloseUserMenu}>
//           <Typography textAlign="center">{setting}</Typography>
//         </Link>
//       </ MenuItem>
//     )}
//   )}



// {user ? (
//   settings.map((setting) => (
//    <MenuItem key={setting} onClick={handleCloseUserMenu}>
//      {setting === 'Logout' ? (
//        <Typography textAlign="center" onClick={handleCloseUserMenu}>
//        {setting}
//      </Typography>
//      ) : (
//      <Link to={`/${setting.toLowerCase()}`} onClick={handleCloseUserMenu}>
//        <Typography textAlign="center">{setting}</Typography>
//      </Link>
//      )}
//   </MenuItem>
// ))
// ) : (
// [
//  <MenuItem onClick={handleCloseUserMenu}>
//    <Typography textAlign="center">Login</Typography>
//  </MenuItem>,
//  <MenuItem onClick={handleCloseUserMenu}>
//    <Typography textAlign="center">Sign Up</Typography>
//  </MenuItem>,
//  ]
// )}