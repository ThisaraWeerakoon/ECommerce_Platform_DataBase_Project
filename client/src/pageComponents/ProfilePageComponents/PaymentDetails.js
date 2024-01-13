import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
// import DatePicker from 'react-datepicker';
import Axios from 'axios';
import './Edit_Address.css';



export default function PaymentDetails() {
  const [paymentType, setPaymentType] = useState('');
  const [provider, setProvider] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [expiryDate, setExpiryDate] = useState('');
  const navigate = useNavigate();

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
    'Fifth Third Bank'
  ];
  

  const savePaymentDetails = () => {
    const paymentData = {
      Payment_Type: paymentType,
      Provider: provider,
      Account_Number: accountNumber,
      Expiry_Date: expiryDate,
    };
    console.log(paymentData)
    Axios.post('http://localhost:3005/user/userPayment', paymentData)
      .then(() => {
        console.log('Payment details saved successfully');
        setIsSaved(true);
      })
      .catch((error) => {
        console.error('Error while saving payment details:', error);
      });
  };


  return (
    <section id="PaymentDetails" className="block block-login">
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formGroupPaymentType">
              <Form.Label className="form-label">Payment Type</Form.Label>
              <Form.Control as="select" value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
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
              {/* Use a select input for the provider */}
              <Form.Control as="select" value={provider} onChange={(e) => setProvider(e.target.value)}>
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
              <Form.Control type="text" placeholder="Enter account number" onChange={(e) => setAccountNumber(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={6}>
          <Form.Group className="mb-3" controlId="formGroupExpiryDate">
              <Form.Label className="form-label">Expiry Date (YYYY-MM-DD)</Form.Label>
              <Form.Control
                type="date"  // Set input type to 'date'
                pattern="\d{4}-\d{2}-\d{2}"  // Use pattern to enforce YYYY-MM-DD format
                placeholder="YYYY-MM-DD"
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </Form.Group>

          </Col>
        </Row>

        <Button
          variant="secondary"
          size="sm"
          onClick={savePaymentDetails}
          className="save-button"
          disabled={isSaved}
        >
          {isSaved ? 'DONE' : 'Save Payment Details'}
        </Button>

      </Form>

      <Row>
        <Link to="/pages/Profile" className="back-link mb-3">
          Back to Profile
        </Link>
      </Row>
    </section>
  );
}


    

