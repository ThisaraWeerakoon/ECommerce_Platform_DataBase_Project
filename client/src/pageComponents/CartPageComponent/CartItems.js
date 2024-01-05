import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./CartItems.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IoTrashBin } from "react-icons/io5";
import Button from "react-bootstrap/Button";

Axios.defaults.withCredentials = true;

export default function CartItems() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3005/user/cartItems") // Replace with your actual API endpoint
      .then((response) => {
        console.log("FETCHED:", response.data);
        setCartItems(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching shopping cart items:", error);
      });
  }, []);

  // Calculate the total price
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + (item.Price * item.Quantity);
    }, 0);
    setTotalPrice(total);
  }, [cartItems]);

  function handlePurchase(option) {
    setSelectedOption(option);
  }

  useEffect(() => {
    if (selectedOption) {
      if (selectedOption === "Delivery") {
        navigate("/pages/CartPage/Purchase");
      } else {
        Axios.get("http://localhost:3005/user/totalPrice")
          .then((res) => {
            console.log("Total price is fetched.", res.data.totalPrice);
            const tPrice = res.data.totalPrice;

            console.log(tPrice);

            Axios.post("http://localhost:3005/user/userOrder", {
              totalPrice: tPrice,
            })
              .then(() => {
                console.log("Address saved successfully");
                navigate("/pages/CartPage/StorePickupOrderSaved");
              })
              .catch((error) => {
                console.error("Error while saving address:", error);
              });
          })
          .catch((error) => {
            console.error("Error while fetching total price:", error);
          });
        navigate("/pages/CartPage/StorePickupOrderSaved");
      }
    }
  }, [selectedOption, navigate]);

  function removeFromCart(itemIndex, itemID) {
    // Implement the logic to remove the item from the cart
    const updatedCart = [...cartItems];
    updatedCart.splice(itemIndex, 1); // Remove the item at the specified index
    setCartItems(updatedCart);
    console.log("Item removed", itemID);

    Axios.post("http://localhost:3005/user/removeCartItems",
      {
        ID: itemID,
      }) // Replace with your actual API endpoint
        .then((response) => {
          console.log("REMOVED:", response.data);
        })
        .catch((error) => {
          console.error("Error removing shopping cart items:", error);
        });
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const rows = cartItems.map((order, index) => ({
    product_name: order.Product_Name,
    quantity: order.Quantity,
    price: order.Price.toFixed(2),
    sub_total: order.Sub_Total.toFixed(2),
    id: order.Cart_Item_Id,
    index: index,
  }));

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Cart Items</h2>
      {/* <ul className="cart-items-list">
        {cartItems.map((order, index) => (
          <li key={index} className="cart-item">
            <strong className="item-label">Product Name:</strong>{" "}
            {order.Product_Name}
            <br />
            <strong className="item-label">Quantity:</strong> {order.Quantity}
            <br />
            <strong className="item-label price-label">Price:</strong> $
            {order.Price.toFixed(2)}
            <br />
            <button
              className="remove-item-button"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
            <hr />
          </li>
        ))}
      </ul> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Price ($)</StyledTableCell>
              <StyledTableCell align="right">Sub Total ($)</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.product_name}>
                <StyledTableCell component="th" scope="row">
                  {row.product_name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.sub_total}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="danger"
                    className="remove-item-button"
                    onClick={() => removeFromCart(row.index, row.id)}
                  >
                    <IoTrashBin />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>&nbsp;</div>

      <div className="total-price">
        <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
      </div>
      {cartItems.length > 0 && (
        <Dropdown className="purchase-dropdown">
          <Dropdown.Toggle variant="secondary" id="purchaseDropdown">
            Purchase
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handlePurchase("Store Pickup")}>
              Store Pickup
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handlePurchase("Delivery")}>
              Delivery
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
      {selectedOption && (
        <div className="selected-option">
          You have selected: {selectedOption}
          {/* You can place additional logic here for handling the selected option */}
        </div>
      )}
    </div>
  );
}
