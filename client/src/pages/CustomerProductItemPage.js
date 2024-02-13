import React from 'react'
// import ProductItemVariantSelection from '../pageComponents/ProductItemPageComponents/ProductItemVariantSelection'
// import ProductItemPageHeader from '../pageComponents/ProductItemPageComponents/ProductItemPageHeader'
import CustomerProductItemPageHeader from '../pageComponents/CustomerProductItemPageComponents/CustomerProductItemPageHeader'
import CustomerProductsPageItemDashBoard from '../pageComponents/CustomerProductsPageComponents/CustomerProductsPageItemDashBoard'
import CustomerProductItemVariantSelection from '../pageComponents/CustomerProductItemPageComponents/CustomerProductItemVariationSelection'

const CustomerProductItemPage = () => {
  return (
    <div>
      <CustomerProductItemPageHeader />
      <CustomerProductItemVariantSelection />
    </div>
  )
}

export default CustomerProductItemPage