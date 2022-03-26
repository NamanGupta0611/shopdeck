import React from 'react'
import './Payment.css'
import Navbar from '../../Components/Navbar/Navbar';
import shoe from './Nike shoe.png';

console.log(shoe);

function Payment() {
  return (
      <>
      <Navbar/>
      <div className='app-Wrapper'>
      <div className='Leftside'>
          <h2 className='Options'>Payment options</h2>
          
            <div className='Buttons'>
          <button >UPI</button></div>
           <div className='Buttons'>
          <button >Wallets</button></div>
           <div className='Buttons'>
          <button >Credit/Debit</button></div>
            <div className='Buttons'>
          <button >Cash on delivery</button></div>
          <div className='Buttons'>
          <button >Net Banking</button></div>
          </div>
          <div className='Rightside'>
              <h3>Product Details</h3>
              <div className='Details'>
              <img src={shoe} alt="shoe" width="300" height="350" />
              <label className='Description'>
              Nike Air Force 1 '07<br></br>
              Premium Men's Shoes<br></br><br></br>
              ₹11,495<br></br>
              incl. of taxes and<br></br> 
              duties<br></br>
              </label>
              </div>
              <div className='Total'>
                  <label className='Charges'>
                      Delivery Charges:<br></br>
                      Total Payable:
                  </label>
                  <label className='Amount'>₹0.00<br></br>
                  ₹11,495.00</label>
              </div>
          </div>
              </div>
      </>
  )
}

export default Payment;