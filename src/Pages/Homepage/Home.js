import React, {useState} from "react";
import './Home.css';

import nikon from './nikon.png';
import Shoe from './Shoe.png';
import Bag from './Bag.png';
import Iphone from './Iphone.png';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

import Slider from "./Imageslider/Slider";
import iqoo from './Imageslider/Assets/iqoo.jpg';
import key from './Imageslider/Assets/key.jpg';
import oppo from './Imageslider/Assets/oppo.jpg';

console.log(nikon);
console.log(Shoe);
console.log(Bag);
console.log(Iphone);

const Home = () =>{
    const bannerImages = [iqoo, key, oppo];
    return (
        <><><Navbar />
            <div className='home'>
                <div className='home-container'>
                    <Slider images={bannerImages} />
                </div>
            </div>
            <div className="body">
                <div className="card" />
                <img src={nikon} class="card-img-top" alt="Logo" width="200" height="200" />
                <div class="card-body">
                    <h5 class="card-title">Canon EOS 1500D</h5>
                    <p class="card-text">Details</p>
                </div>
                <div className="card" />
                <img src={Shoe} class="card-img-top" alt="Logo" width="200" height="200" />
                <div class="card-body">
                    <h5 class="card-title">Nike Airforce</h5>
                    <p class="card-text">Details.</p>
                </div>
                <div className="card" />
                <img src={Iphone} class="card-img-top" alt="Logo" width="200" height="200" />
                <div class="card-body">
                    <h5 class="card-title">Iphone 12 Pro</h5>
                    <p class="card-text">Details.</p>
                </div>
                <div className="card" />
                <img src={Bag} class="card-img-top" alt="Logo" width="200" height="200" />
                <div class="card-body">
                    <h5 class="card-title">Chanel Bag</h5>
                    <p class="card-text">Details.</p>
                </div>
                </div>

                </><Footer /></>
    );
};

export default Home;
