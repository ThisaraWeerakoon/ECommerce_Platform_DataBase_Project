import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import ProductsPerSubCategory from './ProductPerSubCategory';
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../context/CategoryDetailsContext";
import { useContext } from "react";
import { useState } from "react";
import ItemCard from "../../components/itemCard";
import { ProductContext } from "../../context/ProductIDContext";
import Button from "react-bootstrap/Button";
import { BsArrowLeftCircleFill } from "react-icons/bs";

export default function ProductsPageItemDashBoard() {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { selectedProductID, setSelectedProductID } =
    useContext(ProductContext);

  const { Product_Category_Id, Category_Name } = useParams();

  console.log("Selected Category ID in ProductssPage:", Product_Category_Id);

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const route_path = "/ProductImages/";

  const handleNavigateToNewURL = () => {
    navigate(-1);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3005/product/getProducts", {
        params: { selectedCategoryID: Product_Category_Id },
      })
      .then((res) => {
        // console.log("res.data",res.data);
        const parsedProductDetails = JSON.parse(res.data);
        console.log("Parsed Product Categories", parsedProductDetails);

        setProducts(parsedProductDetails);
      })
      .catch((err) => console.log(err));
  }, [Product_Category_Id]);

  // console.log("SubCategories outside", subCategories);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>&nbsp;</div>
      <div style={{ marginLeft: "10px" }}>
        {/* Adjust the margin as needed */}
        <Button variant="primary" onClick={handleNavigateToNewURL}>
          <BsArrowLeftCircleFill />
          <span style={{ marginLeft: "5px" }}> Back</span>
        </Button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
          gridGap: "16px", // Adjust the gap as needed
          padding: "16px", // Add padding to the grid
        }}
      >
        {products.map((product, index) => {
          console.log("SubCategory", product);
          console.log(
            "Image URL:",
            route_path + Category_Name + "/" + product.Product_Image
          );

          return (
            <ItemCard
              key={index}
              image={route_path + Category_Name + "/" + product.Product_Image}
              title={product.Name}
              description={product.Description}
              button1Label="Buy Item"
              onClickButton1={() => {
                //Not sign in yet
                setSelectedProductID(product.Product_Id);
                navigate(
                  `/pages/ProductItemPage/${Product_Category_Id}/${Category_Name}/${product.Product_Id}`
                );
              }}
              // onClickButton2={() => {console.log('Button 2 clicked')}}
            />
          );
        })}
      </div>
    </div>
  );
}
