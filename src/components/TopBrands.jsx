import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Header from "../utils/Header";
import { Link } from "react-router-dom";

const TopBrands = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className=" py-10 bg-gray-100">
      <Header heading={"top brands"} />
      <div>
        <Marquee pauseOnHover speed={100}>
          {data.map((item) => (
            <Link to={`/brands/${item._id}`}>
              <div key={item._id}>
                <img
                  className="w-[300px] h-[200px]"
                  src={item.brand_logo}
                  alt=""
                />
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
