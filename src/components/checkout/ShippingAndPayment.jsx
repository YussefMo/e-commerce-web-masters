import { useState } from "react";
import paymentImage from "./../../assets/images/payment.png";

const ShippingAndPayment = () => {
  const [selected, setSelected] = useState("standard");

  const shippingOptions = {
    standard: { label: "Standard", cost: "Free" },
    express: { label: "Express", cost: "$6.99" },
  };

  return (
    <div className="space-y-8">
      {/* Shipping Method */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Shipping method</h2>
        <div className="relative">
          <div className="w-full bg-[#F0F5FF] border border-[#1773B0] rounded px-4 py-3 text-sm text-gray-700">
            <div className="flex justify-between items-center">
              <span className=" font-bold">{shippingOptions[selected].label}</span>
              <span className=" font-bold">{shippingOptions[selected].cost}</span>
            </div>
          </div>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          >
            <option value="standard">Standard</option>
            <option value="express">Express</option>
          </select>
        </div>
      </div>

      {/* Payment */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Payment</h2>
        <p className="text-sm text-gray-500">
          All transactions are secure and encrypted.
        </p>

        <div className="w-full h-32 border border-gray-200 rounded bg-gray-50 flex flex-col items-center justify-center text-center px-4">
          <img
            src={paymentImage}
            alt="Payment not available"
            className="h-8 object-contain mb-2"
          />
          <p className="text-sm text-gray-500">
            This store can’t accept payments right now.
          </p>
        </div>

        <button
          disabled
          className="w-full py-3 bg-[#80808045] text-white rounded text-sm font-semibold cursor-not-allowed"
        >
          Pay Now
        </button>

        <hr className="border-t border-gray-200" />

        <p className="text-sm text-gray-500 text-center">
          By continuing, you agree to our{" "}
          <a href="/privacy-policy" className="underline hover:text-[#1773B0]">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ShippingAndPayment;
