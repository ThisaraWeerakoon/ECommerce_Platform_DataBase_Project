import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function StorePickupDeliveryaved() {
  const [ID, setId] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:3005/user/getSession")
      .then((res) => {
        console.log("Response Data:", res.data.DelResult);
        setId(res.data.DelResult);
        console.log("ID: ", res.data.DelResult);
      })
      .catch((err) => console.log(err));
  }, []);

  const divStyle = {
    backgroundColor: "darkgreen",
    color: "white",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column", // Center content vertically
    justifyContent: "center", // Center content horizontally
    height: "100vh", // Set height to full viewport height
  };

  const tickStyle = {
    fontSize: "200px",
    marginBottom: "10px", // Add space below the tick
  };

  const linkStyle = {
    textDecoration: "underline", // Add underline to the link
    color: "yellow",
    marginTop: "30px", // Add space above the link
    fontSize: "20px",
  };

  const text1 = {
    fontSize: "50px",
  };

  return (
    <div style={divStyle}>
      <div style={tickStyle}>&#10004;</div>
      <div style={text1}>Your order has been placed.</div>
      <Link to="/pages/CustomerHomePage" style={linkStyle}>
        Go back to the front page
      </Link>
    </div>
  );
}
