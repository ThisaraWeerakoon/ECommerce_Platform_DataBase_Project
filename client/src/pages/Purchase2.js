import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import './Edit_Address.css';

Axios.defaults.withCredentials = true;
export default function PaymentInfo() {
  const [paymentType, setPaymentType] = useState('');
  const [provider, setProvider] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [expiryDate, setExpiryDate] = useState('');
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({});
  const [addressId,setAddressId] = useState('');

  const paymentTypeOptions = ['Platinum cards', 'Mastercard', 'Visa'];
  const bankNames = [
    'Bank of America',
    'Wells Fargo',
    'JPMorgan Chase',
    'Citibank',
    'PNC Bank',
    'U.S. Bank',
    'Capital One',
    'TD Bank',
    'SunTrust Bank',
    'BB&T',
    'KeyBank',
    'Santander Bank',
    'Ally Bank',
    'Charles Schwab Bank',
    'Fifth Third Bank',
  ];

  useEffect(() => {
    // Fetch user's payment details from the backend
    Axios.get('http://localhost:3005/user/getuserPayment')
      .then((response) => {
        console.log('Fetched Payment Details:', response.data);
        const { Payment_Type, Provider, Account_Number, Expiry_Date } = response.data.paymentDetails;
  
        // Extract only the date part (YYYY-MM-DD) from the timestamp
        const extractedDate = Expiry_Date.split('T')[0];
        
        // Use the extracted date to populate the form field
        setPaymentType(Payment_Type);
        setProvider(Provider);
        setAccountNumber(Account_Number);
        setExpiryDate(extractedDate);
      })
      .catch((error) => {
        console.error('Error fetching payment details:', error);
      });
  }, []);



  function handlePurchase() {
    Axios.get('http://localhost:3005/user/totalPrice')
      .then((res) => {
        console.log("Total price is fetched.", res.data.totalPrice);
        const tPrice = res.data.totalPrice;
  
        console.log(tPrice);
  
        Axios.post('http://localhost:3005/user/userOrder3', {  totalPrice: tPrice })
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

      navigate('/pages/CartPage/StorePickupOrderSaved');
  }
 
const centerContentStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Optional: Adjust the height to your needs
};

  return (
    <div style={centerContentStyle}>
    <section id="PaymentDetails" className="block block-login">
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formGroupPaymentType">
              <Form.Label className="form-label">Payment Type</Form.Label>
              <Form.Control
                as="select"
                value={paymentType || paymentData.Payment_Type}
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
                value={provider || paymentData.Provider}
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
                value={accountNumber || paymentData.Account_Number}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formGroupExpiryDate">
              <Form.Label className="form-label">Expiry Date (YYYY-MM-DD)</Form.Label>
              <Form.Control
                type="date"
                pattern="\d{4}-\d{2}-\d{2}"
                placeholder="YYYY-MM-DD"
                value={expiryDate || paymentData.Expiry_Date}
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
    backgroundColor: '#007bff', // Background color
    color: '#fff', // Text color
    padding: '10px 20px', // Padding
    border: 'none', // Remove the border
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer', // Add a pointer cursor on hover
  }}
>
  PURCHASE
</button>
      </div>
      <Row>
        <Link to="/pages/Profile" className="back-link mb-3">
          Back to Profile
        </Link>
      </Row>
    </section>
</div>
  );
}
