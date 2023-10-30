import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import { Cash } from 'react-bootstrap-icons';

Axios.defaults.withCredentials = true;

function EditAddress() {
  const [houseNumber, setHouseNumber] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user's address details from the backend
    Axios.get('http://localhost:3005/user/getuserAddress')
      .then((response) => {
        console.log("Fetched Address Details:", response.data);
        // Populate the form with the retrieved address details
        const addressDetails = response.data.paymentDetails;

        if (addressDetails) {
          setHouseNumber(addressDetails.House_Number);
          setStreetNumber(addressDetails.Street_Number);
          setAddressLine1(addressDetails.Address_Line_1);
          setAddressLine2(addressDetails.Address_Line_2);
          setCity(addressDetails.City);
          setRegion(addressDetails.Region);
          setPostalCode(addressDetails.Postal_Code);
        }
      })
      .catch((error) => {
        console.error('Error fetching address details:', error);
      });
  }, []);

  function CardPaymenthandle(){
    navigate("/pages/CartPage/Purchase/Purchase2");
  }
  function Cashhandle(){
    Axios.get('http://localhost:3005/user/totalPrice')
    .then((res) => {
      console.log("Total price is fetched.", res.data.totalPrice);
      const tPrice = res.data.totalPrice;

      console.log(tPrice);


      Axios.post('http://localhost:3005/user/userOrder2', { totalPrice: tPrice })
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
    
  


  return (
 
    <section id="EditAddress" className="block block-login">
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formGroupHouseNumber">
              <Form.Label className="form-label">House Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter house number"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGroupStreetNumber">
              <Form.Label className="form-label">Street Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter street number"
                value={streetNumber}
                onChange={(e) => setStreetNumber(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formGroupAddressLine1">
              <Form.Label className="form-label">Address Line 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address line 1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGroupAddressLine2">
              <Form.Label className="form-label">Address Line 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address line 2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formGroupCity">
              <Form.Label className="form-label">City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGroupRegion">
              <Form.Label className="form-label">Region</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formGroupPostalCode">
              <Form.Label className="form-label">Postal Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter postal code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Link to="/pages/Profile" className="back-link mb-3">
            Back to Profile
          </Link>
        </Row>
      </Form>

      <div>
        <button onClick={CardPaymenthandle}>Card Payment</button>
        <button onClick={Cashhandle}>Cash on Delivery</button>
      </div>
    </section>

  );
  }

export default EditAddress;