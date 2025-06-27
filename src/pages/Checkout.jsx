import ContactForm from '../components/checkout/ContactForm';
import DeliveryForm from '../components/checkout/DeliveryForm';
import ShippingAndPayment from '../components/checkout/ShippingAndPayment';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto flex flex-col gap-8 px-4 py-10 lg:flex-row">
      {/* Left Section */}
      <div className="flex-1 space-y-10">
        <ContactForm />
        <DeliveryForm />
        <ShippingAndPayment />
      </div>

      {/* Divider */}
      <div className="hidden w-px bg-gray-300 lg:block" />
      <div className="block h-px bg-gray-300 lg:hidden" />

      {/* Right Section - Order Summary */}
      <div className="w-full space-y-6 lg:w-[350px]">
        

        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            {/* Image with bordered box */}
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded border border-gray-300 p-2">
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="h-full w-full rounded object-cover"
                />
              </div>
              <span className="absolute -top-1 -right-1 rounded-full bg-[#666666] px-1.5 py-0.5 text-[10px] text-white">
                {item.quantity}
              </span>
            </div>

            {/* Title and price */}
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium">{item.title}</p>
            </div>

            <div className="text-sm font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}

        {/* Subtotal */}
        <div className="flex justify-between pt-2 text-sm">
          <span>Subtotal : {cartItems.length} items</span>
          <span className="font-medium">${total.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span className="font-medium text-green-600">FREE</span>
        </div>

        <div>
          {/* Total */}
          <div className="flex justify-between border-t pt-4 text-base font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {/* Tax note */}
          <p className="text-xs text-gray-500">Including $2.40 in taxes</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
