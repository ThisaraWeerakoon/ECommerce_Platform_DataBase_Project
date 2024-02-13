import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from 'react-bootstrap-icons';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CategoryDetailsContext from './context/CategoryDetailsContext';
import ProductIDContext from './context/ProductIDContext';
import VariantOptionsContext from './context/VariantOptionsContext';
import  VarientItemContext  from './context/VariantIDContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryDetailsContext>
      <ProductIDContext>

        {/* <VariantOptionsContext> */}
        <VarientItemContext>
          <App />
        </VarientItemContext>
        {/* </VariantOptionsContext> */}
      </ProductIDContext>
    </CategoryDetailsContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
