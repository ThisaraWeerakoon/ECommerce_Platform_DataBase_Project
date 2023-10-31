import React, { useState, useEffect } from 'react'; 
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ProfilePic from '../../images/Other/Profile_image.jpeg'
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './Profile_Image.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true;

const ProfileDetails = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3005/user/userDetails')
    .then(res => {
      console.log("Response Data:", res.data);
      if (res.data.user) {
        // Check if the "user" property exists in the response data
        setUser(res.data.user);
        console.log("User Data:", res.data.user);
      } else {
        navigate("/pages/AuthenticationPage");
      }
    })
    .catch(err => {
      console.log(err);
      navigate("/pages/AuthenticationPage"); // Handle the error by redirecting to the AuthenticationPage
    });
  }, []);

  const handleEditClick = () => {  
    navigate("/pages/Profile/EditPersonalDetails"); 
  };

  function handleUserNameChange() {
    navigate("/pages/Profile/EditUserName");
  }
  
  function handleChangePassword() {
    
  }

  function handleOrderReport(){
    navigate("/pages/Profile/OrderReport");
  }
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
        <div className="page-container">
          <div className="profile-box">
            <Image src={ProfilePic} roundedCircle alt="Profile Image" className="profile-image" />
            <div className="user-info">
              <h2 className="mb-4">User Information</h2>
              <div className="user-details">
                <div className="user-detail">
                  <strong>First Name:</strong> {user.First_Name}
                </div>
                <div className="user-detail">
                  <strong>Last Name:</strong> {user.Last_Name}
                </div>
                <div className="user-detail">
                  <strong>Email:</strong> {user.Email}
                </div>
                <div className="user-detail">
                  <strong>Phone Number:</strong> {user.Phone_Number}
                </div>
              </div>
            </div>
            <div className="action-buttons">
              <button onClick={handleEditClick}>Set or Update Default Payment, Address Details</button>
              <button onClick={handleOrderReport}>Order History</button>
              <button onClick={handleUserNameChange}>Change User Name</button>
              <button onClick={handleChangePassword}>Change Password</button>
            </div>
          </div>
      </div>    
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileDetails;
