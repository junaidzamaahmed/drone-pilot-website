import React from "react";
import { useHistory } from "react-router";
import "./Product.css";

const Product = ({ product }) => {
  const history = useHistory();
  const handleBookClick = () => {
    history.push(`/products/${product._id}`);
  };
  return (
    <div className="col">
      <div className="card h-100">
        <div className="d-flex justify-content-center">
          <img src={product?.imgURL} className="card-img-top" alt="..." />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{product?.name}</h5>
          <p className="card-text card-description">
            {product?.desc.slice(0, 100)}...
          </p>
          <p className="card-text fw-bold my-3">Price: ${product?.price}</p>
          <div className="d-flex justify-content-center w-100">
            <button
              className="primary-background button text-light text-decoration-none px-4 py-2 rounded-pill nav-item primary-button text-center"
              onClick={handleBookClick}
            >
              <i class="fas fa-shopping-cart"></i> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
