import React, { useContext } from "react";
import VariantDropdown from "./VariantDropdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VariantContext } from "../../context/VariantOptionsContext";
import axios from "axios";
import { useEffect } from "react";
import { VarientItemContext } from "../../context/VariantIDContext";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import "./VariantStyles.css";
import { Link } from "react-router-dom";

const ProductItem = ({ name, description, image, variants }) => {
  // console.log("Received variants in ProductItem:", variants);

  // Create a state to manage the selected values for each variant
  const [selectedValues, setSelectedValues] = useState({});
  const [selectedVariantID, setSelectedVariantID] = useState();
  const { Product_Category_Id, Category_Name, Product_Id } = useParams();

  // const {selectedVariantID,setSelectedVariantID} = useContext(VarientItemContext);
  const navigate = useNavigate();

  // const {selectedVariantOptions,setSetSelectedVariantOptions} = useContext(VariantContext);

    useEffect(() => {
      if (selectedVariantID !== undefined) {
        navigate(`/pages/CustomerVariantItemPage/${Product_Category_Id}/${Category_Name}/${Product_Id}/${selectedVariantID}`);
      }
      // else{
      //   alert("The variant options you have selected is not available currently. Please select other options of the same product");
      // }
    }, [selectedVariantID]);

  // Define a function to handle changes in the selected value for a variant
  const handleVariantChange = (variantName, selectedValue) => {
    setSelectedValues({
      ...selectedValues,
      [variantName]: selectedValue,
    });
  };

  // Define a function to handle the button click
  // const handleButtonClick = () => {
  //   // Call the backend API here
  // //   const parsedVairantID = null;
  // //   axios.get('http://localhost:3005/product/getVariantsByOptions', { params: { selectedVariantOptionIDs: Object.values(selectedValues).join(',') } })
  // //   .then(res => {
  // //     const parsedVairantID = JSON.parse(res.data);
  // //     console.log(parsedVairantID);
  // //     console.log("Parsed VairantID",parsedVairantID[0]['0'].Variant_Id);
  // //     setSelectedVariantID(parsedVairantID[0]['0'].Variant_Id);

  // //     // setProductDetails(parsedProductDetails);

  // // })
  // //   .catch(err => console.log(err));

  // //   // After the API call is successful, navigate to a new page
  // //   navigate(`/pages/VariantItemPage/${selectedVariantID}`); // Replace '/newPage' with the actual URL of the new page

  //   // Call the backend API here
  //   axios.get('http://localhost:3005/product/getVariantsByOptions', {
  //     params: { selectedVariantOptionIDs: Object.values(selectedValues).join(',') }
  //   })
  //   .then(res => {
  //     const parsedVariantID = JSON.parse(res.data);
  //     const newSelectedVariantID = parsedVariantID[0]['0'].Variant_Id;
  //     setSelectedVariantID(newSelectedVariantID); // Update the state
  //   })
  //   .catch(err => console.log(err));

  // };

  // Define a function to handle the button click
  const handleButtonClick = () => {
    // Call the backend API here

    axios
      .get("http://localhost:3005/product/getVariantsByOptions", {
        params: {
          selectedVariantOptionIDs: Object.values(selectedValues).join(","),
        },
      })
      .then((res) => {
        const parsedVariantID = JSON.parse(res.data);
        // console.log("Parsed VariantID in ProductItem", parsedVariantID);
        const newSelectedVariantID = parsedVariantID[0]['0'].Variant_Id;
        console.log("New Selected VariantID in ProductItem", newSelectedVariantID);
        setSelectedVariantID(newSelectedVariantID); // Update the state

        // setProductDetails(parsedProductDetails);
      })
      .catch(
        (err) => console.log(err)
        );

    // After the API call is successful, navigate to a new page
    // navigate("/pages/CustomerVariantItemPage"); // Replace '/newPage' with the actual URL of the new page
  };

  return (
    <div className="product-wrapper">
        {console.log("Selected Values:", selectedValues)}
        <div className="product-container">
          <img src={image} alt={name} className="product-image" />
          <div className="product-details">
            <Container fluid>
              <h2 className="product-title">{name}</h2>
              <p className="product-description">{description}</p>
              <div style={{ marginTop: "20px" }}>
                {variants.map((variant, index) => (
                  <div key={variant.Variant_Type_Id}>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        // controlId="formGroupQuantity"
                        style={{ color: "black" }}
                      >
                        {/* <Form.Label htmlFor={`variant-dropdown-${variant.Variant_Type_Id}`} style={{ fontWeight: "bold" }}>
                        {variant.Variation_Name}:
                      </Form.Label> */}
                        <Form.Label
                          htmlFor={`variant-dropdown-${variant.Variant_Type_Id}`}
                          style={{ fontWeight: "bold" }}
                        >
                          {variant.Variation_Name}:
                        </Form.Label>
                        <VariantDropdown
                          options={variant.Variation_Options}
                          selectedValue={
                            selectedValues[variant.Variation_Name] || ""
                          }
                          onSelect={(value) =>
                            handleVariantChange(variant.Variation_Name, value)
                          }
                        />
                      </Form.Group>
                    </Form>
                  </div>
                ))}
              </div>
              <Row>&nbsp;</Row>
              <Row>
                <button
                  id="add-to-cart"
                  className="product-button"
                  onClick={handleButtonClick}
                >
                  Proceed
                </button>
              </Row>
            </Container>
          </div>
        </div>
      </div>
  );
};

export default ProductItem;
