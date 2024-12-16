import React from "react";
import Image from "next/image";
import Navbar from "../app/Components/Navbar";
import Navbar1 from "../app/Components/Navbar1";
import Hero from "../app/Components/Hero";
import EditorsPick from "./Components/EditorsPick"; 
import FeaturedProducts from "./Components/FeaturedProduct";
import CardText from "./Components/CardText";
import FeaturedPosts from "./Components/FeaturedPosts";
import Greendiv from "./Components/Greendiv";
import  SitePage2 from "../app/Components/SitePage2";
import SiteMain from "../app/Components/SiteMain";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Navbar1/>
    <Hero/>
    <EditorsPick/>
    <FeaturedProducts/>
    <CardText/>
    <>Hero</>
      <FeaturedPosts/>
      <Greendiv/>
      <SiteMain/>
      <SitePage2/>
       <Footer/>  

      </>
  );
}