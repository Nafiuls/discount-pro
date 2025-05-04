import React from "react";

const RatinStar = ({ rating }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((num) => (
        <input
          key={num}
          type="radio"
          name="rating"
          className="mask mask-star bg-orange-400"
          checked={num === Math.round(rating)}
          readOnly
        />
      ))}
    </div>
  );
};

export default RatinStar;
