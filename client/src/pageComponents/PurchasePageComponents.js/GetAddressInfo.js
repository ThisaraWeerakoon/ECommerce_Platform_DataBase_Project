import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Axios from "axios";
import { Cash } from "react-bootstrap-icons";

Axios.defaults.withCredentials = true;

function EditAddress() {
  const [addressList, setAddressList] = useState([]);
  const [addressId, setAddressID] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user's address details from the backend
    Axios.get("http://localhost:3005/user/getuserAddress")
      .then((response) => {
        console.log("Fetched Address Details:", response.data);
        // Populate the form with the retrieved address details
        setAddressList(response.data);
        console.log(addressList);
      })
      .catch((error) => {
        console.error("Error fetching address details:", error);
      });
  }, []);

  function handleRadioChange(addressDetails) {
    if (addressDetails) {
      setAddressID(addressDetails.Address_Id);
      setHouseNumber(addressDetails.House_Number);
      setStreetNumber(addressDetails.Street_Number);
      setAddressLine1(addressDetails.Address_Line_1);
      setAddressLine2(addressDetails.Address_Line_2);
      setCity(addressDetails.City);
      setRegion(addressDetails.Region);
      setPostalCode(addressDetails.Postal_Code);
    } else {
      setAddressID(0);
      setHouseNumber("");
      setStreetNumber("");
      setAddressLine1("");
      setAddressLine2("");
      setCity("");
      setRegion("");
      setPostalCode("");
    }
  }

  const addDeliveryAddress = () => {
    if (addressId === 0) {
      Axios.post("http://localhost:3005/user/userAddress", {
        houseNumber: houseNumber,
        streetNumber: streetNumber,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        region: region,
        postalCode: postalCode,
      })
        .then((res) => {
          console.log("Success");
          setAddressID(res.data);
          console.log(addressId);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  function CardPaymenthandle() {
    addDeliveryAddress();
    if (addressId > 0) {
      console.log(addressId);
      // Storing addressId in localStorage
      navigate(`/pages/CartPage/Purchase/Purchase2/${addressId}`);
    } else {
      alert("Select a delivery address");
    }
  }

  function Cashhandle() {
    addDeliveryAddress();
    if (addressId > 0) {
      Axios.get("http://localhost:3005/user/totalPrice")
        .then((res) => {
          console.log("Total price is fetched.", res.data.totalPrice);
          const tPrice = res.data.totalPrice;

          console.log(tPrice);

          Axios.post("http://localhost:3005/user/userOrder2", {
            addressId: addressId,
            totalPrice: tPrice,
          })
            .then(() => {
              console.log("Address saved successfully");
              navigate("/pages/CartPage/DeliveryOrderSaved");
            })
            .catch((error) => {
              console.error("Error while saving address:", error);
            });
        })
        .catch((error) => {
          console.error("Error while fetching total price:", error);
        });
      navigate("/pages/CartPage/DeliveryOrderSaved");
    } else {
      alert("Select a delivery address");
    }
  }

  return (
    <>
      <section id="EditAddress" className="block block-login">
        <Form>
          {addressList.map((address, index) => (
            <div key={`default-${address}`} className="mb-3">
              <Form.Check // prettier-ignore
                type="radio"
                name="addressRadioGroup"
                id={index}
                label={`${address.House_Number}, ${address.Street_Number} , ${address.Address_Line_1} , ${address.Address_Line_2}, ${address.City}, ${address.Region}, ${address.Postal_Code}`}
                onChange={() => handleRadioChange(address)}
              />
            </div>
          ))}
          <Form.Check // prettier-ignore
            type="radio"
            name="addressRadioGroup"
            id="new"
            label="Enter new delivery address"
            onChange={() => handleRadioChange("")}
          />
        </Form>
      </section>

      <section
        id="PaymentDetails"
        className="block block-login"
        style={{ float: "right" }}
      >
        <Form>
          <Row>
            <Form.Group controlId="formGroupHouseNumber">
              <Form.Control type="hidden" value={addressId} />
            </Form.Group>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formGroupHouseNumber">
                <Form.Label className="form-label">House Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter house number"
                  value={houseNumber}
                  readOnly={addressId > 0}
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
                  readOnly={addressId > 0}
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
                  readOnly={addressId > 0}
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
                  readOnly={addressId > 0}
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
                  readOnly={addressId > 0}
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
                  readOnly={addressId > 0}
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
                  readOnly={addressId > 0}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <div>
          <Row>
            <Col md={3}>
              <Button onClick={CardPaymenthandle}>Card Payment</Button>
            </Col>
            <Col md={3}>
              <Button onClick={Cashhandle}>Cash on Delivery</Button>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default EditAddress;
