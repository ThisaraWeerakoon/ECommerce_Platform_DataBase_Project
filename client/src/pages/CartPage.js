import React from 'react'
import CartItems from '../pageComponents/CartPageComponent/CartItems'
import CustomerHomePageHeader from '../pageComponents/CustomerHomePageComponents/CustomerHomePageHeader';
export default function CartPage() {
  return (
    <div>
      <CustomerHomePageHeader/>
      <CartItems/>
    </div>
  )
}
