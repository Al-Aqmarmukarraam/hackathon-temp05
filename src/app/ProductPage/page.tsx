import GreenHeader from "../Components/GreenHeader";
import Footer from "../Components/Footer";

export default function Team() {
  return (
    <>
    <GreenHeader/>
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="text-center py-16 bg-white shadow-sm">
        <h3 className="text-sm text-gray-500 uppercase tracking-wide">What We Do</h3>
        <h1 className="text-4xl font-bold mt-2">Innovation tailored for you</h1>
        <nav className="mt-4 text-sm text-gray-500">
          <span>Home</span> <span className="mx-2">/</span> <span className="font-semibold">Team</span>
        </nav>
      </div>

      {/* Image Grid Section */}

      <div className="flex max-w-7xl mx-auto py-12 px-4 w-[1150px] ml-[70px]">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="overflow-hidden rounded-lg shadow-lg h-[530px]  w-[350px] m-2">
            <img
              src="/tailored1.png" // Replace with your image URL
              alt="Fashion 1"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Image 2 */}
          <div className=" w-[300px]">
          <div className="rounded-lg shadow-lg h-[260px] w-[361px] m-2">
            <img
              src="/tailored2.png" // Replace with your image URL
              alt="Fashion 2"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Image 3 */}
          <div className=" rounded-lg shadow-lg h-[260px] w-[361px] m-2">
            <img
              src="/tailored3.png" // Replace with your image URL
              alt="Fashion 3"
              className="object-cover w-full h-full"
            />
          </div>
          </div>
          {/* Image 4 */}
          <div>
          <div className=" rounded-lg shadow-lg h-[260px]  w-[361px] m-2">
            <img
              src="/tailored4.png" // Replace with your image URL
              alt="Fashion 4"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Image 5 */}
          <div className=" rounded-lg shadow-lg h-[260px] w-[361px] m-2">
            <img
              src="/tailored5.png" // Replace with your image URL
              alt="Fashion 5"
              className="object-cover w-full h-full"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
<br /> <br /> <br />
    <div className="font-sans ">
            <div className="lg:max-w-5xl max-w-3xl mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-gray-800 text-3xl font-extrabold">Meet Our Team</h2>
                    <p className="text-gray-800 text-sm mt-4 leading-relaxed">Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
                </div>

                <div className="grid lg:grid-cols-4 ml-[200px] md:grid-cols-3 gap-6 max-md:justify-center mt-12">
                    <div className="border rounded-lg overflow-hidden">
                        <img src="team11.png" className="w-full h-56 object-cover" />

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
                        <img src="team22.png" className="w-full h-56 object-cover" />

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
                        <img src="team33.png" className="w-full h-56 object-cover" />

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
                <div className="grid lg:grid-cols-4 ml-[200px] md:grid-cols-3 gap-6 max-md:justify-center mt-12">
                    <div className="border rounded-lg overflow-hidden">
                        <img src="team3.png" className="w-full h-56 object-cover" />

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
                        <img src="team55.png" className="w-full h-56 object-cover" />

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
                        <img src="team2.png" className="w-full h-56 object-cover" />

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
                        <img src="team66.png" className="w-full h-56 object-cover" />

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
                        <img src="team77.png" className="w-full h-56 object-cover" />

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
        <div className="bg-white py-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start your 14 days free trial</h2>
          <p className="text-gray-500 mb-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met sent. RELIT official
            consequent.
          </p>
          <button className="bg-[#23A6F0] text-white px-6 py-2  hover:bg-blue-600">
            Try it free now
          </button>

          <div className="flex justify-center gap-6 mt-6">
            {/* <a href="#" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a> */}
            <img src="twitterB.png" alt="" className='w-[30px] h-[24px]'/>
            <img src="facebookDB.png" alt="" className='w-[30px] h-[30px]'/>
            <img src="instaBlack.png" alt="" className='w-[30px] h-[30px]'/>
            <img src="linkedin.png" alt="" className='w-[30px] h-[30px]'/>
          </div>
       </div>
       
      </div>
      
    </>
  );
}