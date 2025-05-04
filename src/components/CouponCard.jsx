import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";

const CouponCard = ({ coupon, handleLink }) => {
  const { coupon_code, description, expiry_date, condition, coupon_type } =
    coupon;
  const handleCopy = () => {
    toast.success("Coupon code copied!");
  };

  return (
    <div className="bg-orange-400 rounded-2xl shadow-lg p-6 text-white w-full max-w-md mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Coupon Code: {coupon_code}</h2>
      <p className="text-lg">{description}</p>
      <div className="text-sm space-y-1">
        <p>
          <span className="font-semibold">Expires:</span> {expiry_date}
        </p>
        <p>
          <span className="font-semibold">Condition:</span> {condition}
        </p>
        <p>
          <span className="font-semibold">Type:</span> {coupon_type}
        </p>
      </div>

      <div className="flex gap-4 mt-4">
        <CopyToClipboard text={coupon_code} onCopy={handleCopy}>
          <button className="bg-white cursor-pointer text-orange-500 font-semibold px-4 py-2 rounded-lg shadow hover:bg-orange-100 transition">
            Copy Code
          </button>
        </CopyToClipboard>

        <button
          onClick={handleLink}
          className="bg-white cursor-pointer text-orange-500 font-semibold px-4 py-2 rounded-lg shadow hover:bg-orange-100 transition"
        >
          Use Now
        </button>
      </div>
    </div>
  );
};

export default CouponCard;
