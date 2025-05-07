import React from "react";
import { MdEmail } from "react-icons/md";
import { RiRotateLockFill } from "react-icons/ri";
import UseAuth from "../utils/UseAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Reset = () => {
  const { reset } = UseAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    reset(email)
      .then((result) => {
        toast.success("Check your email !");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        navigate("/login");
      });
  };
  return (
    <div className="min-h-screen p-4 flex items-center justify-center w-full bg-orange-500">
      <form
        className="p-5 lg:w-md w-full rounded-md bg-white flex flex-col gap-6 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-medium flex items-center gap-5">
          Reset Password
          <RiRotateLockFill />
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
        <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 transition-all text-white font-medium rounded-md py-2  w-full text-center">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Reset;
