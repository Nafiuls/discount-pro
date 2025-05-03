import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { brand_name, brand_logo, shop_link, coupons } = useLoaderData();

  const handleCopy = () => {
    toast.success("Coupon code copied!");
  };
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Brand Header */}
      <div className="flex items-center mb-10 space-x-4">
        <img
          src={brand_logo}
          alt="Brand Logo"
          className="w-20 h-20 rounded-md object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold">{brand_name}</h1>
          <div className="flex items-center mt-1 text-yellow-400">
            <span className="text-sm text-gray-600 ml-2">5.0 Rating</span>
          </div>
        </div>
      </div>

      {/* Coupons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon) => (
          <div
            key={coupon.code}
            className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">{coupon.description}</h2>
            <p className="mb-4 bg-purple-100 text-purple-700 px-2 py-1 inline-block rounded">
              Code: <span className="font-bold">{coupon.coupon_code}</span>
            </p>

            <div className="flex space-x-3">
              <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
                <button className="bg-teal-500 cursor-pointer hover:bg-teal-600 text-white px-4 py-2 rounded">
                  Copy Code
                </button>
              </CopyToClipboard>
              <a
                href={shop_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Use Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
