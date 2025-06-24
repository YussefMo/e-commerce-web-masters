import {logoImg} from './../../assets/index';
import { FaSearch } from 'react-icons/fa';
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

function MiddleHeader() {
  return (
    <div className='flex flex-wrap gap-4 py-2.5 max-[591px]:justify-between'>
      <img src={logoImg} alt="logo" width={120} />
      {/* search box */}
      <div className='bg-[#F3F4F7] flex items-center gap-1 flex-1 px-3 rounded-md max-[591px]:order-3 py-3'>
        <input type="text" placeholder='Search for Products, fruit, meat, eggs .etc...' className='border-0 outline-0 placeholder:text-xs flex-1' />
        <FaSearch />
      </div>
      {/* account + cart */}
      <div className='flex items-center gap-2 max-[591px]:order-2'>
        <div className='flex items-center justify-center w-10 h-10 border border-[#E2E4EC] rounded-full'>
          <AiOutlineUser className='text-blackColor text-lg' />
        </div>
        <span className='text-xs text-blackColor font-semibold'>$0.00</span>
        <div className='flex items-center justify-center w-10 h-10 bg-[#FFF1EE] rounded-full relative after:absolute after:-top-1 after:-right-1
          after:content-["0"] after:text-white after:text-xs after:w-4 after:h-4 after:bg-[#EA2B0F] after:flex after:items-center after:justify-center after:rounded-full'>
          <IoBagOutline className='text-[#EA2B0F]' />
        </div>
      </div>
    </div>
  )
}

export default MiddleHeader