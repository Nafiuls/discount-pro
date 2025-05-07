import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../utils/UseAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { handleSignIn, handleGoogle } = UseAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    handleSignIn(email, password)
      .then((result) => {
        toast.success("Login successfull");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  //   handle google login
  const google = () => {
    handleGoogle()
      .then((result) => {
        toast.success("Login successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="min-h-screen p-4 flex items-center justify-center w-full bg-orange-500">
      <form
        onSubmit={handleSubmit}
        className="p-5 lg:w-md w-full rounded-md bg-white flex flex-col gap-6"
      >
        <h1 className="text-2xl font-medium flex items-center gap-5">
          Please Login
          <GiArchiveRegister />
        </h1>
        <div className="flex items-center border-b-2 ">
          <MdEmail size={20} />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="outline-none p-2 w-full "
          />
        </div>
        <div className="flex items-center border-b-2 ">
          <RiLockPasswordFill size={20} />
          <input
            type={showPass ? "password" : "text"}
            name="password"
            placeholder="Password"
            className="outline-none p-2 w-full "
          />
          <button onClick={() => setShowPass(!showPass)}>
            {showPass ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>
        <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 transition-all text-white font-medium rounded-md py-2  w-full text-center">
          Login
        </button>
        <div className="px-6 sm:px-0 ">
          <button
            onClick={google}
            type="button"
            className="text-white w-full  bg-orange-500 hover:bg-orange-600 cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign up with Google<div></div>
          </button>
        </div>
        <Link to={"/reset"}>
          <p className="text-center font-medium text-orange-500 hover:underline">
            Forgot Password?
          </p>
        </Link>
        <p className="font-medium text-orange-500">
          Don't have an account?{" "}
          <Link className="text-blue-500 hover:underline" to={"/register"}>
            Register here!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
