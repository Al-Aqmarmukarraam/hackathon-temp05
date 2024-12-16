import React from 'react';
import Image from 'next/image';

const Greendiv= () => {
  return (
    <>
    <div className=" bg-[#23856D] text-white flex ">
    <header className="py-8 px-4 md:px-8">
      <p className="text-lg mb-5">SUMMER 2020</p>
        <h1 className="text-7xl font-bold ">Vita Classic Product</h1>
        <div>
          <h2 className="text-1xl font-bold mb-4">We know how large objects will act. We know how are objects will act. We know.</h2>

        </div>
       <div className='flex'> 
       <p className="text-lg font-bold py-2 px-4 rounded " >$16.48</p>
        <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded "> ADD TO CART </button>
        </div>
      </header>

      <div className="flex grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 my-8">

        <div>
          <Image
            src="/greenman.png"
            alt="Product Image"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>

      </div>
      </div>
      <br /> 
      <div className='flex h-[582px] w-[fit]'>
        <div>
            <img src="couples.png" alt="couples" />
        </div>

      <div className=" w-[573px] h-[326px] mt-[200px]">
        <p className='text-gray-400'>Summer 2020</p>
        <h2 className="text-2xl font-bold mb-4">Part of the Neural <br /> Universe</h2>
        <p className="text-lg mb-4 text-gray-400">We know how large objects will act, <br />but things on a small scale.</p>
        <button className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded h-[52px] w-[156px]">
          BUY NOW
        </button>
        <a href="#" className="text-green-400  hover:text-green-600 ml-4 h-[52px] w-[156px]">
          READ MORE
        </a>
      </div>
      </div>
    </>
  );
};

export default Greendiv;