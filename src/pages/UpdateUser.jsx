import React from "react";
import { GrUpdate } from "react-icons/gr";
import UseAuth from "../utils/UseAuth";
import { MdAddAPhoto } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
const UpdateUser = () => {
  const { manageProfile, user } = UseAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    manageProfile(name, image);
  };
  return (
    <div className="min-h-screen bg-orange-500 w-full flex flex-col items-center">
      <h1 className="flex items-center gap-4 text-center my-10 text-white font-bold text-3xl capitalize">
        Update Profile
        <GrUpdate />
      </h1>
      <form
        className="lg:w-md w-full p-4 flex flex-col items-center gap-3 bg-white rounded-md"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
        <p className="text-xl font-medium text-center">{user?.displayName}</p>
        <hr className="border-black border w-full" />
        <div className="w-full flex flex-col gap-6 mt-6">
          <div className="flex items-center border-b-2 ">
            <FaUser size={20} />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="outline-none p-2 w-full "
            />
          </div>
          <div className="flex items-center border-b-2 w-full">
            <MdAddAPhoto size={20} />
            <input
              type="text"
              name="image"
              placeholder="Your photo URL"
              className="outline-none p-2 w-full "
            />
          </div>
        </div>
        <button className="bg-orange-500 mt-6 cursor-pointer hover:bg-orange-600 transition-all text-white font-medium rounded-md py-2  w-full text-center">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
