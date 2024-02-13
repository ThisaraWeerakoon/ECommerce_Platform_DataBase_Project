import React from 'react'
import OrderHistory from '../pageComponents/OrderReportPageComponents/OrderHistory'
import ChangeUserName from '../pageComponents/EditUserNamePageComponent/ChangeUserName'
import ProfileHeader from '../pageComponents/ProfilePageComponents/ProfileHeader'

export default function OrderReport() {
  return (
    <div>
      <ProfileHeader/>
      <OrderHistory/>
    </div>
  )
}
