import React from 'react'
import { useContext } from 'react'
import { VarientItemContext } from '../context/VariantIDContext'

const SamplePage = () => {
  const {selectedVariantID,setSelectedVariantID} = useContext(VarientItemContext);
  return (
    <div>
      <h1>{selectedVariantID}</h1>
      {/* <h1>Hello</h1> */}
    </div>
  )
}

export default SamplePage
