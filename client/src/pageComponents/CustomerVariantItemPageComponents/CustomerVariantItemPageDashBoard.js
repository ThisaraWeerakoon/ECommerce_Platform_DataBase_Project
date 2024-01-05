import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductIDContext";
import { CategoryContext } from "../../context/CategoryDetailsContext";
import { VarientItemContext } from "../../context/VariantIDContext";
import { useEffect } from "react";
import axios from "axios";
import "./VariantStyles.css";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsArrowLeftCircleFill } from "react-icons/bs";

function CustomerVariantItemDashBoard() {
  // const { selectedProductID, setSelectedProductID } =
  //   useContext(ProductContext);
  // const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  // const { selectedVariantID, setSelectedVariantID } =
  //   useContext(VarientItemContext);
  // const [productDetails, setProductDetails] = useState(null);
  // const [quantity, setQuantity] = useState(1);
  // const [variantItemDetails, setVariantItemDetails] = useState(null);

  const { selectedProductID, setSelectedProductID } =
    useContext(ProductContext);
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  // const {selectedVariantID,setSelectedVariantID} = useContext(VarientItemContext);
  const [productDetails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [variantItemDetails, setVariantItemDetails] = useState(null);
  const { Product_Category_Id, Category_Name, Product_Id, selectedVariantID } =
    useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3005/user/getSession")
      .then((res) => {
        if (res.data.valid) {
          setName(res.data.user.name);
          setId(res.data.user.userID);
          console.log("Name: ", res.data.user.name);
          console.log("ID: ", res.data.user.userID);
        } else {
          navigate("/pages/AuthenticationPage");
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    // const name = "Name of the Product";
    // const price = 19.99;
    // const totalPrice = price * quantity;
    // alert(`Added ${quantity} ${name}(s) to the cart. Total price: $${totalPrice.toFixed(2)}`);

    axios
      .get("http://localhost:3005/product/insertCartItem", {
        params: {
          userId: id,
          variantId: selectedVariantID,
          cartItemQuantity: quantity,
        },
      })
      .then((res) => {
        console.log("Successfully added to cart");
        alert("Item added to cart successfully!");
        navigate("/pages/CustomerHomePage");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(error);
      });

    alert("Item added to cart successfully!");
  };
  const handleNavigateToNewURL = () => {
    navigate("/pages/CustomerHomePage");
  };

  const route_path = "/ProductImages/";
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
  }, [Product_Id]);

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

  // const [name, setName] = useState("");
  // const [id, setId] = useState("");
  // const navigate = useNavigate();

  // const handleQuantityChange = (event) => {
  //   setQuantity(parseInt(event.target.value));
  // };

  // const handleAddToCart = () => {
  //   // const name = "Name of the Product";
  //   // const price = 19.99;
  //   // const totalPrice = price * quantity;
  //   // alert(`Added ${quantity} ${name}(s) to the cart. Total price: $${totalPrice.toFixed(2)}`);

  //   axios
  //     .get("http://localhost:3005/product/insertCartItem", {
  //       params: {
  //         userId: id,
  //         variantId: selectedVariantID,
  //         cartItemQuantity: quantity,
  //       },
  //     })
  //     .then((res) => {
  //       console.log("Successfully added to cart");
  //       navigate("/pages/CustomerHomePage");
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       alert(error);
  //     });
  // };

  // return (
  //     <div>
  //         {console.log("setVariantItemDetails",variantItemDetails)};
  //     {productDetails && productDetails.length > 0 && (
  //         <div className="product-container">
  //         <img className="product-image" src={route_path + Category_Name+"/"+productDetails[0].Product_Image} alt="Product Image" />
  //         {variantItemDetails && variantItemDetails.length>0 && (
  //                         <div className="product-details">
  //                         <h1>{productDetails[0].Name}</h1>
  //                         <p>{productDetails[0].Description}</p>

  //                         <p>SKU: {variantItemDetails[0].SKU}</p>
  //                         <p>Weight: {variantItemDetails[0].Weight}</p>
  //                         <p>Price: {variantItemDetails[0].Price}</p>
  //                         <label htmlFor="quantity-input">Quantity:</label>
  //                         <input
  //                             type="number"
  //                             id="quantity-input"
  //                             value={quantity}
  //                             min="1"
  //                             onChange={handleQuantityChange}
  //                         />
  //                         <button id="add-to-cart" onClick={handleAddToCart}>
  //                             Add to Cart
  //                         </button>
  //                     </div>
  //         )}

  {
    /* useEffect(() => {
    axios
      .get("http://localhost:3005/product/getProductItemDetails", {
        params: { selectedProductID: selectedProductID },
      })
      .then((res) => {
        const parsedProductDetails = JSON.parse(res.data);
        console.log("Parsed Product Details", parsedProductDetails);

        setProductDetails(parsedProductDetails);
      })
      .catch((err) => console.log(err));
  }, []); */
  }

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
      <div className="product-wrapper">
        {console.log("setVariantItemDetails", variantItemDetails)}
        {productDetails && productDetails.length > 0 && (
          <div className="product-container">
            <img
              className="product-image"
              src={
                route_path +
                Category_Name +
                "/" +
                productDetails[0].Product_Image
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
                      <Form.Label htmlFor="quantity-input">
                        Quantity:
                      </Form.Label>
                      <Form.Control
                        type="number"
                        id="quantity-input"
                        value={quantity}
                        min="1"
                        onChange={handleQuantityChange}
                      />
                    </Form.Group>
                  </Form>

                  {/* <label htmlFor="quantity-input">Quantity:</label>
                <input
                  type="number"
                  id="quantity-input"
                  value={quantity}
                  min="1"
                  onChange={handleQuantityChange}
                /> */}
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
    </div>
  );
}

export default CustomerVariantItemDashBoard;
