import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function OrderHistory() {
  const [orderHistory, setOrderHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3005/user/orderHistory')
      .then((response) => {
        console.log('API Response:', response.data);

        if (response.data.user) {
          const orderHistoryData = response.data.user;
          console.log('Order History Data:', orderHistoryData);
          setOrderHistory(orderHistoryData);
        } else {
          console.log('No user property in response:', response.data);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Order History</h2>
      <p>
      orderHistory
      </p>

    </div>
  );
}
