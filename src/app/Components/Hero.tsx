import Image from "next/image"
import React from "react"
import EditorsPick from "./EditorsPick"
import ProductCard from "./FeaturedProduct"
import CardText from "./CardText"
import Greendiv from "./Greendiv"
import FeaturedPosts from "./FeaturedPosts"
import Footer from "../Components/Footer"

export default function Hero(){
    return(
        <div className="w-[1439px] h-[716px] absolute top-[136px] left-[1px] border">
          <div className="w-[1440px] h-[716px]">
                 <Image src="/heropic.png" alt="women " width={1440} height={64}/>
          </div>
         
      {/* Content Overlay */}
      <div className="absolute flex flex-col justify-center left-[100px] top-[100px] items-start gap-[35px] px-6 lg:px-16 z-10">
        <h5 className="font-Montserrat font-semibold text-[16px] leading-[24px] text-white">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat font-semibold text-[58px] leading-[80px] text-white max-w-[600px]">
          NEW COLLECTION
        </h1>
        <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-white max-w-[500px]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="w-[221px] h-[62px] rounded-[5px] px-[40px] py-[15px] bg-white text-[#252B42] hover:bg-[#2DC071] text-[24px] font-Montserrat leading-[32px] justify-center">
          SHOP NOW
        </button>
      </div>
      
        </div>
    )
}
