import React from 'react'
import'./payment.css'

import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function Payment() {
  return (
      <><Navbar />
      <div className='app-Wrapper'>
          <h2>Payment options</h2>
          <div className='form-wrapper'>
            <div className='Buttons'>
          <button >UPI</button></div>
           <div className='Buttons'>
          <button >Wallets</button></div>
           <div className='Buttons'>
          <button >ATM card (Credit/Debit)</button></div>
            <div className='Buttons'>
          <button >Cash on delivery</button></div>
          <div className='Buttons'>
          <button >Net Banking</button></div>
              </div>
      </div>
      <Footer/></>
  )
}

export default Payment;