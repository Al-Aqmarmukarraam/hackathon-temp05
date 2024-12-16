"use client"
import { useState } from "react";
import GreenHeader from "../Components/GreenHeader";
import Footer from "../Components/Footer";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function DesignPage() {
    const [isYearly, setIsYearly] = useState(false);
    const toggleBilling= ()=> {
        setIsYearly(!isYearly);
      };
  return (
    <>
    <GreenHeader/>
    <div className='ContactUsMain'>
    <div className="flex">

    <div className="h-[1044px] w-[421px] m-[120px]">
        <p className='text-xl font-bold m-2'>Contact us</p>
      <h2 className="text-6xl font-bold mb-8 ">Get In Touch today</h2>
      <p className="text-lg text-gray-700 mb-8">We know how large objects will act, 
      but things on a small scale</p>
      <p className="font-bold">Phone ; +451 215 215 </p>
      <p className="font-bold">Fax : +451 215 215</p>
      <div className="flex gap-3 mt-6">

           <FaTwitter className='w-[30px] h-[24px]'/>
           <FaFacebook className='w-[30px] h-[30px]'/>
           <FaInstagram className='w-[30px] h-[30px]'/>
           <FaLinkedin className='w-[30px] h-[30px]'/>
         </div>


      </div>
      <img src="/lastpg.png"/>
      </div>
      </div>
      <br /> <br />

      <div className=" h-134px w-633px text-center mb-[20px]">
        <p>VISIT OUR OFFICE</p>
        <h1 className="text-3xl font-bold">We have small businesses <br /> with big ideas</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="bg-white p-6 text-center">
            <IoCallOutline className="ml-[100px]"/>
            <p className="font-bold text-center mt-[5px]">georgia.young@example.com</p>
            <p className="font-bold text-center mt-[5px]">georgia.young@ple.com</p>

            <p className="font-bold text-center mt-[10px] mb-[10px]">Get Support</p>
            <button className="plan">Submit Request</button>
        </div>
        <div className="bg-[#252B42] p-6 text-center">
            <FaMapMarkerAlt className="ml-[100px]"/>
            <p className="font-bold text-center mt-[5px] text-white">georgia.young@example.com</p>
            <p className="font-bold text-center mt-[5px] text-white">georgia.young@ple.com</p>

            <p className="font-bold text-center mt-[10px] mb-[10px] text-white">Get Support</p>
            <button className="plans">Submit Request</button>
        </div>
        <div className="bg-white p-6 text-center">
            <IoMailOutline className="ml-[100px]"/>
            <p className="font-bold text-center mt-[5px]">georgia.young@example.com</p>
            <p className="font-bold text-center mt-[5px]">georgia.young@ple.com</p>

            <p className="font-bold text-center mt-[10px] mb-[10px]">Get Support</p>
            <button className="plan">Submit Request</button>
        </div>
      </div>


      <div className="w-[1050px] h-[348px] mt-[50px] ml-[110px]">
        <p className="text-md font-bold text-center">WE can't WAIT TO MEET YOU</p>
        <p className="text-4xl font-bold text-center">let's Talk</p>
        <button className="bg-[#23A6F0] text-white px-6 py-2 ml-[450px] mt-[30px] br-[5px] hover:bg-blue-600">Try it free now</button>
      
      </div>
      </>
      )}