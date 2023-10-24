import React from 'react'
import CustomerHomePageItemDashBoard from '../pageComponents/CustomerHomePageComponents/CustomerHomePageItemDashBoard'
import CustomerHomePageHeader from '../pageComponents/CustomerHomePageComponents/CustomerHomePageHeader'
import CustomerHomePageCarousel from '../pageComponents/CustomerHomePageComponents/CustomerHomePageCarousel'
const CustomerHomePage = () => {
  return (
    <div>
      <CustomerHomePageHeader/>
      <CustomerHomePageCarousel/>
      <CustomerHomePageItemDashBoard/>
    </div>
  )
}

export default CustomerHomePage


