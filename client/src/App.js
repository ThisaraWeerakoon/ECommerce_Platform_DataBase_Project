import './App.css';
import HomePage from './pages/HomePage';
import AuthenticationPage from './pages/AuthenticationPage';
import SignUpPage from './pages/SignUpPage';
import CustomerHomePage from './pages/CustomerHomePage';
import AdminPanel from "./pages/AdminPanel";
import AdminPanelViewEmployees from './pages/AdminPanelViewEmployees';
import AdminPanelViewCustomers from './pages/AdminPanelViewCustomers';
import AdminPanelViewInventory from './pages/AdminPanelViewInventory';
import AdminPanelViewReports from './pages/AdminPanelViewReports';
import AdminPanelViewOrders from './pages/AdminPanelViewOrders';
import AdminPanelAddEmployees from './pages/AdminPanelAddEmployees';
import Profile from './pages/Profile';
import EditPersonalDetails from './pages/EditPersonalDetails';
import EditUserName from './pages/EditUserName';
import OrderReport from './pages/OrderReport';
import CartPage from './pages/CartPage';
import { Cart } from 'react-bootstrap-icons';
import Purchase from './pages/Purchase';
import Purchase2 from './pages/Purchase2';
import StorePickupOrderSaved from './pages/StorePickupOrderSaved';
import DeliveryOrderSaved from './pages/DeliveryOrderSaved';



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
          <Route path="/pages/AdminPanel" element={<AdminPanel />} />
          <Route path="/pages/AdminPanel/AdminPanelViewEmployees" element={<AdminPanelViewEmployees />} />
          <Route path="/pages/AdminPanel/AdminPanelViewCustomers" element={<AdminPanelViewCustomers/>} />
          <Route path="/pages/AdminPanel/AdminPanelViewReports" element={<AdminPanelViewReports />} />
          <Route path="/pages/AdminPanel/AdminPanelViewOrders" element={<AdminPanelViewOrders />} />
          <Route path="/pages/AdminPanel/AdminPanelViewInventory" element={<AdminPanelViewInventory />} />
          <Route path="/pages/AdminPanel/AdminPanelAddEmployees" element={<AdminPanelAddEmployees/>} />
          <Route path="/pages/Profile" element={<Profile/>} />
          <Route path="/pages/Profile/EditPersonalDetails" element={<EditPersonalDetails/>} />
          <Route path="/pages/Profile/EditUserName" element={<EditUserName/>} />
          <Route path="/pages/CartPage" element={<CartPage/>} />
          <Route path="/pages/CartPage/Purchase" element={<Purchase/>} />
          <Route path="/pages/CartPage/Purchase/Purchase2/:addressId" element={<Purchase2/>} />
          <Route path="/pages/CartPage/StorePickupOrderSaved" element={<StorePickupOrderSaved/>} />
          <Route path="/pages/CartPage/DeliveryOrderSaved" element={<DeliveryOrderSaved/>} /> 
          <Route path="/pages/Profile/OrderReport" element={<OrderReport/>} />


          <Route path="/pages/SubCategoryPage/:Product_Category_Id/:Category_Name" element={<SubCategoryPage/>}/>
          <Route path="/pages/SamplePage" element={<SamplePage/>}/>
          <Route path="/pages/CustomerSubCategoryPage/:Product_Category_Id/:Category_Name" element={<CustomerSubCategoryPage/>}/>
          <Route path="/pages/ProductsPage/:Product_Category_Id/:Category_Name" element={<ProductsPage/>}/>
          <Route path="/pages/CustomerProductsPage/:Product_Category_Id/:Category_Name" element={<CustomerProductsPage/>}/>
          <Route path="/pages/ProductItemPage/:Product_Category_Id/:Category_Name/:Product_Id" element={<ProductItemPage/>}/>
          <Route path="/pages/VariantItemPage/:Product_Category_Id/:Category_Name/:Product_Id/:selectedVariantID" element={<VariantItemPage/>}/>
          <Route path="/pages/CustomerProductItemPage/:Product_Category_Id/:Category_Name/:Product_Id" element= {<CustomerProductItemPage/>}/>
          <Route path="pages/CustomerVariantItemPage/:Product_Category_Id/:Category_Name/:Product_Id/:selectedVariantID" element={<CustomerVariantItemPage/>}/>

      </Routes>
    </BrowserRouter>


    
  );
}
export default App;

