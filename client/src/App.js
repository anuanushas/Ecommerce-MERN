
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard.jsx';

import Addproduct from './pages/seller/Addproduct.jsx';
import ProUpdate from './pages/seller/ProUpdate.jsx';
import SeeAllProducts from './pages/seller/SeeAllProducts.jsx'


import Productdetails from './pages/Productdetails.jsx';
import { Store } from "./context/Contextstore";

import Profile from './pages/Profile.jsx';
import UpdateProfile from './pages/UpdateProfile.jsx';
import Error from './pages/Error.js';
import Cart from './pages/user/Cart.jsx';


import Checkout from './pages/user/Checkout.jsx';
function App() {



  return (
    <Store>

      <BrowserRouter>
        <Header />
        <ToastContainer position='top-center' theme='light' />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update" element={<UpdateProfile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Productdetails />} />
          <Route path="/addnewproduct" element={<Addproduct />} />
          <Route path="/seeallproducts" element={<SeeAllProducts />} />
          <Route path="/updateproducts/:id" element={<ProUpdate />} />

          <Route path="*" element={<Error />} />
        </Routes>

      </BrowserRouter>
    </Store>
  );
}

export default App;
