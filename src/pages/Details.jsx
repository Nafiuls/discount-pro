import React from "react";
import { useLoaderData } from "react-router-dom";
import RatinStar from "../utils/RatinStar";
import CouponCard from "../components/CouponCard";

const Details = () => {
  const { brand_name, brand_logo, rating, shop_Link, coupons } =
    useLoaderData();

  const handleLink = () => {
    window.open(shop_Link);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-5">
        <img className="size-[300px]" src={brand_logo} alt="" />
        <h1 className="mb-5 text-3xl font-bold">{brand_name}</h1>
        <p className="text-xl mb-5 font-bold">Rating:</p>
        <RatinStar rating={rating} />
      </div>
      {/* coupon card fromat */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-4 gap-5 ">
        {coupons.map((coupon) => (
          <CouponCard
            key={coupon.coupon_code}
            handleLink={handleLink}
            coupon={coupon}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;
