import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Signup from './Components/Signup/Signup';
import Payment from './Pages/Payment/Payment';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Homepage/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
