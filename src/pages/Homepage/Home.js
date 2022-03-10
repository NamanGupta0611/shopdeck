import React, {useState} from "react";

import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { SliderData } from './subcomponent/SliderData';
import ImageSlider from "./subcomponent/ImageSlider";


const Home = () =>{
    return (
        <><Navbar />
        <div>
            <ImageSlider slides={SliderData} />
        </div>
        <Footer/></>
    );
};

export default Home;
