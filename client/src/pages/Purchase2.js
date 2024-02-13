import React, { useState, useEffect } from "react";
import CustomerHomePageHeader from "../pageComponents/CustomerHomePageComponents/CustomerHomePageHeader";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Axios from "axios";
import { useParams } from "react-router-dom";
import "./Edit_Address.css";

Axios.defaults.withCredentials = true;
export default function PaymentInfo() {
  const [paymentType, setPaymentType] = useState("");
  const [provider, setProvider] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");
  const navigate = useNavigate();
  const [paymentId, setPaymentId] = useState("");
  const [paymentData, setPaymentData] = useState({});
  const [paymentArray, setPaymentArray] = useState([]);

  const paymentTypeOptions = ["Platinum cards", "Mastercard", "Visa"];
  const bankNames = [
    "Bank of America",
    "Wells Fargo",
    "JPMorgan Chase",
    "Citibank",
    "PNC Bank",
    "U.S. Bank",
    "Capital One",
    "TD Bank",
    "SunTrust Bank",
    "BB&T",
    "KeyBank",
    "Santander Bank",
    "Ally Bank",
    "Charles Schwab Bank",
    "Fifth Third Bank",
  ];

  // Inside your component
  const { addressId } = useParams();
  console.log("Address: ", addressId);

  useEffect(() => {
    // Fetch user's payment details from the backend
    Axios.get("http://localhost:3005/user/getuserPayment")
      .then((response) => {
        console.log("Fetched Payment Details:", response.data);
        setPaymentArray(response.data);
        console.log(paymentArray);
      })
      .catch((error) => {
        console.error("Error fetching payment details:", error);
      });
  }, []);

  const addPaymentMethod = () => {
    if (paymentId === 0) {
      Axios.post("http://localhost:3005/user/userPayment", {
        Payment_Type: paymentType,
        Provider: provider,
        Account_Number: accountNumber,
        Expiry_Date: expiryDate,
      })
        .then((res) => {
          setPaymentId(res.data.paymentDetails);
          console.log(res.data.paymentDetails);
          console.log("Success");
          
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  function handlePurchase() {
    // Add a new payment method
    addPaymentMethod();
    console.log("paymentId: ", paymentId);
    if (paymentId <= 0) {
      alert("Select a payment method");
    } else {
      console.log("paymentId: ", paymentId);
      console.log("Address: ", addressId);
      Axios.get("http://localhost:3005/user/totalPrice")
        .then((res) => {
          console.log("Total price is fetched.", res.data.totalPrice);
          const tPrice = res.data.totalPrice;

          console.log(tPrice);

          Axios.post("http://localhost:3005/user/userOrder3", {
            totalPrice: tPrice,
            addressId: addressId,
            paymentMethod: paymentId,
          })
            .then(() => {
              console.log("Address saved successfully");
            })
            .catch((error) => {
              console.error("Error while saving address:", error);
            });
        })
        .catch((error) => {
          console.error("Error while fetching total price:", error);
        });

      navigate("/pages/CartPage/DeliveryOrderSaved");
    }
  }

  function handleRadioChange(paymentDetails) {
    if (paymentDetails) {
      setPaymentId(paymentDetails.Payment_Method_Id);
      setPaymentType(paymentDetails.Payment_Type);
      setProvider(paymentDetails.Provider);
      setAccountNumber(paymentDetails.Account_Number);
      setExpiryDate(paymentDetails.Expiry_Date.split("T")[0]);
    } else {
      setPaymentId(0);
      setPaymentType("");
      setProvider("");
      setAccountNumber("");
      setExpiryDate("");
    }
  }

  const centerContentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Optional: Adjust the height to your needs
  };

  return (
    <>
      <CustomerHomePageHeader />
      <section id="EditAddress" className="block block-login">
        <Form>
          {paymentArray.map((payment, index) => (
            <div key={`default-${payment}`} className="mb-3">
              <Form.Check // prettier-ignore
                type="radio"
                name="paymentRadioGroup"
                id={index}
                label={`${payment.Payment_Type}, ${payment.Provider} , ${payment.Account_Number}`}
                onChange={() => handleRadioChange(payment)}
              />
            </div>
          ))}
          <Form.Check // prettier-ignore
            type="radio"
            name="paymentRadioGroup"
            id="new"
            label="Enter new payment method"
            onChange={() => handleRadioChange("")}
          />
        </Form>
      </section>

      <section id="PaymentDetails" className="block block-login">
        <Form>
          <Row>
            <Form.Group controlId="formGroupHouseNumber">
              <Form.Control type="hidden" value={paymentId} />
            </Form.Group>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formGroupPaymentType">
                <Form.Label className="form-label">Payment Type</Form.Label>
                <Form.Control
                  as="select"
                  placeholder="Select Payment Type"
                  readOnly={paymentId > 0}
                  value={paymentType}
                  onChange={(e) => setPaymentType(e.target.value)}
                >
                  <option value="">Select Payment Type</option>
                  {paymentTypeOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formGroupProvider">
                <Form.Label className="form-label">Provider</Form.Label>
                <Form.Control
                  as="select"
                  placeholder="Select Provider"
                  readOnly={paymentId > 0}
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                >
                  <option value="">Select Provider</option>
                  {bankNames.map((bank, index) => (
                    <option key={index} value={bank}>
                      {bank}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formGroupAccountNumber">
                <Form.Label className="form-label">Account Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter account number"
                  value={accountNumber}
                  readOnly={paymentId > 0}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formGroupExpiryDate">
                <Form.Label className="form-label">
                  Expiry Date (YYYY-MM-DD)
                </Form.Label>
                <Form.Control
                  type="date"
                  pattern="\d{4}-\d{2}-\d{2}"
                  placeholder="YYYY-MM-DD"
                  readOnly={paymentId > 0}
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <div>
          <button
            onClick={handlePurchase}
            style={{
              backgroundColor: "#007bff", // Background color
              color: "#fff", // Text color
              padding: "10px 20px", // Padding
              border: "none", // Remove the border
              borderRadius: "5px", // Rounded corners
              cursor: "pointer", // Add a pointer cursor on hover
            }}
          >
            PURCHASE
          </button>
        </div>
      </section>
    </>
  );
}
