import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import './Edit_Address.css';
import Axios from 'axios';

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

  const saveAddress = () => {
    const addressData = {
      houseNumber: houseNumber,
      streetNumber: streetNumber,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city: city,
      region: region,
      postalCode: postalCode,
    };

    Axios.post('http://localhost:3005/user/userAddress', addressData)
      .then(() => {
        console.log("Address saved successfully");
      })
      .catch((error) => {
        console.error("Error while saving address:", error);
      });
  };

  return (
    <section id="EditAddress" className="block block-login" >
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formGroupHouseNumber">
              <Form.Label className="form-label">House Number</Form.Label>
              <Form.Control type="text" placeholder="Enter house number" onChange={(e) => setHouseNumber(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGroupStreetNumber">
              <Form.Label className="form-label">Street Number</Form.Label>
              <Form.Control type="text" placeholder="Enter street number" onChange={(e) => setStreetNumber(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formGroupAddressLine1">
              <Form.Label className="form-label">Address Line 1</Form.Label>
              <Form.Control type="text" placeholder="Enter address line 1" onChange={(e) => setAddressLine1(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGroupAddressLine2">
              <Form.Label className="form-label">Address Line 2</Form.Label>
              <Form.Control type="text" placeholder="Enter address line 2" onChange={(e) => setAddressLine2(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formGroupCity">
              <Form.Label className="form-label">City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" onChange={(e) => setCity(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formGroupRegion">
              <Form.Label className="form-label">Region</Form.Label>
              <Form.Control type="text" placeholder="Enter region" onChange={(e) => setRegion(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formGroupPostalCode">
              <Form.Label className="form-label">Postal Code</Form.Label>
              <Form.Control type="text" placeholder="Enter postal code" onChange={(e) => setPostalCode(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="secondary" size="sm" onClick={saveAddress} className="save-button">
          Save Default Address
        </Button>

        <Row>
          <Link to="/pages/Profile" className="back-link mb-3">
            Back to Profile
          </Link>
        </Row>
      </Form>
    </section>
  );
}

export default EditAddress;
