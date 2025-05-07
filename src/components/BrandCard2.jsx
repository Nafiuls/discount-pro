import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "animate.css";
const BrandCard2 = ({ item }) => {
  const { brand_logo, brand_name, rating, description, _id, isSaleOn } = item;
  return (
    <div className="lg:w-xl  shadow-md p-5 flex items-center gap-6">
      <div className="border border-gray-400 p-2 rounded-md">
        <img
          className="rounded-md size-[150px] object-center"
          src={brand_logo}
          alt=""
        />
      </div>
      {/* content */}
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">{brand_name}</h1>
        <div className="flex items-center gap-2">
          <FaStar size={20} color="orange" />
          <p className="font-medium">{rating}</p>
        </div>
        <p>{description.slice(0, 50)}</p>
        <Link to={`/brands/${_id}`}>
          <button className="py-2 px-5 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-all cursor-pointer">
            View Coupons
          </button>
        </Link>
        <p className="text-3xl animate__animated animate__infinite text-center animate__tada  font-semibold mt-3 text-red-500">
          {isSaleOn ? "sale is on" : ""}
        </p>
      </div>
    </div>
  );
};

export default BrandCard2;
