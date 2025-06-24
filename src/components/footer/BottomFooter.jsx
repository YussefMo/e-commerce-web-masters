import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { googlePlayImg, appStoreImg, paymentImg } from './../../assets/index';

function BottomFooter() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="pb-10 border-b border-b-[#E4E5EE] flex flex-wrap justify-between gap-8">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#E4E5EE]">
              <MdOutlinePhoneInTalk />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <span className="text-black text-xs font-medium">8 800 555-55</span>
              <span className="text-blackColor text-[8px] tracking-wide">Working 8:00 - 22:00</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-col gap-1">
              <span className="text-black text-xs font-medium">Download App on Mobile :</span>
              <span className="text-neutral-500 text-[10px]">15% discount on your first purchase</span>
            </div>
            <img src={googlePlayImg} alt="google-paly" width={100} />
            <img src={appStoreImg} alt="app-store" width={100} />
            <div className="flex items-center gap-2">
              <a href="#" className="w-8 h-8 rounded-full border border-[#E4E5EE] flex items-center justify-center 
                text-primaryColor cursor-pointer hover:text-white hover:bg-primaryColor transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#E4E5EE] flex items-center justify-center 
                text-primaryColor cursor-pointer hover:text-white hover:bg-primaryColor transition">
                <FaTwitter />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-[#E4E5EE] flex items-center justify-center 
                text-primaryColor cursor-pointer hover:text-white hover:bg-primaryColor transition">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            Copyright 2025 © All rights reserved by Blackrise Theme
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <ul className="flex items-center gap-2">
                <li className="text-[10px] text-neutral-400">Privacy Policy</li>
                <li className="text-[10px] text-neutral-400">Terms and Conditions</li>
                <li className="text-[10px] text-neutral-400">Cookie</li>
            </ul>
            <img src={paymentImg} alt="payment-img" width={300} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomFooter