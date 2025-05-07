import React from "react";

const BrandCard = ({ item }) => {
  const { brand_logo, brand_name, coupons, category } = item;

  return (
    <div>
      <div className="bg-white w-full shadow-xl gap-4 flex flex-col items-center justify-center p-6">
        <img
          className="h-[150px] rounded-sm w-[200px]  object-center"
          src={brand_logo}
          alt=""
        />
        <h1 className="text-2xl font-bold">{brand_name}</h1>
        <p className="text-xl font-normal">
          Total coupons:{" "}
          <span className="text-orange-500">{coupons.length}</span>
        </p>
        <p className="bg-gray-100 p-2 rounded-sm font-medium">{category}</p>
      </div>
    </div>
  );
};

export default BrandCard;
