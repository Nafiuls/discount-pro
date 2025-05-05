import React from "react";
import BrandCard2 from "./BrandCard2";

const AllBrands = ({ data }) => {
  return (
    <div className="max-w-5xl mt-10 mx-auto p-4 flex flex-col items-center justify-center gap-5 ">
      {data.map((item) => (
        <BrandCard2 item={item} />
      ))}
    </div>
  );
};

export default AllBrands;
