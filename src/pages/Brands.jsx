import React from "react";
import AllBrands from "../components/AllBrands";
import { useLoaderData } from "react-router-dom";

const Brands = () => {
  const data = useLoaderData();
  return (
    <div className="min-h-screen">
      <div className="flex  px-20 py-10 flex-col items-center justify-center h-[200px] bg-orange-500 text-white">
        <h1 className="uppercase text-5xl border-b-4 border-white pb-5 w-[300px] text-center">
          All Brands
        </h1>
      </div>
      <AllBrands data={data} />
    </div>
  );
};

export default Brands;
