import React, { useEffect, useState } from "react";
import Header from "../utils/Header";
import BrandCard from "./BrandCard";

const Brands = ({ data }) => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const onSale = data.filter((brand) => brand.isSaleOn == true);
    setBrands(onSale);
  }, [data]);

  return (
    <div>
      <Header heading={"brands on sale"} />
      <div className="gap-5 my-10 px-20 grid grid-cols-1 lg:grid-cols-3">
        {brands.map((item) => (
          <BrandCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
