import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-lightmode p-4 dark:bg-black">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 rounded-lg border border-gray-300 p-8 dark:border-black dark:bg-bgcontact md:grid-cols-2">
        <div className="space-y-6 rounded-lg bg-white p-6 px-1 shadow-md backdrop-blur-md dark:bg-[#0c171c] dark:shadow-2xl sm:px-6">
          <h2 className="px-1 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Get In Touch <span className="text-[#00bfff]">With Us</span>
          </h2>
          <p className="px-2 text-gray-400">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using.
          </p>
          <div className="space-y-4 px-2">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-[#00bfff] p-2">
                <FaPhone className="h-6 w-6 text-white" />
              </div>
              <p className="text-black dark:text-white">+91 12345 67890</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-[#00bfff] p-2">
                <FaEnvelope className="h-6 w-6 text-white" />
              </div>
              <p className="text-black dark:text-white">
                ashwinarora@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-[#00bfff] p-2">
                <FaMapMarkerAlt className="h-6 w-6 text-white" />
              </div>
              <p className="text-black dark:text-white">
                Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar,
                Bangalore-560016
              </p>
              <img
                src="assets/icons/contactbg.svg"
                alt="Small Image 2"
                className="absolute bottom-0 right-0 -z-30 h-40 w-28 mix-blend-difference dark:mix-blend-normal"
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
                className="block text-black dark:text-white"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Your Name"
                className="w-full rounded-md border border-gray-300 p-2 text-white dark:border-[#162025] dark:bg-[#091419]"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-black dark:text-white"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-md border border-gray-300 p-2 text-black dark:border-[#162025] dark:bg-[#091419] dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-black dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                className="min-h-[100px] w-full rounded-md border border-gray-300 p-2 text-white dark:border-[#162025] dark:bg-[#091419]"
              />
            </div>
            <div className="flex justify-between">
              <button className="rounded-full bg-[#00bfff] px-8 py-2 text-xs text-white sm:px-24 sm:text-sm md:px-12">
                Live Demo
              </button>
              <button className="rounded-full border border-[#00bfff] px-6 py-2 text-xs text-[#00bfff] sm:px-20 sm:text-sm md:px-8">
                Schedule a Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
