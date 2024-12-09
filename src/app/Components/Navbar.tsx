import Link from "next/link"

export default function Header(){
    return(
        <>
        <div className="flex w-[100%] h-[58px] border-black bg-[#252B42]  text-white space-x-40">
            <div className="flex w-[421px] h-[46px] mt-[15px] space-x-7">
                <div className="flex">
            <img src="call.png" alt="" className="h-[16px] w-[16px] m-[5px]" />
                <p>(225) 555-0118</p>
                </div>
                <div className="flex">
                <img src="email.png" alt="" className="h-[16px] w-[16px] m-[5px]"/>
                <p>michelle.rivera@example.com</p>
                </div>
            </div>
            <div className="h-[44px] w-[343px] mt-[15px]">
            <p className="TopHeaderText">Follow Us and get a chance to win 80% off  </p>
            </div>
            <div className="flex h-[46px] w-[233px] mt-[15px] ml-[150px]">
            <p className="">Follow us: </p>
            <img src="instagram.png" alt="" className="h-[26px] w-[26px]"/>
            <img src="youtube.png" alt="" className="h-[26px] w-[26px]"/>
            <img src="facebook.png" alt="" className="h-[26px] w-[26px]"/>
            <img src="twitter.png" alt="" className="h-[26px] w-[26px]"/>
            </div>
        </div>
        <div className="Header">
            <div>
                 <h1 className="text-2xl font-bold">Bandage</h1>
            </div>
            <div className="HeaderFunc">
                <Link href={""}><p className="text">Home</p></Link>
                <Link href={"/Shop"}> <p className="text">Shop</p> </Link>
                <Link href={""}><p className="text">About</p></Link>
                <Link href={"/"}><p className="text">Blog</p></Link>
                <Link href={"/ContactUs"}><p className="text">Contact</p></Link>
                <Link href={""}><p className="text">Pages</p></Link>
            </div>
            <div className="searching">
                <div className=" flex mt-[10px]">
                <img src="vector.png" alt="" className="h-[16px] w-[16px] m-[5px]" />
                <p className="ml-5px"> Login / Register </p>
                </div> 
                <img src="search.png" alt="" className="h-[46px] w-[56px]"/>
                <img src="heart.png" alt="heart" className="h-[46px] w-[56px]"/>

                <img src="cart.png" alt="cart" className="h-[46px] w-[56px]"/>
            </div>
        </div>    
        </>
    )
}