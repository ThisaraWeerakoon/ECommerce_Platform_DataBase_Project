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

const ProductItem = ({ name, description, image, variants }) => {
  // console.log("Received variants in ProductItem:", variants);

  // Create a state to manage the selected values for each variant
  const [selectedValues, setSelectedValues] = useState({});

  const { selectedVariantID, setSelectedVariantID } =
    useContext(VarientItemContext);
  const navigate = useNavigate();

  // const {selectedVariantOptions,setSetSelectedVariantOptions} = useContext(VariantContext);

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

    axios
      .get("http://localhost:3005/product/getVariantsByOptions", {
        params: {
          selectedVariantOptionIDs: Object.values(selectedValues).join(","),
        },
      })
      .then((res) => {
        const parsedVairantID = JSON.parse(res.data);
        console.log(parsedVairantID);
        console.log("Parsed VairantID", parsedVairantID[0]["0"].Variant_Id);
        setSelectedVariantID(parsedVairantID[0]["0"].Variant_Id);

        // setProductDetails(parsedProductDetails);
      })
      .catch((err) => console.log(err));

    // After the API call is successful, navigate to a new page
    navigate("/pages/CustomerVariantItemPage"); // Replace '/newPage' with the actual URL of the new page
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
                      controlId="formGroupQuantity"
                      style={{ color: "black" }}
                    >
                      <Form.Label htmlFor={`variant-dropdown-${variant.Variant_Type_Id}`} style={{ fontWeight: "bold" }}>
                        {variant.Variation_Name}:
                      </Form.Label>
                      <VariantDropdown
                        options={variant.Variation_Options}
                        selectedValue={selectedValues[variant.Variation_Name] || ""}
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
                Click Me
              </button>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
  
};

export default ProductItem;
