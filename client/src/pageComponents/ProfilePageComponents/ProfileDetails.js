import React, { useState, useEffect } from 'react'; 
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ProfilePic from '/Users/nisith/Documents/GitHub/ECommerce_Platform_DataBase_Project/client/src/images/Other/Profile_image.jpeg';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './Profile_Image.css';
import { useNavigate } from 'react-router-dom';

const ProfileImage = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3005/user/getSession')
    .then(res => {
      console.log("Response Data:", res.data)
      if(res.data.valid){
        setName(res.data.user.name);
        setId(res.data.user.userID);
        console.log("Name: ", res.data.user.name);
        console.log("ID: ", res.data.user.userID);
      }  
      else{
        navigate("/pages/Profile")  
      }
      console.log(res)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <div className="profile-box">
            <Image src={ProfilePic} roundedCircle alt="Profile Image" className="profile-image" />
            <div className='name-email'>
            <div class="user-info">
              <h2>User Information</h2>
            </div>

            </div>

            <button className='edit-button'>
              EDIT
            </button>  

          </div>
          
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileImage;
