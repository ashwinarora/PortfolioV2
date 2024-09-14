import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg:white dark:bg-black  flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-gray-700 dark:border-[#242424]  dark:bg-bgcontact p-8 rounded-lg">
        <div className="space-y-6 bg-white  dark:bg-[#0c171c]  backdrop-blur-md p-6 px-1 sm:px-6 rounded-lg shadow-md dark:shadow-2xl">
          <h2 className=" text-2xl sm:text-3xl font-bold text-black dark:text-white">
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
              <p className=" text-black dark:text-white">+91 12345 67890</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-[#00bfff] rounded-full">
                <FaEnvelope className="text-white w-6 h-6" />
              </div>
              <p className=" text-black dark:text-white">
                ashwinarora@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-[#00bfff] rounded-full">
                <FaMapMarkerAlt className="text-white w-6 h-6" />
              </div>
              <p className=" text-black dark:text-white">
                Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar,
                Bangalore-560016
              </p>
              <img
                src="assets/icons/contactbg.svg"
                alt="Small Image 2"
                className="absolute bottom-0 right-0 w-28 h-40 -z-30 mix-blend-difference dark:invert-0"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Contact Us
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block  text-black dark:text-white"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-2 dark:bg-[#091419] border border-[#30363d] text-white rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block  text-black dark:text-white"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-2 dark:bg-[#091419] border border-[#30363d]  text-black dark:text-white rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block  text-black dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                className="w-full p-2 dark:bg-[#091419] border border-[#30363d] text-white rounded-md min-h-[100px]"
              />
            </div>
            <div className="flex justify-between">
              <button className="px-8 sm:px-24 text-xs sm:text-sm md:px-12 py-2 bg-[#00bfff] text-white rounded-full">
                Live Demo
              </button>
              <button className=" px-6 sm:px-20 py-2 md:px-8 text-xs sm:text-sm   border border-[#00bfff] text-[#00bfff] rounded-full">
                Schedule a Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
