import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { SignUpValidation } from "../../Validations/SignUpValidation";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function APAddEmployees() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const addAdmin = () => {
    Axios.post("http://localhost:3005/user/addAdmin", {
      email: email,
      phoneNumber: phoneNumber,
      firstName: firstName,
      lastName: lastName,
      newPassword: newPassword,
    })
      .then(() => {
        console.log("Success");
        navigate("/pages/AdminPanel");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [errors, setErrors] = useState({
    email: [],
    newPassword: [],
    confirmPassword: [],
    phoneNumber: [],
    firstName: [],
    lastName: [],
  });

  // Function to handle the sign-up button click
  function executeSignUp() {
    const validationErrors = SignUpValidation(
      email,
      newPassword,
      confirmPassword,
      phoneNumber,
      firstName,
      lastName
    );
    setErrors(validationErrors);

    // Check if there are no errors for any field
    if (
      !Object.values(validationErrors).some(
        (fieldErrors) => fieldErrors.length > 0
      )
    ) {
      addAdmin();
    }
  }

  return (
    <section id="AddNewEmp" className="block block-login main-container">
      <Container fluid style={{ marginLeft: 20 }}>
        <Row>
          <h4 className="h4">Add New Admin</h4>
        </Row>
        <Row>
          <Col md={{ span: 12 }}>
            <Form>
              <Row>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGroupFname"
                  style={{ color: "black" }}
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="firstName"
                    placeholder="Enter first name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && (
                    <span className="text-danger">{errors.firstName}</span>
                  )}
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGroupLname"
                  style={{ color: "black" }}
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="lastName"
                    placeholder="Enter last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && (
                    <span className="text-danger">{errors.lastName}</span>
                  )}
                </Form.Group>
              </Row>

              <Form.Group
                className="mb-3"
                controlId="formGroupEmail"
                style={{ color: "black" }}
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formGroupPhoneNo"
                style={{ color: "black" }}
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="phoneNumber"
                  placeholder="Enter phone number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && (
                  <span className="text-danger">{errors.phoneNumber}</span>
                )}
              </Form.Group>

              <Row>
                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGroupNewPassword"
                  style={{ color: "black" }}
                >
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {errors.newPassword && (
                    <span className="text-danger">{errors.newPassword}</span>
                  )}
                </Form.Group>

                <Form.Group
                  as={Col}
                  className="mb-3"
                  controlId="formGroupConfirmPassword"
                  style={{ color: "black" }}
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors.confirmPassword && (
                    <span className="text-danger">
                      {errors.confirmPassword}
                    </span>
                  )}
                </Form.Group>
              </Row>
            </Form>

            <Row>
              <Button variant="secondary" size="sm" onClick={executeSignUp}>
                Add Employee
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default APAddEmployees;
