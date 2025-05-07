# 🏷️ Discount PRO – A Coupon Collecting Application

**Live Site:** [Click here to visit Discount PRO 🚀](https://meek-panda-709843.netlify.app/myProfile)

Discount PRO is a sleek and responsive single-page web application built to help users effortlessly find, copy, and use discount coupons from various top e-commerce brands in Bangladesh. With modern authentication features, intuitive UI, and dynamic coupon filtering, this app is a one-stop solution for all your saving needs.

---

## 🎯 Purpose

E-commerce sites frequently offer various types of coupons and vouchers—but most users miss out. Discount PRO aggregates these scattered discounts and organizes them into a user-friendly platform, enabling users to browse, copy, and use coupons with ease. Whether you're a regular shopper or a bargain hunter, this app ensures you never pay full price again!

---

## 🛠️ Tech Stack & Tools

- **Frontend Framework:** Vite + React
- **Authentication:** Firebase Authentication (Email/Password + Google OAuth)
- **Routing:** React Router DOM
- **State Management:** React Hooks & Context API
- **Styling:** Tailwind CSS
- **Animation:** AOS (Animate On Scroll)
- **Clipboard:** react-copy-to-clipboard
- **Deployment:** Netlify

---

## 🌟 Key Features

- 🔐 **Secure Authentication:** Email/password & Google login using Firebase.
- 🖼️ **Responsive Design:** Mobile-first, fluid layout for phones, tablets, and desktops.
- 🧾 **Dynamic Brands & Coupons:** View brand details and associated coupon offers.
- 📋 **Copy Coupon Codes:** One-click copy functionality with toast notifications.
- 🔍 **Brand Search & Filtering:** Easily find and browse brands with ongoing sales.
- 🔁 **Protected Routes:** Routes like "My Profile" and "Brand Details" are accessible only to authenticated users.
- 🛠️ **Profile Update & Password Reset:** Update profile info and recover forgotten passwords.
- 💾 **Environment Variables:** Firebase config secured via `.env` (with VITE\_ prefix).
- ❌ **Custom 404 Page:** Friendly Not Found page with a link to home.

---

## 📄 Pages and Routes

| Route              | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| `/`                | Home with banner, top brands, brands on sale, and custom sections |
| `/brands`          | All brands listing with search and filter                         |
| `/brand/:id`       | Private route: Shows coupons for selected brand                   |
| `/login`           | Login with email/password or Google                               |
| `/register`        | Register with form validation                                     |
| `/my-profile`      | Private route: Shows user info and option to update               |
| `/update-profile`  | Update user's photo and display name                              |
| `/forgot-password` | Reset password via email                                          |
| `*`                | 404 Not Found page                                                |

---

## 🔐 Authentication Features

- Email & password login with form validation
- Google OAuth login integration
- Password requirements: 1 uppercase, 1 lowercase, min. 6 characters
- Password reset email
- Toggle show/hide password functionality
- Authentication state persists on page reload
- Secure private routes using React Router’s `Navigate`

---

## 🧪 Fake JSON Data

Brand and coupon data are generated using realistic fake data structures. Each brand includes:

- `brand_name`, `brand_logo`, `rating`, `category`, `description`, `isSaleOn`, `shop_link`, and an array of `coupons`

---

## 🖼️ UI & UX Highlights

- Responsive header with conditional nav buttons
- User-friendly layout with hover effects and transitions
- AOS animation package for scroll animations
- Marquee effect for top brands section
- Dynamic toast messages for actions like login, logout, and copy code

---

## 🔗 NPM Packages Used

- `firebase`
- `react-router-dom`
- `react-copy-to-clipboard`
- `aos`
- `react-icons`
- `react-fast-marquee`
- `react-hot-toast`
