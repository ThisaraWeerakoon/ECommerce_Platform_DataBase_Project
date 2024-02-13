import React from 'react'
import EditPersonalDetailsPageheading from '../pageComponents/EditPersonalDetailsPageComponents/EditPersonalDetailsPageheading'
import EditAddress from '../pageComponents/ProfilePageComponents/EditAddress';
import PaymentDetails from '../pageComponents/ProfilePageComponents/PaymentDetails';

export default function EditPersonalDetails() {
    return (
      <div>
        <EditPersonalDetailsPageheading/> 
        <EditAddress/>  
        <PaymentDetails/>      
      </div>
    );
  }

