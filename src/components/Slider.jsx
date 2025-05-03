import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../assets/sale1.avif";
import img2 from "../assets/sale2.jpg";
import img3 from "../assets/sale3.webp";
const Slider = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        {" "}
        <div
          className="relative h-[600px] w-full bg-no-repeat bg-cover bg-center  "
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50">
            {/* This div creates the black overlay */}
          </div>
          {/* Optional: Add any content you want to appear on top of the overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
            <h1 className="text-7xl leading-normal font-bold">
              Collect Sale Coupon <br /> From DISCOUNT PRO!
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div
          className="relative h-[600px] w-full bg-no-repeat bg-cover bg-center  "
          style={{ backgroundImage: `url(${img2})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50">
            {/* This div creates the black overlay */}
          </div>
          {/* Optional: Add any content you want to appear on top of the overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-bold">
            <h1 className="font-bold text-8xl">!!!50% DISCOUNT!!!</h1>
            <h1 className="max-w-2xl text-center text-6xl leading-normal font-bold">
              Collect Sale Coupon From DISCOUNT PRO!
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div
          className="relative h-[600px] w-full bg-no-repeat bg-cover bg-center  "
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50">
            {/* This div creates the black overlay */}
          </div>
          {/* Optional: Add any content you want to appear on top of the overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-bold">
            {/* Your text or other content here */}
            <h1 className="font-bold text-8xl">!!!25% DISCOUNT!!!</h1>
            <h1 className="text-6xl leading-normal font-bold">
              Collect Sale Coupon <br /> From DISCOUNT PRO!
            </h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
