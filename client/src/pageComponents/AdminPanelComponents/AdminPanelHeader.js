import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header';
import {BsJustify} from 'react-icons/bs';
import './style.css';

//axios.defaults.withCredentials = true;

const AdminPanelHeader = ({OpenSidebar}) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3005/user/getSession')
    .then(res => {
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
        cartVisibility={false}
        userID={id}
      />
      <div className='menu-icon' sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <BsJustify className='icon' onClick={OpenSidebar}/>
      </div>
    </div>
  )
}


export default AdminPanelHeader;
