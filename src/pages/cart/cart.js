import React from 'react';
import './cart.css';
import bag from '../../assets/images/bag.png';
import shoe from '../../assets/images/sneakers.jpeg';
import deal from '../../assets/images/deals 2.jpeg';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

console.log(deal);
console.log(bag);
console.log(shoe);

export default function Cart() {
    return(
        <div className='cart'>
        <Navbar />
        <div className='chead'>
            <img src={bag} alt='Bag' width={50} height={60} />
            Shopping bag
        </div>
        <div className='prodimage'>
            <img className='bimg' src={shoe} alt='product' width={200} height={220}/>
        </div>
        <div className='pdetails'>
            <strong>details</strong>
        </div>
        <div className='bttn'>
                <input type='button' value='Proceed to Pay' onClick={() => window.open('./payment','_self')}></input>
                <input type='button' value='Save for Later' onClick={() => window.open('./','_self')}></input>
        </div>
        <div className='ads'>
            <img className='bimg' src={deal} alt='Ad1'/>
            <img className='bimg' src='' alt='Ad2'/>
        </div>
        <Footer />
        </div>
    )
}