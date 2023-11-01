import React, { useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductIDContext';
import { CategoryContext } from '../../context/CategoryDetailsContext';
import { VarientItemContext } from '../../context/VariantIDContext';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom';

function VariantItemDashBoard() {


    const {selectedProductID, setSelectedProductID} = useContext(ProductContext);
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
    // const {selectedVariantID,setSelectedVariantID} = useContext(VarientItemContext);
    const [productDetails, setProductDetails] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [variantItemDetails,setVariantItemDetails]= useState(null);
    const navigate=useNavigate();

   const {Product_Category_Id,Category_Name,Product_Id,selectedVariantID}=useParams();


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

    useEffect(() => {
      axios.get('http://localhost:3005/product/getProductItemDetails', { params: { selectedProductID: Product_Id } })
        .then(res => {
          const parsedProductDetails = JSON.parse(res.data);
          console.log("Parsed Product Details",parsedProductDetails);
  
          setProductDetails(parsedProductDetails);
  
      })
        .catch(err => console.log(err));
    }, [Product_Category_Id]);

    useEffect(() => {
        axios.get('http://localhost:3005/product/getVariantItemDetails', { params: { selectedVariantID: selectedVariantID } })
          .then(res => {
            // console.log("getVariantItemDetails backend call",selectedVariantID);
            const parsedVariantItemtDetails = JSON.parse(res.data);
            console.log("parsed Variant ItemtDetails",parsedVariantItemtDetails);
    
            setVariantItemDetails(parsedVariantItemtDetails);
    
        })
          .catch(err => console.log(err));
      }, [selectedVariantID]);



    return (
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
            )}

        </div>
  
    )}
    </div>

    );
}

export default VariantItemDashBoard;
