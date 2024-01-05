import React from 'react'
import GetPaymentInfo from '../pageComponents/PurchasePageComponents.js/GetPaymentInfo'
import CustomerHomePageHeader from '../pageComponents/CustomerHomePageComponents/CustomerHomePageHeader';

import GetAddressInfo from '../pageComponents/PurchasePageComponents.js/GetAddressInfo'
import Axios from 'axios';
Axios.defaults.withCredentials = true;

export default function Purchase() {
  return (
    <div>
      <CustomerHomePageHeader/>
      <GetAddressInfo/>
    </div>
  )
}
