import React from 'react'
import Header from '../../components/Header'

const VariantItemPageHeader = () => {
  return (
    <div>
      <Header
        linkName="Login | Register"
        linkUrl="../pages/AuthenticationPage"
        linkVisibility={true}
      />
    </div>
  )
}

export default VariantItemPageHeader