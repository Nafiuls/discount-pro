import React from "react";
import UseAuth from "../utils/UseAuth";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = UseAuth();
  return (
    <div className="min-h-screen bg-orange-500 w-full flex flex-col items-center ">
      <h1 className="text-center my-10 text-white font-bold text-3xl capitalize">
        My Profile
      </h1>
      <div className="bg-white gap-3 flex flex-col items-center rounded-md p-5 mx-auto lg:w-sm text-center">
        <h1 className="text-center text-orange-500 font-bold text-3xl capitalize">
          welcome back,
          <br /> {user?.displayName} !
        </h1>
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <p className="text-xl font-medium">{user?.displayName}</p>
        <p className="text-xl font-medium">{user?.email}</p>
        <Link to={"/update"} className="w-full">
          <button className="bg-orange-500 cursor-pointer  hover:bg-orange-600 transition-all text-white font-medium rounded-md py-2 w-full text-center">
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
