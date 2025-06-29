import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react';
import { FaSearch } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { logoImg } from './../../assets/index';

function MiddleHeader() {
  const navigate = useNavigate();
  const { distinctItemCount, totalPrice } = useCart();
  const navigateToCart = () => {
    navigate('/cart');
  };
  return (
    <div className="flex flex-wrap gap-4 py-2.5 max-[591px]:justify-between">
      <img src={logoImg} alt="logo" width={120} />
      {/* search box */}
      <div className="flex flex-1 items-center gap-1 rounded-md bg-[#F3F4F7] px-3 py-3 max-[591px]:order-3">
        <input
          type="text"
          placeholder="Search for Products, fruit, meat, eggs .etc..."
          className="flex-1 border-0 outline-0 placeholder:text-xs"
        />
        <FaSearch />
      </div>
      {/* account + cart */}
      <div className="flex items-center gap-2 max-[591px]:order-2">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <span className="text-blackColor text-xs font-semibold">
          ${totalPrice.toFixed(2)}
        </span>
        <div
          onClick={navigateToCart}
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FFF1EE]"
        >
          <IoBagOutline className="text-[#EA2B0F]" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#EA2B0F] text-[10px] text-white">
            {distinctItemCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MiddleHeader;
