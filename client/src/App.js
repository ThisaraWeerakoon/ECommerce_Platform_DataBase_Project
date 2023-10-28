import './App.css';
import HomePage from './pages/HomePage';
import AuthenticationPage from './pages/AuthenticationPage';
import SignUpPage from './pages/SignUpPage';
import CustomerHomePage from './pages/CustomerHomePage';
import AdminPanel from "./pages/AdminPanel";
import AdminPanelViewEmployees from './pages/AdminPanelViewEmployees';
import AdminPanelViewReports from './pages/AdminPanelViewReports';
import AdminPanelViewOrders from './pages/AdminPanelViewOrders';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/pages/AuthenticationPage" element={<AuthenticationPage/>} />
          <Route path="/pages/SignUpPage" element={<SignUpPage/>} />
          <Route path="/pages/CustomerHomePage" element={<CustomerHomePage/>} />
          <Route path="/pages/AdminPanel" element={<AdminPanel />} />
          <Route path="/pages/AdminPanel/AdminPanelViewEmployees" element={<AdminPanelViewEmployees />} />
          <Route path="/pages/AdminPanel/AdminPanelViewReports" element={<AdminPanelViewReports />} />
          <Route path="/pages/AdminPanel/AdminPanelViewOrders" element={<AdminPanelViewOrders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
