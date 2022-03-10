import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Payment from './pages/Payment/payment';
import Cart from './pages/cart/cart';
import Home from './pages/Homepage/Home';
import Details from './pages/Details/Details';

const StyledButton = styled-Component

function App() {
  return (
    <div> 
      <Router>
        <Routes>
           <Route path="/"  element={<Home />} />
           <Route path="/payment"  element={<Payment />} />
           <Route path="/login"  element={<Login />} />
           <Route path= "/signup"  element= {<Signup />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/product" element={<Details />} />
       </Routes>
      </Router> 
   </div>
  );
}

export default App;
