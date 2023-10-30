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


export default function CustomerSubCategoryPageItemDashBoard() {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  console.log("Selected Category ID:", selectedCategory);

  const [subCategories, setSubCategories] = useState([]);
  const navigate = useNavigate();

  const route_path = "/Catagories/";

  useEffect(() => {
    axios.get('http://localhost:3005/product/getSubCategories', { params: { selectedCategoryID: selectedCategory.Product_Category_Id } })
      .then(res => {
        // console.log("res.data",res.data);
        const parsedSubCategories = JSON.parse(res.data);
        console.log("Parsed sub categories",parsedSubCategories);

        setSubCategories(parsedSubCategories);
        // console.log("SubCatgories",subCategories);
        // if (res.data.valid) {
        //   const parsedSubCategories = JSON.parse(res.data);
        //   setSubCategories(parsedSubCategories);
        // } else {
        //   navigate("/pages/HomePage");
        // }
      // })

      if (Array.isArray(parsedSubCategories) && parsedSubCategories.length === 0) {
        // The JSON object is an empty array
        console.log("The JSON object is an empty array");
        navigate("/pages/CustomerProductsPage");
        // Handle the case when the array is empty, e.g., show a message
      } else {
        // The JSON object is not an empty array
        console.log("Parsed sub categories", parsedSubCategories);
  
        setSubCategories(parsedSubCategories);
      }
    })
      .catch(err => console.log(err));
  }, [selectedCategory.Product_Category_Id]);

  // console.log("SubCategories outside", subCategories);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
      gridGap: '16px', // Adjust the gap as needed
      padding: '16px', // Add padding to the grid
    }} >
{subCategories.map((subCategory, index) => {
  console.log("SubCategory",subCategory); 

 return (
   <ItemCard
     key={index}
     image={route_path +subCategory.Category_Image}
     title={subCategory.Category_Name}
     description={subCategory.description}
     button1Label="See More"
     onClickButton1={() => 
       { 
         console.log("Sub Categories hi",subCategory.Product_Category_Id);     
         setSelectedCategory({Product_Category_Id:subCategory.Product_Category_Id,Category_Name:subCategory .Category_Name});
         console.log("Selected Category ID inside onClickButton1:", subCategory.Product_Category_Id);
         // history.push('../pages/ProductsPage');

         navigate("/pages/CustomerSubCategoryPage");

       }
     }
     // onClickButton2={() => {console.log('Button 2 clicked')}}
   />
 );
})}
</div>
  );
}