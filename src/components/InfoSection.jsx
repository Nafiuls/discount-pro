import React from "react";

const InfoSection = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto space-y-20">
      {/* How It Works */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition bg-white text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">
              Step 1: Sign Up or Log In
            </h3>
            <p className="text-gray-600">
              Use your email or Google account to get started securely.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition bg-white text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">
              Step 2: Browse Coupons
            </h3>
            <p className="text-gray-600">
              Explore discounts from top Bangladeshi e-commerce stores.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg transition bg-white text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">Step 3: Copy & Save</h3>
            <p className="text-gray-600">
              Click to copy your coupon and apply it at checkout.
            </p>
          </div>
        </div>
      </section>

      {/* Why Use This App */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Why Use This App
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-2xl shadow bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">
              💰 Save Money Instantly
            </h3>
            <p className="text-gray-600">
              Get access to the latest discount codes and voucher deals in one
              place.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">🧠 No More Searching</h3>
            <p className="text-gray-600">
              Forget endless searching — we collect and verify all available
              coupons for you.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">⚡ One-Click Copy</h3>
            <p className="text-gray-600">
              Quickly copy any coupon code with a single tap or click.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">🔄 Always Updated</h3>
            <p className="text-gray-600">
              We keep the coupons fresh, valid, and up-to-date for your
              convenience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
