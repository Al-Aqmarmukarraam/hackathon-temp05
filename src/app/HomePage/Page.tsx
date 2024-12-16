import Image from "next/image";
import FeaturedProducts from "../Components/FeaturedProduct";
import Greendiv from "../Components/Greendiv";
import ProductPage from "../ProductPage/page";
import FeaturedPosts from "../Components/FeaturedPosts";
import ShopPage from "../Components/SitePage2";
import Shopmain from "../Components/SiteMain";
import Team from "../ProductPage/page";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
 import { Import } from "lucide-react";


export default function Home() {
  return (
    <>
    <Navbar1/>
     <div className="pic1">
        <div className="bg-gray-900 bg-opacity-50 text-white h-full flex flex-col justify-center">
          <p className="ml-[140px]">Summer 2020</p>
          <h1 className="text-5xl mb-8 font-bold ml-[140px] ">NEW COLLECTION</h1>
          <p className="text-lg mb-8 ml-[140px]">We know how large objects will act, <br />
          but things on a small scale.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-[221px] ml-[140px]">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Editor's Pick Section */}
      <section className="m-[150px]">

        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold ">Editor's Pick</h2>
          <p className="text-gray-600 text-center mb-[35px]">Problems trying to resolve the conflict between </p>
          <div className="flex grid-cols-3 gap-8">
            <div>
              <img src="hero-men.png" alt="" />
            </div>
            <div>
              <img src="hero-women.png" alt="" />
            </div>
            <div>
              <img src="hero-accecories.png" alt="" />
              <img src="hero-kids.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <FeaturedProducts/>
      <ProductPage/>
      <br /><br />
      <Greendiv/>
      <Footer/>


    </>
  );
}