import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const AuthenticationPageHeader = () => {
  return (
    <section id="LogIn" className='block block-login'>
      <Container fluid>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
        <Row>
          <Col md={{span:4, offset:4}}>
            <h2 className="h2" align="center" style={{color: 'black'}}>WELCOME  BACK!</h2>
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row>
          <Col md={{span:4, offset:4}}>
            <h4 className="h4" style={{color: 'black'}}>Sign into Account</h4>
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row>
          <Col md={{span:4, offset:4}}>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Row>&nbsp;</Row>

              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>

            </Form>
            <Row>&nbsp;</Row>
            <Row>
              <Button variant="secondary" size="sm">Login</Button>
            </Row>
          </Col>
        </Row>
        
      </Container>
    </section>
    
  )
}

export default AuthenticationPageHeader
