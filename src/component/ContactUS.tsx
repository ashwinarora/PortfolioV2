import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-bgPrimary flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-bgcontact p-8 rounded-lg">
        {/* Left Section: Contact Information */}
        <div className="space-y-6 bg-[#0d181d] backdrop-blur-md p-6 px-1 sm:px-6 rounded-lg">
          <h2 className=" text-2xl sm:text-3xl font-bold text-white">
            Get In Touch <span className="text-[#00bfff]">With Us</span>
          </h2>
          <p className="text-gray-400">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-[#00bfff] rounded-full">
                <FaPhone className="text-white w-6 h-6" />
              </div>
              <p className="text-white">+91 12345 67890</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-[#00bfff] rounded-full">
                <FaEnvelope className="text-white w-6 h-6" />
              </div>
              <p className="text-white">ashwinarora@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-[#00bfff] rounded-full">
                <FaMapMarkerAlt className="text-white w-6 h-6" />
              </div>
              <p className="text-white">
                Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar,
                Bangalore-560016
              </p>
              <img
                src="assets/icons/contactbg.svg"
                alt="Small Image 2"
                className="absolute bottom-0 right-0 w-28 h-40 -z-30"
              />
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-white">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-2 bg-[#0d1117] border border-[#30363d] text-white rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-2 bg-[#0d1117] border border-[#30363d] text-white rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-white">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                className="w-full p-2 bg-[#0d1117] border border-[#30363d] text-white rounded-md min-h-[100px]"
              />
            </div>
            <div className="flex justify-between">
              <button className=" px-3 text-xs sm:text-sm md:px-12 py-2 bg-[#00bfff] text-white rounded-full">
                Live Demo
              </button>
              <button className="px-2 py-2 text-xs sm:text-sm   border border-[#00bfff] text-[#00bfff] rounded-full">
                Schedule a Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
