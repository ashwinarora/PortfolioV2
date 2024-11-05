import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-lightmode p-4 dark:bg-black">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 rounded-lg border border-gray-300 p-8 dark:border-black dark:bg-bgcontact md:grid-cols-2">
        <div className="space-y-6 rounded-lg bg-white p-6 px-1 shadow-md backdrop-blur-md dark:bg-[#0c171c] dark:shadow-2xl sm:px-6">
          <h2 className="px-1 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Get In Touch <span className="text-[#00bfff]">With Me</span>
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
            <div className="flex justify-between space-x-2 font-semibold">
              <button className="w-full flex flex-row-reverse justify-center items-center gap-x-4 rounded-full bg-[#00bfff] py-3 text-white hover:bg-[#008acb] sm:text-sm md:text-base">
                <div className="">Send Message</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>
              </button>
              <button className="flex w-full flex-row-reverse items-center justify-center gap-x-2 rounded-full border border-[#00bfff] px-0 py-3 text-[#00bfff] hover:bg-[#4da8e0] hover:text-white sm:px-4 sm:text-sm md:text-base">
                <div className=" ">Schedule a Meeting</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72h-2.69a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
