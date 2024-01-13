import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Button_Set.css'; 
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function CustomButtonGroup() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleEditClick = () => {
    // Handle the click event for the "Edit Personal Details" button
    // Navigate to the desired route when the button is clicked
    navigate('/pages/Profile/EditPersonalDetails'); // Replace with your target route
  };

  const handleOrderHistoryClick = () => {
    // Handle the click event for the "Order History" button
    // Navigate to the desired route when the button is clicked
    navigate('/pages/Profile/OrderHistory'); // Replace with your target route
  };

  return (
    <ButtonGroup aria-label="Basic example" className="custom-button-group">
      <Button variant="secondary" className="custom-button" onClick={handleEditClick}>
        Edit Personal Details
      </Button>
      <Button variant="secondary" className="custom-button" onClick={handleOrderHistoryClick}>
        Order History
      </Button>
    </ButtonGroup>
  );
}

export default CustomButtonGroup;

