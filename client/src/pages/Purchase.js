import React from 'react'
import GetPaymentInfo from '../pageComponents/PurchasePageComponents.js/GetPaymentInfo'

import GetAddressInfo from '../pageComponents/PurchasePageComponents.js/GetAddressInfo'
import Axios from 'axios';
Axios.defaults.withCredentials = true;

export default function Purchase() {
  return (
    <div>
      <GetAddressInfo/>
    </div>
  )
}
