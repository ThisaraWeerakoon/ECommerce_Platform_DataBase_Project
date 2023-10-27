import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { DLT } from "../redux/actions/actions";

const Cart = () => {
  const [price, setPrice] = useState(0);

  const getdata = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let totalPrice = 0;
    getdata.forEach((item) => {
      totalPrice += item.price * item.qnty;
    });
    setPrice(totalPrice);
  };

  return (
    <>
      <Badge
        badgeContent={getdata.length}
        color="primary"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <NavLink to="/cart" className="text-light">
          <i
            className="fa-solid fa-cart-shopping text-light"
            style={{ fontSize: 25, cursor: "pointer" }}
          ></i>
        </NavLink>
      </Badge>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getdata.length ? (
          <div className="card_details" style={{ width: "24rem", padding: 10 }}>
            {/* Render cart items and their details */}
          </div>
        ) : (
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <p style={{ fontSize: 22 }}>Your cart is empty</p>
            <img
              src="/cart.gif"
              alt=""
              className="emptycart_img"
              style={{ width: "5rem", padding: 10 }}
            />
          </div>
        )}
      </Menu>
    </>
  );
};

export default Cart;
