import { Rating } from "@mui/material";
import React from "react";

const Review = ({review}) => {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{review?.name}</h5>
          <p className="card-text card-description">
            {review?.desc}
          </p>
          <p className="card-text fw-bold my-3"><Rating name="read-only" value={review?.rating} readOnly /></p>
        </div>
      </div>
    </div>
  );
};

export default Review;
