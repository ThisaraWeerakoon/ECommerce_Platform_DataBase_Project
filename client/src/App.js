import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import SignUpPage from "./pages/SignUpPage";
import AdminPanel from "./pages/AdminPanel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/pages/AuthenticationPage"
          element={<AuthenticationPage />}
        />
        <Route path="/pages/SignUpPage" element={<SignUpPage />} />
        <Route path="/pages/AdminPanel" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
