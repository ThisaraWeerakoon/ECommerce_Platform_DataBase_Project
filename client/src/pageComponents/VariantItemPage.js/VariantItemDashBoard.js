import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductIDContext";
import { CategoryContext } from "../../context/CategoryDetailsContext";
import { VarientItemContext } from "../../context/VariantIDContext";
import { useEffect } from "react";
import axios from "axios";
import "./VariantStyles.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";

function VariantItemDashBoard() {
  const { selectedProductID, setSelectedProductID } =
    useContext(ProductContext);
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  // const { selectedVariantID, setSelectedVariantID } =
  //   useContext(VarientItemContext);
  const [productDetails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [variantItemDetails, setVariantItemDetails] = useState(null);
  const navigate = useNavigate();

  const { Product_Category_Id, Category_Name, Product_Id, selectedVariantID } =
    useParams();

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    const name = "Name of the Product";
    const price = 19.99;
    const totalPrice = price * quantity;

    alert(`Please Logged in before adding to cart`);
    navigate("/pages/AuthenticationPage");
  };

  const route_path = "/ProductImages/";

  // const handleAddToCart = () => {
  //     const name = "Name of the Product";
  //     const price = 19.99;
  //     const totalPrice = price * quantity;

  //     alert(`Please Logged in before adding to cart`);
  //     navigate("/pages/AuthenticationPage");
  // };

  // const route_path = "/ProductImages/";

  useEffect(() => {
    axios
      .get("http://localhost:3005/product/getProductItemDetails", {
        params: { selectedProductID: Product_Id },
      })
      .then((res) => {
        const parsedProductDetails = JSON.parse(res.data);
        console.log("Parsed Product Details", parsedProductDetails);

        setProductDetails(parsedProductDetails);
      })
      .catch((err) => console.log(err));
  }, [Product_Category_Id]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/product/getVariantItemDetails", {
        params: { selectedVariantID: selectedVariantID },
      })
      .then((res) => {
        // console.log("getVariantItemDetails backend call",selectedVariantID);
        const parsedVariantItemtDetails = JSON.parse(res.data);
        console.log("parsed Variant ItemtDetails", parsedVariantItemtDetails);

        setVariantItemDetails(parsedVariantItemtDetails);
      })
      .catch((err) => console.log(err));
  }, [selectedVariantID]);

  const handleNavigateToNewURL = () => {
    navigate("/");
  };

  return (
    <div>
    <div className="product-wrapper">
      {console.log("setVariantItemDetails", variantItemDetails)}
      {productDetails && productDetails.length > 0 && (
        <div className="product-container">
          <img
            className="product-image"
            src={
              route_path + Category_Name + "/" + productDetails[0].Product_Image
            }
            alt="Product Image"
          />
          {variantItemDetails && variantItemDetails.length > 0 && (
            <div className="product-details">
              <Container fluid>
                <h1 className="product-title">{productDetails[0].Name}</h1>
                <p className="product-description">
                  {productDetails[0].Description}
                </p>
                {/* return (
        <div>
            {console.log("setVariantItemDetails",variantItemDetails)};
        {productDetails && productDetails.length > 0 && (
            <div className="product-container">
            <img className="product-image" src={route_path + Category_Name+"/"+productDetails[0].Product_Image} alt="Product Image" />
            {variantItemDetails && variantItemDetails.length>0 && (
                            <div className="product-details">
                            <h1>{productDetails[0].Name}</h1>
                            <p>{productDetails[0].Description}</p>
            
                            <p>SKU: {variantItemDetails[0].SKU}</p>
                            <p>Weight: {variantItemDetails[0].Weight}</p>
                            <p>Price: {variantItemDetails[0].Price}</p>
                            <label htmlFor="quantity-input">Quantity:</label>
                            <input
                                type="number"
                                id="quantity-input"
                                value={quantity}
                                min="1"
                                onChange={handleQuantityChange}
                            />
                            <button id="add-to-cart" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        </div>
            )} */}

                <div className="product-info">
                  <p className="product-info-item">
                    SKU: {variantItemDetails[0].SKU}
                  </p>
                  <p className="product-info-item">
                    Weight: {variantItemDetails[0].Weight}
                  </p>
                  <p className="product-info-item">
                    Price: {variantItemDetails[0].Price}
                  </p>
                </div>

                <Form>
                  <Form.Group
                    className="mb-3"
                    // controlId="formGroupQuantity"
                    style={{ color: "black" }}
                  >
                    <Form.Label htmlFor="quantity-input">Quantity:</Form.Label>
                    <Form.Control
                      type="number"
                      id="quantity-input"
                      value={quantity}
                      min="1"
                      onChange={handleQuantityChange}
                    />
                  </Form.Group>
                </Form>
                <Row>&nbsp;</Row>
                <Row>
                  <button
                    id="add-to-cart"
                    onClick={handleAddToCart}
                    className="product-button"
                  >
                    Add to Cart
                  </button>
                </Row>
              </Container>
            </div>
          )}
        </div>
      )}
    </div>
    <button onClick={handleNavigateToNewURL}>Back to HomePage</button>
    </div>
  );
}

export default VariantItemDashBoard;
