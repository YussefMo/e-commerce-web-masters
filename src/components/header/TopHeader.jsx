import { Link } from 'react-router-dom';
import {secureHandImg, arrowDownImg} from './../../assets/index';
function TopHeader() {
  return (
    <div className="flex flex-col lg:flex-row gap-1 justify-between lg:gap-4 py-2.5 border-b border-b-[#E3E4E6]">
      <ul className="flex items-center justify-center gap-4">
        <li>
          <Link to="about" className="text-xs text-blackColor hover:text-primaryColor transition">About Us</Link>
        </li>
        <li>
          <a href="#" className="text-xs text-blackColor hover:text-primaryColor transition">Compare</a>
        </li>
        <li>
          <a href="#" className="text-xs text-blackColor hover:text-primaryColor transition">Wishlist</a>
        </li>
      </ul>
      <div className='flex flex-wrap gap-3 text-xs'>
        <div className='flex items-center gap-2 text-blackColor'>
          <img src={secureHandImg} alt="hand-img" width={20} height={20} />
          <p>100% Secure delivery without contacting the courier</p>
        </div>
        <div className='flex items-center gap-2 text-blackColor border-l border-l-[#EDEEF5] pl-3'>
          <span>Need help? Call Us: </span>
          <span className='text-primaryColor'>+ 0020 500</span>
        </div>
        <div className='flex items-center gap-2 border-l border-l-[#EDEEF5] pl-3 text-xs text-blackColor'>
          <div className='flex items-center gap-1'>
            <span>English</span>
            <img src={arrowDownImg} alt="arrow-img" />
          </div>
          <div className='flex items-center gap-1'>
            <span>USD</span>
            <img src={arrowDownImg} alt="arrow-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader