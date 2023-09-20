import React from 'react'
import HomePageHeader from '../pageComponents/HomePageHeader'
import HomePageCarousel from '../pageComponents/HomePageCarousel'
import HomePageItemDashBoard from '../pageComponents/HomePageItemDashBoard'
const HomePage = () => {
  return (
    <div>
      <HomePageHeader/>
      <HomePageCarousel/>
      <HomePageItemDashBoard/>
    </div>


  )
}

export default HomePage
