import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { IoMenuOutline } from 'react-icons/io5';
import { MdOutlineBakeryDining } from 'react-icons/md';
import { PiCoffeeLight } from 'react-icons/pi';
import { TbMeat } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';

// mobile nav
const navItems = [
  {
    title: 'HOME',
    href: '/'
  },
  {
    title: 'SHOP',
    href: '/shop'
  },
  {
    title: 'MEATS & SEAFOOD',
    href: '#'
  },
  {
    title: 'BAKERY',
    href: '#'
  },
  {
    title: 'BEVERAGES',
    href: '#'
  },
  {
    title: 'BLOG',
    href: '/blog'
  },
  {
    title: 'CONTACT',
    href: '/contact'
  }
];

function BottomHeader() {
  const location = useLocation();
  const path = location.pathname;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative flex items-center justify-between gap-4 border-b border-b-[#E3E4E6] py-2.5">
      {/* categories */}
      <div className="bg-primaryColor flex items-center justify-center gap-2 rounded-4xl p-3 text-white">
        <IoMenuOutline />
        <span className="text-xs font-medium">ALL CATEGORIES</span>
        <FaAngleDown className="cursor-pointer" />
      </div>
      {/* nav items */}
      <ul className="flex items-center max-lg:hidden">
        <li>
          <Link
            to="/"
            className={`hover:text-primaryColor flex items-center gap-1 rounded-2xl px-3 py-2 text-xs transition hover:bg-[#F0FAFF] ${path === '/' && 'text-primaryColor bg-[#F0FAFF]'}`}
          >
            HOME <FaAngleDown />
          </Link>
        </li>
        <li>

          <Link to="/shop" className={`hover:text-primaryColor flex items-center gap-1 rounded-2xl px-3 py-2 text-xs transition hover:bg-[#F0FAFF] ${path === '/shop' && 'text-primaryColor bg-[#F0FAFF]'}`}>
            SHOP
          </Link>
        </li>
        <li>
          <a
            href="#"
            className={`hover:text-primaryColor flex items-center gap-1 rounded-2xl px-3 py-2 text-xs transition hover:bg-[#F0FAFF] ${path === '#' && 'text-primaryColor bg-[#F0FAFF]'}`}
          >
            <TbMeat className="text-xl" /> MEATS & SEAFOOD
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`hover:text-primaryColor flex items-center gap-1 rounded-2xl px-3 py-2 text-xs transition hover:bg-[#F0FAFF] ${path === '#' && 'text-primaryColor bg-[#F0FAFF]'}`}
          >
            <MdOutlineBakeryDining /> BAKERY
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`hover:text-primaryColor flex items-center gap-1 rounded-2xl px-3 py-2 text-xs transition hover:bg-[#F0FAFF] ${path === '#' && 'text-primaryColor bg-[#F0FAFF]'}`}
          >
            <PiCoffeeLight /> BEVERAGES
          </a>
        </li>
        <li>
          <Link
            to="/blog"
            className={`hover:text-primaryColor flex items-center gap-1 rounded-2xl px-3 py-2 text-xs transition hover:bg-[#F0FAFF] ${path === '/blog' && 'text-primaryColor bg-[#F0FAFF]'}`}
          >
            BLOG
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`hover:text-primaryColor flex items-center gap-1 rounded-2xl px-3 py-2 text-xs transition hover:bg-[#F0FAFF] ${path === '/contact' && 'text-primaryColor bg-[#F0FAFF]'}`}
          >
            CONTACT
          </Link>
        </li>
      </ul>
      {/* toggle menu */}
      <IoMenuOutline
        className="hover:text-primaryColor cursor-pointer text-2xl text-black transition lg:hidden"
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && (
        <ul className="absolute top-[calc(100%-2px)] left-0 z-10 container flex w-full flex-col gap-1 rounded-2xl bg-white p-2 drop-shadow-xl">
          {navItems.map((navItem, index) => (
            <li key={index} onClick={() => setShowMenu(false)}>
              <Link
                to={navItem.href}
                className={`hover:text-primaryColor flex items-center gap-1 rounded-2xl px-3 py-2 text-xs transition hover:bg-[#F0FAFF] ${path === navItem.href && 'text-primaryColor bg-[#F0FAFF]'}`}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BottomHeader;
