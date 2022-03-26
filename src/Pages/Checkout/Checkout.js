import React, {useState} from "react";
import './Checkout.css';
import { ReactDOM } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";


const Checkout = () =>{  
  const [values, setValues] = useState({
    enteryourname: "",
    enteryourmobileno: "",
    address1: "",
    landmark: "",
    district1: "",
    state1: "",
    pincode1: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  
   return (
    <>
    <Navbar/>
     <div className="container1">
        <div className="app-wrapper1">
          <div>
            <h2 classname="title">Checkout Details</h2>
          </div>
          <form classname="form-wrapper1">
            <div classname="name">
              <input classname="input" type="text" name="enteryourname" placeholder="Name" value={values.enteryourname} onChange={handleChange} />
            </div>
            <div classname="Mobile">
              <input classname="input" type="int" name="enteryourmobileno" placeholder="Mobile" value={values.enteryourmobileno} onChange={handleChange} />
            </div>
            <div classname="Address">
              <input classname="input" type="address" name="address1" placeholder="Address Line 1" value={values.createpassword} onChange={handleChange} />
            </div>
            <div classname="Address">
              <input classname="input" type="address" name="address1" placeholder="Address Line 2" value={values.confirmpassword} onChange={handleChange} />
            </div>
            <div classname="Landmark">
              <input classname="input" type="landmark" name="landmark1" placeholder="Landmark" value={values.confirmpassword} onChange={handleChange} />
            </div>
            <div classname="District">
              <input classname="input" type="district" name="district1" placeholder="District" value={values.confirmpassword} onChange={handleChange} />
            </div>
            <div classname="State">
              <input classname="input" type="state" name="state1" placeholder="State" value={values.confirmpassword} onChange={handleChange} />
            </div>
            <div classname="Pin">
              <input classname="input" type="pincode" name="pincode1" placeholder=" Pin Code" value={values.confirmpassword} onChange={handleChange} />
            </div>
            <div className="Buttons">
            <Link to='/Payment'>
              <button classname="submit" onclick={handleFormSubmit}>Proceed to Payment</button>
              </Link>
            </div>
          </form>
        </div>
     </div>
     <Footer/>
     </>
   );
};
  
export default Checkout;