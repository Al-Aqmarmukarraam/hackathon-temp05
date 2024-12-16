import Image from "next/image";
import React from "react";
import Footer from "./Footer";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, } from "react-icons/fa6";


export default function Navbar() {
  return (
    <div className="lg:block hidden w-full h-[58px] bg-[#252B42]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">
        {/* Left section: Contact Info */}
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
            <IoCallOutline width={16} height={16} /> 
            <span className="font-Montserrat font-semibold text-[14px]"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <IoMailOutline width={16} height={16} /> 
            <span className="font-Montserrat text-[14px]">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-[10px] items-center">
          <h6 className="font-Montserrat text-[14px] text-white">Follow Us:</h6>
          <div className="flex gap-[10px]">
            <FaInstagram width={16} height={16} />
            <FaYoutube width={16} height={16} />
            <FaFacebook width={16} height={16} />
            <FaTwitter width={16} height={16} /> 
          </div>
        </div>
      </div>
      
    </div>
  );
}
