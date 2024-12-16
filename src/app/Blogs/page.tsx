"use client"
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image"
import ProductCard from "./FeaturedProduct"
import CardText from "./CardText";
import Footer from "../Components/Footer";
import { BiRightArrow } from "react-icons/bi";



const ShopPage = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Information" },
    { id: "reviews", label: "Reviews (0)" },
  ];
  const brands = [
    { id: 1, name: "Hooli", image: "/hooli.png" },
    { id: 2, name: "Lyft", image: "/lyft.png" },
    { id: 3, name: "Stripe", image: "/stripe.png" },
    { id: 4, name: "AWS", image: "/aws.png" },
    { id: 5, name: "Reddit", image: "reddit.png" },
  ];




  return (
    <>
    <Navbar/>
    <div className="bg-[#FAFAFA] min-h-screen p-6 ]">
      {/* Product Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAFAFA] p-6 h-[598px] w-[1050">
        {/* Image Section */}
        <div>
          <img
            src="/floating.png"
            alt="Floating Phone"
            className=" object-cover rounded- h-[450] w-[506px]"
          />
          <div className="flex mt-4 gap-4">
            <img
              src="/chair1.png"
              alt="Thumbnail 1"
              className="w-[100] h-[75px]  border-gray-300"
            />
            <img
              src="/shop.png"
              alt="Thumbnail 2"
              className="w-[100] h-[75px] border-gray-300"
            />
          </div>
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Floating Phone</h1>
          <div className="flex items-center gap-2 my-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-gray-500 text-sm">(10 Reviews)</span>
          </div>
          <p className="text-2xl font-semibold text-gray-800">$1,139.33</p>
          <p className="text-green-600 font-semibold my-2">In Stock</p>
          <p className="text-gray-600 text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie.
          </p>

          {/* Color Options */}
          <div className="flex items-center gap-2 mt-4">
            <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </div>

          {/* Buttons */}
          <button className="mt-[180px] bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Select Options
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
        {/* Tab Buttons */}
        <div className="flex border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>


        <div className="flex h-[499px] w-[1056px] justify-evenly m-[45px]">
            <div className="w-[332px] h-[427px]">
                <img src="dicor.png" alt="" />
            </div>
            <div className="w-[332px] h-[427px] justify-center">

                <p className="text-3xl">the quick fox jumps over</p>
                <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. <br />

Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. <br />

Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            </div>
            <div className="w-[332px] h-[427px]">
            <p className="text-3xl ">the quick fox jumps over</p>

            <div className="">
                <div className="flex mt-[7px]">
                <BiRightArrow className="h-[16px] w-[9px] m-[5px]"/>
                <p>a quick brown fox jumps over a lazy dog</p>
                </div>
                <div className="flex mt-[7px]">
                <BiRightArrow className="h-[16px] w-[9px] m-[5px]"/>
                <p>a quick brown fox jumps over a lazy dog</p>
                </div>
                <div className="flex mt-[7px]">
                <BiRightArrow className="h-[16px] w-[9px] m-[5px]"/>
                <p>a quick brown fox jumps over a lazy dog</p>
                </div>
                <div className="flex mt-[7px]">
                <BiRightArrow className="h-[16px] w-[9px] m-[5px]"/>
                <p>a quick brown fox jumps over a lazy dog</p>
                </div>

            </div>

            <p className="text-3xl mt-[15px]">the quick fox jumps over</p>

            <div className="flex mt-[7px]">
                <BiRightArrow className="h-[16px] w-[9px] m-[5px] "/>
                <p >a quick brown fox jumps over a lazy dog</p>
                </div>
                <div className="flex mt-[7px]">
                <BiRightArrow className="h-[16px] w-[9px] m-[5px]"/>
                <p>a quick brown fox jumps over a lazy dog</p>
                </div>
            </div>


        </div>
      </div>
    </div>
          <div className="flex justify-around items-center">
          {brands.map((brand) => (
            <div key={brand.id} className="w-24">
              <img src={brand.image} alt={brand.name} className="object-contain h-16" />
            </div>
          ))}
          <Footer/>
        </div>




        </>

  );
};

export default ShopPage;