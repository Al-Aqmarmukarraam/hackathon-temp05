import react from "react";
import Image from "next/image";

import picture01 from "@/Images/picture01.png";
import picture02 from "@/Images/picture02.png";
import picture03 from "@/Images/picture03.png";
import picture04 from "@/Images/picture04.png";
import picture05 from "@/Images/picture05.png";
import picture06 from "@/Images/picture06.png";
import picture01 from "@/Images/picture01.png";
import picture02 from "@/Images/picture02.png";
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
          
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mx-[10px]">
          {/* Product Cards */}
          {[picture01, picture02, picture03, picture04, picture05, picture06, picture01, picture02].map(
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