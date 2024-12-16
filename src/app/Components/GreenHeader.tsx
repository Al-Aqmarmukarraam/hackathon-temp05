import Link from "next/link"
export default function GreenHeader(){
    return(
        <div className="Header">
            <div>
                 <h1 className="text-2xl font-bold">Bandage</h1>
            </div>
            <div className="HeaderFunc">
                <Link href={"MainPage"}><p className="text">Home</p></Link>
                <Link href={"/Product"}><p className="text">Product</p></Link>
                <Link href={"/pricing"}><p className="text">Pricing</p></Link>
                <Link href={"/ContactUs"}><p className="text">Contact</p></Link>

            </div>
            <div className="flex">
                <button className="w-[100px] h-[52px] bg-white text-blue-500">Login</button>
                <Link href={"/getintouch"}><button className="w-[214px] h-[52px] rounded-md bg-blue-500 text-white p-2">Become a member</button></Link>
            </div>
        </div> 
    )
}