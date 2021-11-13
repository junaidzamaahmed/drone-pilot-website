import React from "react";
import "./Banner.css";
import bannerImg from "../../../banner-image.png";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory()
  const handleShopNowClick=()=>{
    history.push('/products')
  }
  return (
    <div id="banner" className="container">
      <div class="row row-cols-1 row-cols-md-2 g-4 nav-margin">
        <div class="col">
          <div className="d-flex justify-content-center align-items-center h-100 flex-column">
            <h1 id="banner-h1" className="fs-1 ">
              Find the best drones <br />
              in the country right here!
            </h1>
            <div className="w-100">
              <button
                type="button"
                class="btn btn-outline-dark justify-self-left border border-5 border-dark rounded-pill py-2 px-4 fw-bold"
                onClick={handleShopNowClick}
              >
                <i class="fas fa-shopping-cart"></i> Shop now!
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div className="d-flex justify-content-center align-items-center h-100">
            <img className="img-fluid" src={bannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
