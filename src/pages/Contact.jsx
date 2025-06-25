import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCall } from "react-icons/pi";
import { LuMail } from "react-icons/lu";

export default function Contact() {
  return (
    <>
    {/* first section */}
    <div className="text-black text-5xl text-center h-auto p-20">
        <h2 className="mb-4 ">Get In Touch</h2>
        <p className="text-sm  mx-auto mb-2 ">
            Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. elit. Impedit, ex.
            Fugiat ab eius rem culpa.</p>
        <p className="text-sm mx-auto">Lorem ipsum dolor, sit amet consectetur Consequuntur, itaque repudiandae. Quam porro cumque error.</p>
    </div>


        {/* secound section */}
    <div className="flex flex-col md:flex-row gap-4 justify-center mb-5 px-4">

  {/* first div */}
  <div className="bg-stone-100 w-full md:w-1/4 h-40 text-center">
    <div className="content mt-5">
      <FaLocationDot className="text-primaryColor mx-auto mt-3 mb-4" size={30} />
      <p className="text-sm mb-3">102 Street 2714 Donovan</p>
      <p className="text-sm font-light">Lorem ipsum dolar site amet discont</p>
    </div>
  </div>

  {/* second div */}
  <div className="bg-stone-100 w-full md:w-1/4 h-40 text-center">
    <div className="content mb-3">
      <PiPhoneCall className="text-primaryColor mx-auto mt-3 mb-5" size={30} />
      <p className="text-sm mb-4">+02 1234 567 88</p>
      <p className="text-sm font-light">Lorem ipsum dolar site amet discont</p>
    </div>
  </div>

  {/* third div */}
  <div className="bg-stone-100 w-full md:w-1/4 h-40 text-center">
    <LuMail className="text-primaryColor mx-auto mt-4" size={30} />
    <p className="text-sm mb-4 mt-4">info@example.com</p>
    <p className="text-sm font-light">Lorem ipsum dolar site amet discont</p>
  </div>

</div>


    {/* third section */}
    <div className="border-none h-auto mb-40 mt-20 w-3/4 mx-auto bg-stone-50 shadow-md p-6">  

    <div className="content-1 text-center">
        <h2 className="font-bold text-5xl mt-20 mb-5">Send Us</h2>
        <p>Contact us for all your questions and opinions,
        or you can solve your problems in a shorter time with our contact <br /> offices.</p>
    </div>
    
    <hr className="w-3/4 mt-6 text-indigo-100 mx-auto " />

        <form className="w-full mt-6 space-y-6">

  {/* Name and Email */}
  <div className="flex flex-col md:flex-row md:justify-between gap-4">
    <div className="flex-1">
      <label htmlFor="name" className="block mb-1">Name</label>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none"
      />
    </div>

    <div className="flex-1">
      <label htmlFor="email" className="block mb-1">Email</label>
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none"
      />
    </div>
  </div>

  {/* Phone Number */}
  <div>
    <label htmlFor="phone" className="block mb-1">Phone Number</label>
    <input
      type="text"
      placeholder="Your Phone Number"
      className="w-full p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none"
    />
  </div>

  {/* Message */}
  <div>
    <label htmlFor="message" className="block mb-1">Your Message</label>
    <textarea
      placeholder="Your Message"
      className="w-full h-40 p-3 bg-gray-100 rounded border border-gray-300 focus:outline-none resize-none"
    ></textarea>
  </div>

  {/* Button */}
  <div className="text-right">
    <button
      type="submit"
      className="bg-primaryColor text-white px-6 py-3 rounded cursor-pointer hover:bg-opacity-90 transition"
    >
      Send Message
    </button>
  </div>
</form>

    

    </div>
    </>
    
  )
}
