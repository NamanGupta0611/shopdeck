import React from 'react';
import './Details.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import shoe from './Nike shoe.png';

console.log(shoe);

export default function Details() {
    return(
        <div className='Product'>
            <Navbar />
            <div className='pimage'>
                <img src={shoe} alt='product' width={300} height={350} />
            </div>
            <div className='pdetails'>
                <div className='pName'>
                <strong>Product Name</strong>
                </div>
                <div className='pPrice'>
                    <strong>Price</strong>
                </div>
                <div className='buttons'>
                    <input type='button' id= 'buy' value='Buy Now' onClick={() => window.open('./payment','_self')}></input>
                    <input type='button' id= 'cart' value='Add to Cart' onClick={() => window.open('./cart','_self')}></input>
                </div>
                <div className='pDescription'>
                    Description
                </div>
            </div>
            <Footer />
        </div>
    )
}