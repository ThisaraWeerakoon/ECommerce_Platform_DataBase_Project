import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header'

axios.defaults.withCredentials = true;

const ProfileHeader = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3005/user/getSession')
    .then(res => {
      console.log("Response Data:", res.data);
      if(res.data.valid){
        setName(res.data.user.name);
        setId(res.data.user.userID);
        console.log("Name: ", res.data.user.name);
        console.log("ID: ", res.data.user.userID);
      }
      else{
        navigate("/pages/AuthenticationPage")
      }
      console.log(res)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <Header
        linkName={"Hello " + name}
        linkUrl=""
        profileVisibility={true}
        userID={id}
      />
    </div>
  )
}

export default ProfileHeader