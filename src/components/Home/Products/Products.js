import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = ({ slice }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://floating-dusk-12648.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
                <Product key={product._id} product={product}></Product>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
