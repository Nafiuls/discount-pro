import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { MdEmail, MdAddAPhoto } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import UseAuth from "../utils/UseAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const { handleRegister } = UseAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;
    if (password.length < 6) {
      return setError("password must be 6 characters or more");
    }
    if (!/[A-Z]/.test(password)) {
      return setError("password must have 1 uppercase character");
    }
    if (!/[a-z]/.test(password)) {
      return setError("password must have 1 lowercase character");
    }
    setError("");
    handleRegister(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Register successfull");
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="min-h-screen p-4 flex items-center justify-center w-full bg-orange-500">
      <form
        onSubmit={handleSubmit}
        className="p-5 lg:w-md w-full rounded-md bg-white flex flex-col gap-6 "
      >
        <h1 className="text-2xl font-medium flex items-center gap-5">
          Please Register
          <GiArchiveRegister />
        </h1>

        <div className="flex items-center border-b-2 ">
          <FaUser size={20} />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="outline-none p-2 w-full "
          />
        </div>
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
          <MdAddAPhoto size={20} />
          <input
            type="text"
            name="image"
            placeholder="Your photo URL"
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
        <p className="text-normal capitalize text-red-500 text-center">
          {error}
        </p>
        <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 transition-all text-white font-medium rounded-md py-2  w-full text-center">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
