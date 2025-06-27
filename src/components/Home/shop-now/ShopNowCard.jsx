import { Link } from 'react-router-dom';

const ShopNowCard = ({
  imageUrl,
  discountText,
  title,
  subtitle,
  buttonColor
}) => {
  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg shadow-lg"
      style={{
        backgroundColor: buttonColor === 'red' ? '#FEE8E9' : '#E0F2F7',
        height: '252px'
      }}
    >
      <img
        src={imageUrl}
        alt="Banner"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="relative z-10 flex h-8/10 w-full flex-col justify-between p-6 text-left">
        <p className="mb-1 text-sm font-bold text-red-500">{discountText}</p>
        <h3 className="mb-2 text-2xl leading-tight font-bold text-gray-800">
          {title}
        </h3>
        <p className="mb-4 text-sm text-gray-600">{subtitle}</p>
        <Link
          to="/shop"
          className="w-fit transform rounded-full px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:scale-105"
          style={{
            backgroundColor: buttonColor === 'red' ? '#FF4081' : '#3F51B5'
          }}
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default ShopNowCard;
