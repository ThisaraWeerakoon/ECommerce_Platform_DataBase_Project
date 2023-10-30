import './App.css';
import HomePage from './pages/HomePage';
import AuthenticationPage from './pages/AuthenticationPage';
import SignUpPage from './pages/SignUpPage';
import CustomerHomePage from './pages/CustomerHomePage';

//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import EditPersonalDetails from './pages/EditPersonalDetails';
import EditUserName from './pages/EditUserName';
import OrderReport from './pages/OrderReport';
import CartPage from './pages/CartPage';
import { Cart } from 'react-bootstrap-icons';
import Purchase from './pages/Purchase';
import Purchase2 from './pages/Purchase2';
import StorePickupOrderSaved from './pages/StorePickupOrderSaved';



import { BrowserRouter, Routes, Route,useParams } from 'react-router-dom';
import SubCategoryPage from './pages/SubCategoryPage';

import SubCategoryPageItemDashBoard from './pageComponents/SubCategoryPageComponents/SubCategoryPageItemDashBoard';
import SamplePage from './pages/SamplePage';
import CustomerSubCategoryPage from './pages/CustomerSubCategoryPage';
import ProductsPage from './pages/ProductsPage';
import CustomerProductsPage from './pages/CustomerProductsPage';
import ProductItemPage from './pages/ProductItemPage';
import VariantItemPage from './pages/VariantItemPage';
import CustomerProductItemPage from './pages/CustomerProductItemPage';
import CustomerVariantItemPage from './pages/CustomerVariantItemPage';

function App() {
    // Define a dynamic route for ProductsPage with the selectedCategoryID parameter
  // function DynamicProductsPage() {
  //   const { selectedCategoryID } = useParams();
  
  //     // Render ProductsPageItemDashBoard with the selectedCategoryID
  //     return <ProductsPage selectedCategoryID={selectedCategoryID} />;
  //   }
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/pages/AuthenticationPage" element={<AuthenticationPage/>} />
          <Route path="/pages/SignUpPage" element={<SignUpPage/>} />
          <Route path="/pages/CustomerHomePage" element={<CustomerHomePage/>} />

          <Route path="/pages/Profile" element={<Profile/>} />
          <Route path="/pages/Profile/EditPersonalDetails" element={<EditPersonalDetails/>} />
          <Route path="/pages/Profile/EditUserName" element={<EditUserName/>} />
          <Route path="/pages/CartPage" element={<CartPage/>} />
          <Route path="/pages/CartPage/Purchase" element={<Purchase/>} />
          <Route path="/pages/CartPage/Purchase/Purchase2" element={<Purchase2/>} />
          <Route path="/pages/CartPage/StorePickupOrderSaved" element={<StorePickupOrderSaved/>} /> 
          <Route path="/pages/Profile/OrderReport" element={<OrderReport/>} />


          <Route path="/pages/SubCategoryPage" element={<SubCategoryPage/>}/>
          <Route path="/pages/SamplePage" element={<SamplePage/>}/>
          <Route path="/pages/CustomerSubCategoryPage" element={<CustomerSubCategoryPage/>}/>
          <Route path="/pages/ProductsPage" element={<ProductsPage/>}/>
          <Route path="/pages/CustomerProductsPage" element={<CustomerProductsPage/>}/>
          <Route path="/pages/ProductItemPage" element={<ProductItemPage/>}/>
          <Route path="/pages/VariantItemPage" element={<VariantItemPage/>}/>
          <Route path="/pages/CustomerProductItemPage" element= {<CustomerProductItemPage/>}/>
          <Route path="pages/CustomerVariantItemPage" element={<CustomerVariantItemPage/>}/>

      </Routes>
    </BrowserRouter>


    
  );
}
export default App;

