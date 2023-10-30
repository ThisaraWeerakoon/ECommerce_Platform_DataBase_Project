import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './CartItems.css';

Axios.defaults.withCredentials = true;

export default function CartItems() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:3005/user/cartItems') // Replace with your actual API endpoint
      .then((response) => {
        console.log('FETCHED:', response.data);
        setCartItems(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching shopping cart items:', error);
      });
  }, []);

  // Calculate the total price
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.Price;
    }, 0);
    setTotalPrice(total);
  }, [cartItems]);

  function handlePurchase(option) {
    setSelectedOption(option);
  }

  useEffect(() => {
    if (selectedOption) {
      if (selectedOption === 'Delivery') {
        navigate('/pages/CartPage/Purchase');
        
      } else {
        Axios.get('http://localhost:3005/user/totalPrice')
        .then((res) => {
          console.log("Total price is fetched.", res.data.totalPrice);
          const tPrice = res.data.totalPrice;
    
          console.log(tPrice);
    
          Axios.post('http://localhost:3005/user/userOrder', { totalPrice: tPrice })
            .then(() => {
              console.log("Address saved successfully");
              navigate('/pages/CartPage/StorePickupOrderSaved');
            })
            .catch((error) => {
              console.error("Error while saving address:", error);
            });
        })
        .catch((error) => {
          console.error("Error while fetching total price:", error);
        });
        navigate('/pages/CartPage/StorePickupOrderSaved');
      }
    }
  }, [selectedOption, navigate]);

  function removeFromCart(itemIndex) {
    // Implement the logic to remove the item from the cart
    const updatedCart = [...cartItems];
    updatedCart.splice(itemIndex, 1); // Remove the item at the specified index
    setCartItems(updatedCart);
  }

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Cart Items</h2>
      <ul className="cart-items-list">
        {cartItems.map((order, index) => (
          <li key={index} className="cart-item">
            <strong className="item-label">Product Name:</strong> {order.Product_Name}<br />
            <strong className="item-label">Quantity:</strong> {order.Quantity}<br />
            <strong className="item-label price-label">Price:</strong> ${order.Price.toFixed(2)}<br />
            <button
        className="remove-item-button"
        onClick={() => removeFromCart(index)}
      >
        Remove
      </button>
            <hr />
          </li>
        ))}
      </ul>
      <div className="total-price">
        <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
      </div>

      {cartItems.length > 0 && (
        <Dropdown className="purchase-dropdown">
          <Dropdown.Toggle variant="secondary" id="purchaseDropdown">
            Purchase
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handlePurchase('Store Pickup')}>Store Pickup</Dropdown.Item>
            <Dropdown.Item onClick={() => handlePurchase('Delivery')}>Delivery</Dropdown.Item>
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