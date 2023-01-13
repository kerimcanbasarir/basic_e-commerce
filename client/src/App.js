import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar';
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Slider from "./components/slider";
import Footer from "./components/footer";
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import Error404 from './pages/Error404';
import Basket from './pages/Basket';
import Admin from './pages/Admin';


function App() {
  return (
    <Router>
      <div>
        <Slider />
        <Navbar />

        <div className='content'>
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/product/:product_id" element={<ProductDetail/>} />
            <Route path="/Signin" element={<Signin/>} />
            <Route path="/Signup" element={<Signup/>} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} /> 
              <Route path="/admin/*" element={<Admin />} admin={true} /> 
					  </Route>
            
            <Route path="/Basket" element={<Basket/>} />
            <Route path="*" element={<Error404/>} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
