import { footerImg } from "../../assets/index";
import { CiMail } from "react-icons/ci";

function TopFooter() {
  return (
    <div className="bg-primaryColor pt-10">
      <div className="container mx-auto px-4 flex">
        <div className="text-white flex flex-col gap-2 py-10 basis-1/2 max-md:basis-[100%]">
          <p className="text-xs">
            <span className="underline">$20 discount</span>
            <span className="pl-2">for your first order</span>
          </p>
          <p className="text-lg font-medium">Join our newsletter and get...</p>
          <p className="text-[10px] opacity-65">Join our email subscription now to get updates on promotions and coupons.</p>
          <div className="flex items-center gap-2 p-1 pl-2 rounded-lg bg-white h-12 max-w-[400px]">
            <CiMail className="text-xl text-blackColor" />
            <input type="email" placeholder="Your Email Address" 
            className="border-0 outline-0 focus:bg-neutral-100 flex-1 py-2 px-1 text-black text-base rounded-lg max-sm:w-1/2" />
            <input type="submit" value="Subscribe" className="text-sm text-white bg-primaryColor h-full px-4 flex items-center justify-center rounded-lg cursor-pointer
            hover:opacity-90 transition max-sm:px-2 max-sm:text-xs" />
          </div>
        </div>
        <div className="basis-1/2 flex justify-center max-md:hidden">
            <img src={footerImg} alt="footer-img" className="max-w-full" />
        </div>
      </div>
    </div>
  )
}

export default TopFooter