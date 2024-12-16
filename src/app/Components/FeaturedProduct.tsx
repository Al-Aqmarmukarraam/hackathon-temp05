import react from "react";
import Image from "next/image";
import Footer from "./Footer";

import picture1 from "@/Images/picture1.png";
import picture2 from "@/Images/picture2.png";
import picture3 from "@/Images/picture3.png";
import picture4 from "@/Images/picture4.png";
import picture5 from "@/Images/picture5.png";
import picture6 from "@/Images/picture6.png";
import picture7 from "@/Images/picture7.png";
import picture8 from "@/Images/picture8.png";
import CardText from "./CardText";

export default function ProductCard() {
  return (
    <div className="w-full absolute top-[1470px] left-0 flex justify-center">
      <div className="w-[1124px] py-[80px] flex flex-col gap-[80px]">
        {/* Text Section */}
        <div className="w-full flex flex-col gap-[10px] justify-center items-center">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mx-[10px]">
          {/* Product Cards */}
          {[picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8].map(
            (pic, index) => (
              <div
                key={index}
                className="w-[238px] h-[auto] mx-auto mb-[20px]" // Add margin-bottom to each card
              >
                <div className="w-full h-auto">
                  <div className="w-[239px]">
                    <Image src={pic} alt={`picture${index + 1}`} />
                  </div>
                  <CardText />
                </div>
              </div>
            )
          )}
        </div>
      </div>
      
    </div>
  );
}