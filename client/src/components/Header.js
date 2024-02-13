import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dropdown from "react-bootstrap/Dropdown";
import LogoImage from "../images/logo.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";
import "./styles.css";
import background from "../images/background.jpg";

import axios from "axios";

const pages = ["Order History", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
axios.defaults.withCredentials = true;

function Header({
  linkName,
  linkUrl = "#",
  linkVisibility = false,
  profileVisibility = false,
  cartVisibility = true,
  userID = null,
}) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);

    // Fetch shopping cart items when the popover is opened
    axios
      .get("http://localhost:3005/user/cartItems") // Replace with your actual API endpoint
      .then((response) => {
        console.log("FETCHED :", response.data);
        setCartItems(response.data.items); // Assuming your API response contains an 'items' property
      })
      .catch((error) => {
        console.error("Error fetching shopping cart items:", error);
      });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Add a click handler for the login button
  const handleClick = () => {
    console.log("Button clicked");
  };

  const handleLogout = (userID) => {
    console.log("Logout clicked");
    console.log("User ID: ", userID);
    if (userID != null) {
      axios
        .get("http://localhost:3005/user/logout", {
          ID: userID,
        })
        .then((res) => {
          console.log("Logging out");
          navigate("/");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleCheckout = () => {
    navigate("/pages/CartPage");
  };

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
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
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              Eagle
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {linkVisibility === true && (
              <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
                {cartVisibility === true && (
                  <Tooltip title="Open shopping cart">
                    <IconButton
                      sx={{ p: 2, color: "black", fontWeight: "bold" }}
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Tooltip>
                )}
                <Link
                  to={linkUrl}
                  className="font-medium text-purple-600 hover:text-purple-500"
                >
                  <Tooltip title={linkName}>
                    <Button
                      onClick={handleClick}
                      sx={{ p: 2, ml: 2, color: "black", fontWeight: "bold" }}
                    >
                      {linkName}
                    </Button>
                  </Tooltip>
                </Link>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" style={{ color: "black" }}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
            {profileVisibility === true && (
              <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
                {
                  cartVisibility === true && (
                    <Tooltip>
                      <IconButton
                        sx={{ p: 2, color: "black", fontWeight: "bold" }}
                        onClick={handleOpen}
                        aria-describedby={anchorEl ? "cart-popover" : undefined}
                      >
                        <ShoppingCartIcon />
                      </IconButton>
                      <div>
                        <Popover
                          id="cart-popover"
                          open={Boolean(anchorEl)}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                        >
                          <div className="cartPopover">
                            {" "}
                            {/* Apply the cartPopover class */}
                            <Typography className="cartPopoverText">
                              {" "}
                              {/* Apply the cartPopoverText class */}
                              {cartItems.length > 0 ? (
                                <div>
                                  <h4>Shopping Cart Items</h4>
                                  <ul>
                                    {cartItems.map((item, index) => (
                                      <li key={index}>
                                        Product: {item.Product_Name}, Quantity:{" "}
                                        {item.Quantity}, Price: {item.Price}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                <p>Your shopping cart is empty.</p>
                              )}
                            </Typography>
                            <div className="cartPopoverButton">
                              {" "}
                              {/* Apply the cartPopoverButton class */}
                              <button onClick={handleCheckout}>
                                {" "}
                                CHECKOUT{" "}
                              </button>
                            </div>
                          </div>
                        </Popover>
                      </div>
                    </Tooltip>
                  )

                  //     id="cart-popover"
                  //     open={Boolean(anchorEl)}
                  //     anchorEl={anchorEl}
                  //     onClose={handleClose}
                  //     anchorOrigin={{
                  //       vertical: 'bottom',
                  //       horizontal: 'center',
                  //     }}
                  //     transformOrigin={{
                  //       vertical: 'top',
                  //       horizontal: 'center',
                  //     }}
                  //   >
                  //     <div>
                  //     <Typography sx={{ p: 2 }}>
                  //       {cartItems.length > 0 ? (
                  //         <div>
                  //           <h4>Shopping Cart Items</h4>
                  //           <ul>
                  //             {cartItems.map((item, index) => (
                  //               <li key={index}>
                  //                 Product: {item.Product_Name}, Quantity: {item.Quantity}, Price: {item.Price}
                  //               </li>
                  //             ))}
                  //           </ul>
                  //         </div>
                  //       ) : (
                  //         <p>Your shopping cart is empty.</p>
                  //       )}
                  //     </Typography>
                  //     </div>
                  //   </Popover>
                  //   </div>
                  // </Tooltip>
                }

                <Tooltip title={linkName}>
                  <Dropdown>
                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                      <span
                        style={{
                          color: "black", // Replace with the color you want
                          cursor: "pointer", // To show the link cursor on hover
                        }}
                      >
                        <AccountCircleIcon />
                        {linkName}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/pages/Profile">
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleLogout(userID)}>
                        Logout{" "}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" style={{ color: "black" }}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Header;
