import Image from 'next/image';
import GreenHeader from '../Components/GreenHeader';
import Footer from '../Components/Footer';

export default function DesignPage() {
    const brands = [
        { id: 1, name: "Hooli", image: "/hooli.png" },
        { id: 2, name: "Lyft", image: "/lyft.png" },
        { id: 3, name: "Stripe", image: "/stripe.png" },
        { id: 4, name: "AWS", image: "/aws.png" },
        { id: 5, name: "Reddit", image: "reddit.png" },
      ];
  return (
    <>
    <GreenHeader/>
    <div className='ContactUsMain'>
    <div className='img={/ContactUs.png}'>
    <div className="h-[1044px] w-[321px] m-[120px]">
        <p className='text-xl font-bold m-2'>About Company</p>
      <h2 className="text-6xl font-bold mb-8 ">About US</h2>
      <p className="text-lg text-gray-700 mb-8">We know how large objects will act, but things on a small scale.</p>

      <div className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Quote Now</button>
      </div>
      </div>
      </div>
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-8">Problems Trying</h2>
      <p className='font-bold text-3xl'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
      <p className="text-lg text-gray-700 mb-8">Problems trying to resolve the conflict between the two major realms of classNameical physics: Newtonian mechanics...</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        <div className="text-center">
          <p className="text-2xl font-bold">15K</p>
          <p className="text-gray-700">Happy Customers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">150K</p>
          <p className="text-gray-700">Monthly Visitors</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">15</p>
          <p className="text-gray-700">Countries Worldwide</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">100+</p>
          <p className="text-gray-700">Top Partners</p>
        </div>
      </div>

      <div className="justify-center m-[150px]">
        <img src="Video.png" alt="" className='w-[1440px] h-[540px]'/>
      </div>


      <div className="font-sans ">
            <div className="lg:max-w-5xl max-w-3xl mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-gray-800 text-3xl font-extrabold">Meet Our Team</h2>
                    <p className="text-gray-800 text-sm mt-4 leading-relaxed">Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
                </div>

                <div className="grid lg:grid-cols-4 ml-[200px] md:grid-cols-3 gap-6 max-md:justify-center mt-12">
                    <div className="border rounded-lg overflow-hidden">
                        <img src="team1.png" className="w-full h-56 object-cover" />

                        <div className="p-4">
                            <h4 className="text-gray-800 text-base font-bold text-center">Username</h4>
                            <p className="text-gray-500 text-xs mt-1 font-bold text-center">Profession</p>

                            <div className="space-x-4 flex mt-4 ml-[25px]">
                                <img src="facebookB.png" alt="" />
                                <img src="instaB.png" alt="" />
                                <img src="twitterB.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                        <img src="team2.png" className="w-full h-56 object-cover" />

                        <div className="p-4">
                            <h4 className="text-gray-800 text-base font-bold text-center">Username</h4>
                            <p className="text-gray-500 text-xs font-bold mt-1 text-center">Profession</p>


                            <div className="space-x-4 flex mt-4 ml-[25px]">
                                <img src="facebookB.png" alt="" />
                                <img src="instaB.png" alt="" />
                                <img src="twitterB.png" alt="" />
                            </div>

                        </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                        <img src="team3.png" className="w-full h-56 object-cover" />

                        <div className="p-4">
                            <h4 className="text-gray-800 text-base font-bold text-center" >Username</h4>
                            <p className="text-gray-500 text-xs font-bold mt-1 text-center">Profession</p>

                            <div className="space-x-4 flex mt-4 ml-[25px]">
                                <img src="facebookB.png" alt="" />
                                <img src="instaB.png" alt="" />
                                <img src="twitterB.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[479px] mt-[50px]'>
        <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-gray-800 text-3xl font-extrabold">big Companies are Here</h2>
                    <p className="text-gray-800 text-sm mt-4 leading-relaxed">Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                     {/* Brands Section */}
      <div className="flex justify-around items-center m-[40px]">
        {brands.map((brand) => (
          <div key={brand.id} className="w-24">
            <img src={brand.image} alt={brand.name} className="object-contain h-16" />
          </div>
        ))}
      </div>
        </div>
        <div className='flex h-[636px] w-[1263px] justify-between bg-[#2A7CC7] text-white'>
        <div className="h-[1044px] w-[491px] m-[120px]">
        <p className='text-xl font-bold '>WORK WITH US</p>
      <h2 className="text-4xl font-bold mb-8 ">Now Let's grow Yours</h2>
      <p className="text-md  mb-8">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>

      <div className="flex">
        <button className="Contact-button">Button</button>
      </div>
      </div>
            <div>
                <img src="contact-last.png" alt="" className='h-[640px] w-[590px]' />
            </div>
            
        </div>
    </>
  );
}
