"use client"
import React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";

const Shop = () => {
    const products = [
      {
          image: 'picture11',
          title: 'Graphic Design',
          department: 'English Department',
          originalPrice: 16.48,
          price: 6.48,
          colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
        },
        {
          image: '/picture22.png',
          title: 'Graphic Design',
          department: 'English Department',
          originalPrice: 16.48,
          price: 6.48,
          colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
        },
        {
          image: '/picture33.png',
          title: 'Graphic Design',
          department: 'English Department',
          originalPrice: 16.48,
          price: 6.48,
          colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
        },
        {
          image: '/picture44.png',
          title: 'Graphic Design',
          department: 'English Department',
          originalPrice: 16.48,
          price: 6.48,
          colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
        },
        {
            image: '/picture55.png',
            title: 'Graphic Design',
            department: 'English Department',
            originalPrice: 16.48,
            price: 6.48,
            colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
          },
          {
            image: '/picture66.png',
            title: 'Graphic Design',
            department: 'English Department',
            originalPrice: 16.48,
            price: 6.48,
            colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
          },
          {
            image: '/picture77.png',
            title: 'Graphic Design',
            department: 'English Department',
            originalPrice: 16.48,
            price: 6.48,
            colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
          },
          {
            image: '/picture88.png',
            title: 'Graphic Design',
            department: 'English Department',
            originalPrice: 16.48,
            price: 6.48,
            colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
          },
        
        {
            image: '/picture99.png',
            title: 'Graphic Design',
            department: 'English Department',
            originalPrice: 16.48,
            price: 6.48,
            colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
          },
          {
            image: '/picture100.png',
            title: 'Graphic Design',
            department: 'English Department',
            originalPrice: 16.48,
            price: 6.48,
            colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
          },
          {
            image: '/picture111.png',
            title: 'Graphic Design',
            department: 'English Department',
            originalPrice: 16.48,
            price: 6.48,
            colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
          },
          {
            image: '/picture122.png',
            title: 'Graphic Design',
            department: 'English Department',
            originalPrice: 16.48,
            price: 6.48,
            colors: ['#5ABEFA', '#23856D', '#E77C40', '#23856D']
          }
       
          
      ];

  const items = [
    { id: 1, name: "Cloths", count: "5 Items", image: "/pict.png" },
    { id: 2, name: "Cloths", count: "5 Items", image: "/pict1.png" },
    { id: 3, name: "Cloths", count: "5 Items", image: "/pict2.png" },
    { id: 4, name: "Cloths", count: "5 Items", image: "/pict3.png" },
    { id: 5, name: "Cloths", count: "5 Items", image: "/pict4.png" }
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
    <Navbar1/>
    <div className="bg-gray-100 min-h-screen  ">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
        <p className="text-sm text-gray-500 font-bold">Home &gt; Shop</p>
      </div>

      {/* Items Section */}
      <div className="flex ml-[20px] sm:grid-cols-2 md:grid-cols-4 gap-6 mb-[100px] w-[1240px] h-[195px]">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-[223px] h-[206px] object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Section */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-10">
        <p className="text-sm text-gray-500">Showing all 12 results</p>
        <div className="flex items-center gap-4">
          <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">Grid</button>
          <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">List</button>
          <select className="p-2 border rounded">
            <option className="h-[50px] w-[141px]">Popularity</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
          </select>
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-[94px] h-[50px]">Filter</button>
        </div>
      </div>

      {/* Brands Section */}
      <div className="flex justify-around items-center">
        {brands.map((brand) => (
          <div key={brand.id} className="w-24">
            <img src={brand.image} alt={brand.name} className="object-contain h-16" />
          </div>
        ))}
      </div>
    </div>

    <div className="container mx-auto py-12  ">
      <h2 className="text-2xl  text-center mb-4">Featured Products</h2>
      <h3 className="text-3xl font-bold text-center mb-4">BESTSELLER PRODUCTS</h3>
      <p className=" text-center">Problems trying to resolve the conflict between</p>
      <div className="grid grid-cols-4 gap- 4 ml-[70px] ">
        {products.map((product, index) => (
          <div key={index} className="bg-white  w-[239px]  mt-[90px] overflow-hidden">
            <div className=" h-[300px] w-[239px] " style= {{ backgroundImage: `url(${product.image})` }} />
            <div className="p-4 ">
              <h4 className="text-lg font-medium mb-2">{product.title}</h4>
              <p className="text-gray-500 mb-4">{product.department}</p>
              <div className="flex items-center justify-between ">
                <p className="text-gray-500 line-through mr-2">${product.originalPrice}</p>
                <p className="text-blue-500 font-medium">${product.price}</p>
              </div>
              <div className="flex mt-4">
                {product.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="w-6 h-6 rounded-full mr-2"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </>
  );
};

export default Shop