import React, {useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dropdown from 'react-bootstrap/Dropdown';
import LogoImage from '../images/logo.jpg';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Axios from 'axios';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Header({linkName, linkUrl="#", linkVisibility=false, profileVisibility=false, userID=null}) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Add a click handler for the login button
  const handleClick = () => {
    // Replace with your login logic or redirection
    console.log("Button clicked");
  };

  const handleLogout = (userID) => {
    console.log("Logout clicked");
    console.log("User ID: ", userID);
    if(userID != null){
      Axios.get('http://localhost:3005/user/logout',{
        ID : userID
      }).then(res=> {
        console.log("Logging out");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  };
  
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={LogoImage}
              alt="Logo"
              style={{ height: 50, marginRight: 5 }}
            />

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Eagle
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
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {linkVisibility === true &&
              <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center'}}>
                <Tooltip title="Open shopping cart">
                  <IconButton sx={{ p: 2, color: 'black', fontWeight: 'bold'}}>
                    <ShoppingCartIcon />
                  </IconButton>
                </Tooltip>
                <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                    <Tooltip title={linkName}>
                      <Button onClick={handleClick} sx={{ p: 2, ml: 2, color: 'black', fontWeight: 'bold'}}>
                        {linkName}
                      </Button>
                    </Tooltip>
                  </Link>
                
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" style={{ color: 'black' }}>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            }
            {profileVisibility === true &&
              <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center'}}>
                <Tooltip title="Open shopping cart">
                  <IconButton sx={{ p: 2, color: 'black', fontWeight: 'bold'}}>
                    <ShoppingCartIcon/>
                  </IconButton>
                </Tooltip>

                <Tooltip title={linkName}>
                  <Dropdown>
                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                      <span
                        style={{
                          color: 'black', // Replace with the color you want
                          cursor: 'pointer', // To show the link cursor on hover
                        }}
                      >
                      <AccountCircleIcon/>
                      {linkName}
                      </span>
                    </Dropdown.Toggle>
                      
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleLogout(userID)}>Logout </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> 
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" style={{ color: 'black' }}>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            }            
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;


