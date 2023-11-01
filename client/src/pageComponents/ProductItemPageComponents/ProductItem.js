import React, { useContext } from 'react';
import VariantDropdown from './VariantDropdown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VariantContext } from '../../context/VariantOptionsContext';
import axios from 'axios';
import { useEffect } from 'react';
import { VarientItemContext } from '../../context/VariantIDContext';
import { useParams } from 'react-router-dom';
const ProductItem = ({ name, description, image, variants }) => {

  // console.log("Received variants in ProductItem:", variants);

    // Create a state to manage the selected values for each variant
    const [selectedValues, setSelectedValues] = useState({});
    const [selectedVariantID,setSelectedVariantID] = useState();
    const {Product_Category_Id,Category_Name,Product_Id} = useParams();

    // const {selectedVariantID,setSelectedVariantID} = useContext(VarientItemContext);
    const navigate = useNavigate();

    // const {selectedVariantOptions,setSetSelectedVariantOptions} = useContext(VariantContext);

    useEffect(() => {
      if (selectedVariantID !== undefined) {
        navigate(`/pages/VariantItemPage/${Product_Category_Id}/${Category_Name}/${Product_Id}/${selectedVariantID}`);
      }
    }, [selectedVariantID]);

    // Define a function to handle changes in the selected value for a variant
    const handleVariantChange = (variantName, selectedValue) => {
      setSelectedValues({
        ...selectedValues,
        [variantName]: selectedValue,
      });
    };


      // Define a function to handle the button click
  const handleButtonClick = () => {
    // Call the backend API here
  //   const parsedVairantID = null;
  //   axios.get('http://localhost:3005/product/getVariantsByOptions', { params: { selectedVariantOptionIDs: Object.values(selectedValues).join(',') } })
  //   .then(res => {
  //     const parsedVairantID = JSON.parse(res.data);
  //     console.log(parsedVairantID);
  //     console.log("Parsed VairantID",parsedVairantID[0]['0'].Variant_Id);
  //     setSelectedVariantID(parsedVairantID[0]['0'].Variant_Id);


  //     // setProductDetails(parsedProductDetails);

  // })
  //   .catch(err => console.log(err));


  //   // After the API call is successful, navigate to a new page
  //   navigate(`/pages/VariantItemPage/${selectedVariantID}`); // Replace '/newPage' with the actual URL of the new page

    // Call the backend API here
    axios.get('http://localhost:3005/product/getVariantsByOptions', {
      params: { selectedVariantOptionIDs: Object.values(selectedValues).join(',') }
    })
    .then(res => {
      const parsedVariantID = JSON.parse(res.data);
      const newSelectedVariantID = parsedVariantID[0]['0'].Variant_Id;
      setSelectedVariantID(newSelectedVariantID); // Update the state
    })
    .catch(err => console.log(err));



  
  };


  return (
    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      {console.log('Selected Values:', selectedValues)}
      <img src={image} alt={name} style={{ maxWidth: '150px', maxHeight: '150px' }} />
      <div style={{ marginLeft: '20px' }}>
        <h2 style={{ fontSize: '24px', margin: '0' }}>{name}</h2>
        <p style={{ marginTop: '10px' }}>{description}</p>
        <div style={{ marginTop: '20px' }}>
          {variants.map((variant, index) => (
            // console.log("variant",variant),
            <div key={variant.Variant_Type_Id}>
              <label htmlFor={`variant-dropdown-${variant.Variant_Type_Id}`} style={{ fontWeight: 'bold' }}>{variant.Variation_Name}:</label>
              {/* <select id={`variant-dropdown-${index}`} style={{ padding: '5px', margin: '5px 10px' }}>
                {variant.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>{option}</option>
                ))}
              </select> */}
              <VariantDropdown
                options={variant.Variation_Options}
                selectedValue={selectedValues[variant.Variation_Name] || ''}
                onSelect={(value) => handleVariantChange(variant.Variation_Name, value)}
              />              
            </div>
          ))}
        </div>
        <button onClick={handleButtonClick}>Click Me</button>
      </div>
    </div>
    
  );
};

export default ProductItem;

