import { FaAngleDown } from "react-icons/fa";
import { TbMeat } from "react-icons/tb";
import { MdOutlineBakeryDining } from "react-icons/md";
import { PiCoffeeLight } from "react-icons/pi";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

function BottomHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const navItems = ['HOME', 'SHOP', 'MEATS & SEAFOOD', 'BAKERY', 'BEVERAGES', 'BLOG', 'CONTACT'];
  return (
    <div className="flex items-center justify-between gap-4 py-2.5 border-b border-b-[#E3E4E6] relative">
      {/* categories */}
      <div className="flex items-center justify-center gap-2 p-3 text-white bg-primaryColor rounded-4xl">
        <IoMenuOutline />
        <span className="text-xs font-medium">ALL CATEGORIES</span>
        <FaAngleDown className="cursor-pointer" />
      </div>
      {/* nav items */}
      <ul className="flex items-center max-lg:hidden">
        <li>
          <Link to="#" className="text-xs text-primaryColor flex items-center gap-1 hover:text-primaryColor transition
          bg-[#F0FAFF] px-3 py-2 rounded-2xl">HOME <FaAngleDown /></Link>
        </li>
        <li>
          <a href="#" className="text-xs text-blackColor flex items-center gap-1 hover:text-primaryColor transition px-3 py-2 rounded-2xl hover:bg-[#F0FAFF]">
            SHOP
          </a>
        </li>
        <li>
          <a href="#" className="text-xs text-blackColor flex items-center gap-1 hover:text-primaryColor transition px-3 py-2 rounded-2xl hover:bg-[#F0FAFF]">
            <TbMeat className="text-xl" /> MEATS & SEAFOOD
          </a>
        </li>
        <li>
          <a href="#" className="text-xs text-blackColor flex items-center gap-1 hover:text-primaryColor transition px-3 py-2 rounded-2xl hover:bg-[#F0FAFF]">
            <MdOutlineBakeryDining /> BAKERY
          </a>
        </li>
        <li>
          <a href="#" className="text-xs text-blackColor flex items-center gap-1 hover:text-primaryColor transition px-3 py-2 rounded-2xl hover:bg-[#F0FAFF]">
            <PiCoffeeLight /> BEVERAGES
          </a>
        </li>
        <li>
          <Link to="/blog" className="text-xs text-blackColor flex items-center gap-1 hover:text-primaryColor transition px-3 py-2 rounded-2xl hover:bg-[#F0FAFF]">
            BLOG
          </Link>
        </li>
        <li>
          
          <Link to="contact" className="text-xs text-blackColor flex items-center gap-1 hover:text-primaryColor transition px-3 py-2 rounded-2xl hover:bg-[#F0FAFF]">
            CONTACT
          </Link>
        </li>
      </ul>
      {/* toggle menu */}
      <IoMenuOutline className="text-2xl text-black hover:text-primaryColor transition cursor-pointer lg:hidden"
      onClick={() => setShowMenu(!showMenu)} />
      {
        showMenu
        &&
        <ul className="absolute top-[calc(100%-2px)] left-0 w-full container bg-white drop-shadow-xl rounded-2xl flex flex-col gap-1 p-2">
          {
            navItems.map((navItem, index) =>
              <li key={index} onClick={() => setShowMenu(false)}>
                <a href="#"
                className="text-xs text-blackColor flex items-center gap-1 hover:text-primaryColor transition px-3 py-2 rounded-2xl hover:bg-[#F0FAFF]">{navItem}</a>
              </li>
            )
          }
        </ul>
      }
    </div>
  )
}

export default BottomHeader