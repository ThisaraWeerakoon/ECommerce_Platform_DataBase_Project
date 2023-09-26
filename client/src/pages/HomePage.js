import React from 'react'
import HomePageHeader from '../pageComponents/HomePageComponents/HomePageHeader'
import HomePageCarousel from '../pageComponents/HomePageComponents/HomePageCarousel'
import HomePageItemDashBoard from '../pageComponents/HomePageComponents/HomePageItemDashBoard'
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
