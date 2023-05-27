import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Product from "./Product/Product";

const Products = ({ slice, fromDashboard, handleDeleteClick }) => {
  const [products, setProducts] = useState([]);
  const { isLoading } = useAuth();

  useEffect(() => {
    fetch("https://drone-pilot-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isLoading]);
  if (isLoading) {
    return (
      <div className="mid-page align-items-center d-flex justify-content-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div id="products" className="my-5 container">
        <h1 className="text-center py-5 fs-1">
          <span className="bebas-font nav-border-bottom">Products</span>
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {slice
            ? products
                ?.slice(0, 6)
                .map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))
            : products?.map((product) => (
                <Product
                  key={product._id}
                  product={product}
                  fromDashboard={fromDashboard}
                  handleDeleteClick={handleDeleteClick}
                ></Product>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
