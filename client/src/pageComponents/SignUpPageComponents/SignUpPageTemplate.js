import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import {LoginValidation} from '../../Validations/LoginValidation';
import Axios from 'axios';

function SignUpPageTemplate() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const signUpUser = () => {
    console.log(email);
    Axios.post('http://localhost:3002/create',{
      email : email,
      password : password
    }).then(()=> {
      console.log("Success");
    })
  }
    // Function to handle the login button click
  function executeSignUp() {
      // Call the LoginValidation function with email and password
      LoginValidation(email, password);
      signUpUser(email,password);
  }

  return (
    <section id="LogIn" className='block block-login'>
      <Container fluid>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
        <Row>
          <Col md={{span:4, offset:4}}>
            <h2 className="h2" align="center">WELCOME  BACK!</h2>
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row>
          <Col md={{span:4, offset:4}}>
            <h4 className="h4">Create Account</h4>
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row>
          <Col md={{span:4, offset:4}}>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail" style={{color: 'black'}}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Row>&nbsp;</Row>

              <Form.Group className="mb-3" controlId="formGroupEmail" style={{color: 'black'}}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstName" placeholder="Enter first name" onChange={(e) => setFirstName(e.target.value)} />
              </Form.Group>

              <Row>&nbsp;</Row>

              <Form.Group className="mb-3" controlId="formGroupEmail" style={{color: 'black'}}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Enter last name" onChange={(e) => setLastName(e.target.value)} />
              </Form.Group>

              <Row>&nbsp;</Row>

              <Form.Group className="mb-3" controlId="formGroupEmail" style={{color: 'black'}}>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phoneNumber" placeholder="Enter phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
              </Form.Group>

              <Row>&nbsp;</Row>

              <Form.Group className="mb-3" controlId="formGroupPassword" style={{color: 'black'}}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>
            </Form>

            <Row>&nbsp;</Row>


            <Row>
              <Button variant='secondary' size="sm" onClick={executeSignUp}>Sign Up</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SignUpPageTemplate
