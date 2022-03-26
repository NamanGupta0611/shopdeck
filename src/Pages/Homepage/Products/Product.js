import React from "react";
import "./Product.css";

import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Products = ({
  id,
  title,
  image,
  price,
  rating,
  specification,
  detail,
}) => {
  return (
    <div className="product">
      <div className="info">
        <Link to={`/products/${id}`} className="title">
          <p>{title}</p>
        </Link>
        <p className="price">
          <strong>₹</strong>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>★</p>
            ))}
        </div>
        <img src={image} alt="" />
        <button>
          <i>
            <ShoppingCartOutlinedIcon />
          </i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
