import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">DiscountPro</h2>
          <p className="text-sm">
            Save more on your favorite Bangladeshi online stores with verified
            coupons.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Browse Coupons
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sign In
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Top Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Electronics
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Fashion
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Groceries
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Beauty & Health
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@discountpro.com</p>
          <p className="text-sm">Dhaka, Bangladesh</p>
          <div className="mt-4 flex space-x-4">
            <a href="#">
              <i className="fab fa-facebook text-white text-xl"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter text-white text-xl"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram text-white text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-600 text-center text-sm py-4 mt-6">
        &copy; {new Date().getFullYear()} DiscountPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
