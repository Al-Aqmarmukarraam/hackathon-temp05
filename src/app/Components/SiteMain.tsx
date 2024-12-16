"use client"
import React from 'react';
import Link from 'next/link';
import { url } from 'inspector';
import Footer from './Footer';

const SiteMain = () => {
  // Sample product data
  const products = [
    {
      image: '/picture11.png',
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

  return (

    <div className="container mx-auto py-12  ">
      <h2 className="text-2xl  text-center mb-4">Featured Products</h2>
      <h3 className="text-3xl font-bold text-center mb-4">BESTSELLER PRODUCTS</h3>
      <p className=" text-center">Problems trying to resolve the conflict between</p>
      <div className="grid grid-cols-4 gap- 4 ml-[70px] ">
        {products.map((product, index) => (
          <div key={index} className="bg-white  w-[239px]  mt-[90px] overflow-hidden">
             <div
  className="h-[427px] w-[239px]"
  style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
/>
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
  );
};

export default SiteMain