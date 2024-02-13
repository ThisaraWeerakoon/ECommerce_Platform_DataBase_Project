import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import ProductsPerSubCategory from './ProductPerSubCategory';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CategoryContext } from '../../context/CategoryDetailsContext';
import { useContext } from 'react';
import { useState } from 'react';
import ItemCard from '../../components/itemCard';
import { ProductContext } from '../../context/ProductIDContext';
import ProductItem from './ProductItem';
import { VariantContext } from '../../context/VariantOptionsContext';



export default function ProductItemVariantSelection() {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  

  const {selectedProductID, setSelectedProductID} = useContext(ProductContext);

  // const {selectedVariantOptions,setSelectedVariantOptions} = useContext(VariantContext)

  const [variantTypes, setVariantTypes] = useState([]);
  const [variationOptions, setVariationOptions] = useState([]);
  const [newVariants, setNewVariants] = useState([]);
  // console.log("Selected Category ID:", selectedCategory.Product_Category_Id);

  const [productDetails, setProductDetails] = useState(null);


  const navigate = useNavigate();
  const {Product_Category_Id,Category_Name,Product_Id} = useParams();

  const route_path = "/ProductImages/";

  useEffect(() => {
    axios.get('http://localhost:3005/product/getProductItemDetails', { params: { selectedProductID: Product_Id } })
      .then(res => {
        
        const parsedProductDetails = JSON.parse(res.data);
        // console.log("Parsed Product Details",parsedProductDetails);

        setProductDetails(parsedProductDetails);

    })
      .catch(err => console.log(err));
  }, [Product_Id]);

  // useEffect(() => {
  //   axios.get('http://localhost:3005/product/getVariantTypes', { params: { selectedCategoryID: selectedCategory.Product_Category_Id } })
  //     .then(res => {
  //       const parsedVariantTypes = JSON.parse(res.data);
  //       console.log("Parsed parsedVariantTypes",parsedVariantTypes);
  //       setVariantTypes(parsedVariantTypes);
  //       console.log("variantTypes", variantTypes);
  //       variantTypes.map((variantType, index) => {
  //         axios.get('http://localhost:3005/product/getVariantOptions', { params: { selectedVariantTypeID: variantType.Variant_Type_Id } }).
  //         then(res => {
  //           const parsedVariantOptions = JSON.parse(res.data);
  //           console.log("Parsed parsedVariantOptions",parsedVariantOptions);
  //         }).catch(err => console.log(err));
          
  //       });
  //   })
  //     .catch(err => console.log(err));
  // }, []);

  // useEffect(() => {
  //   axios.get('http://localhost:3005/product/getVariantTypes', { params: { selectedCategoryID: selectedCategory.Product_Category_Id } })
  //     .then(res => {
  //       const parsedVariantTypes = JSON.parse(res.data);
  //       // console.log("Parsed parsedVariantTypes", parsedVariantTypes);
  //       setVariantTypes(parsedVariantTypes);

  //       const variants = parsedVariantTypes.map((variantType, index) => ({
  //         name: variantType.Variation_Name,
  //         options: variationOptions[index] ? variationOptions[index].map((option) => option.Variation_Option_Name) : [],
  //       }));
  //       console.log("newVariants",variants);
  //       setNewVariants(variants);
  //     })
  //     .catch(err => console.log(err));
  // }, [selectedCategory.Product_Category_Id]); // Added a dependency to the useEffect

  // // Use another useEffect to work with variantTypes after it has been updated
  // useEffect(() => {
  //   if (variantTypes.length > 0) {
  //     const parsedVariationOptions = [];
  //     variantTypes.forEach((variantType) => {
  //       axios.get('http://localhost:3005/product/getVariantOptions', { params: { selectedVariantTypeID: variantType.Variant_Type_Id } })
  //         .then((res) => {
  //           const parsedVariantOptionForVariantType = JSON.parse(res.data);
  //           // console.log("Parsed parsedVariantOptions", parsedVariantOptionForVariantType);
  //           parsedVariationOptions.push(parsedVariantOptionForVariantType);
  //           // console.log("parsedVariationOptions", parsedVariationOptions);
  //           setVariationOptions(parsedVariationOptions);
  //         })
  //         .catch((err) => console.log(err));
  //     });
  //   }
  // }, [variantTypes]); // Use variantTypes as a dependency
  
  useEffect(() => {
    axios.get('http://localhost:3005/product/getVariantTypesAndOptions', { params: { selectedCategoryID: Product_Category_Id } })
      .then(res => {
        // const parsedProductDetails = JSON.parse(res.data);
        // console.log("Parsed Product Details",parsedProductDetails);
        console.log("getVariantTypesAndOptions",selectedCategory);
        const variants = res.data;
        console.log("variants",variants);
        setNewVariants(variants);
        // console.log("newVariants",newVariants);

        // setProductDetails(parsedProductDetails);

    })
      .catch(err => console.log(err));
  }, [Product_Category_Id]);



  // console.log("variationOptions",variationOptions);
  // console.log("variantTypes",variantTypes);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const variants = variantTypes.map((variantType, index) => ({
  //   name: variantType.Variation_Name,
  //   options: variationOptions[index] ? variationOptions[index].map((option) => option.Variation_Option_Name) : [],
  // }));
 
  // setSelectedVariantOptions(variants);

  // console.log(selectedVariantOptions);
  

  // console.log("variants",variants);
  return (

    <div>
      {console.log("selectedProductID in ProductItemVariationSelection", selectedProductID)}
      {productDetails && productDetails.length > 0 && (
      <div> 
       {/* <h1>{productDetails[0].Name}</h1>
        <h1>{productDetails[0].Description}</h1>
        <img src={route_path + selectedCategory.Category_Name+"/"+productDetails[0].Product_Image}/> */}
        <ProductItem
          name={productDetails[0].Name}
          description={productDetails[0].Description}
          image={route_path + Category_Name+"/"+productDetails[0].Product_Image}
          variants={newVariants}
        />
        
        {/* <button onClick={handleProceed}>Proceed</button> */}
        

        
      </div>    
      )}
    </div>
  );
}


