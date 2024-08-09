import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaCrown } from "react-icons/fa";
import { IoBasketSharp } from "react-icons/io5";
import "./index.css";
import profile from "./assets/profile.jpg";

function Navbar() {
  return (
    <div className="bg-transparent absolute w-full flex justify-between p-10 items-center h-20">
      <div className="Menu-Icon cursor-pointer text-white flex items-center justify-center w-14 h-14 ">
        <IoMenu size={30} />
      </div>
      <div className="Logo cursor-pointer w-32 ml-[230px] h-14 flex items-center justify-center flex-col text-white">
        <FaCrown size={23} />
        <h1 className="font-extrabold text-xl">MJSTK</h1>
      </div>
      <div className="Profile-Tools flex justify-evenly items-center w-72 h-14 text-white ">
        <FaSearch className="cursor-pointer w-7 h-5" />
        <div className="cursor-pointer relative">
          <IoBasketSharp className="cart w-7 h-7" />
          <span className="absolute top-0 -right-2 h-4 w-4 bg-[#0087CC] rounded-full"></span>
        </div>

        <img
          src={profile}
          className="cursor-pointer h-10 w-10 rounded-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
