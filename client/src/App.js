import './App.css';
import HomePage from './pages/HomePage';
import AuthenticationPage from './pages/AuthenticationPage';
import SignUpPage from './pages/SignUpPage';
import CustomerHomePage from './pages/CustomerHomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import EditPersonalDetails from './pages/EditPersonalDetails';
import EditUserName from './pages/EditUserName';
import OrderReport from './pages/OrderReport';
import CartPage from './pages/CartPage';
import { Cart } from 'react-bootstrap-icons';
import Purchase from './pages/Purchase';
import Purchase2 from './pages/Purchase2';
import StorePickupOrderSaved from './pages/StorePickupOrderSaved';


function App() {
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


      </Routes>
    </BrowserRouter>
    
  );
}





export default App;
