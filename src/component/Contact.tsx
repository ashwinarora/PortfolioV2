import {
  FaEnvelope,
  FaRegCopy,
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { contactEmail, github, linkedIn, telegram } from "./constants";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-lightmode p-4 dark:bg-black">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 rounded-lg border border-gray-300 p-8 dark:border-black dark:bg-bgcontact md:grid-cols-2">
        <div className="space-y-6 rounded-lg bg-white p-6 px-1 shadow-md backdrop-blur-md dark:bg-[#0c171c] dark:shadow-2xl sm:px-6">
          <h2 className="px-1 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Get In Touch <span className="text-[#00bfff]">With Me</span>
          </h2>
          <p className="px-1 text-gray-400">
            Whether you want to discuss a project idea or need a developer to
            bring your vision to life, I'm just a message away.
            <span className="font-bold italic">
              {" "}
              I guarantee a response within 24 hours
            </span>
            —let's make something incredible happen.
          </p>
          <div className="space-y-4 px-2 text-lg">
            <div className="flex items-center gap-x-4">
              <div className="rounded-full bg-[#00bfff] p-2">
                <FaEnvelope className="h-6 w-6 text-white" />
              </div>
              <p className="flex items-center justify-start gap-x-3 text-black dark:text-white">
                <a href={"mailto:" + contactEmail} className="hover:underline">
                  {contactEmail}
                </a>
                <FaRegCopy
                  className="cursor-pointer hover:scale-125 active:scale-90"
                  onClick={() => {
                    navigator.clipboard.writeText(contactEmail);
                  }}
                />
              </p>
            </div>
            <div className="mr-4 flex flex-wrap items-center justify-between gap-x-8">
              <div className="flex items-center gap-x-4">
                <div className="rounded-full p-2 hover:scale-125">
                  <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-6 w-6 dark:text-white" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="rounded-full p-2 hover:scale-125">
                  <a href={telegram} target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane className="h-6 w-6 dark:text-white" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="rounded-full p-2 hover:scale-125">
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-6 w-6 dark:text-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center my-96 justify-between">
              <hr className="w-4/12 border-gray-200 dark:border-gray-700" />
              <div className="w-4/12 text-center text-sm text-neutral-300">
                Or simply
              </div>
              <hr className="w-4/12 border-gray-200 dark:border-gray-700" />
            </div>
            <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-full border dark:border-slate-800 p-[2.3px]">
              <div className="absolute inset-0 h-full w-full animate-rotate rounded-full bg-[conic-gradient(#00bfff_30deg,transparent_360deg)]"></div>
              <div className="relative z-20 flex w-full rounded-full bg-white dark:bg-[#0c171c]">
                <a className="flex w-full flex-row-reverse items-center justify-center gap-x-2 rounded-full px-0 py-3 text-[#00bfff] hover:bg-[#4da8e0] hover:text-white sm:px-4 sm:text-sm md:text-base">
                  <div>Schedule a Meeting</div>
                  <BsFillTelephoneOutboundFill className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Contact
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
              <button className="flex w-full flex-row-reverse items-center justify-center gap-x-4 rounded-full bg-[#00bfff] py-3 text-white hover:bg-[#008acb] sm:text-sm md:text-base">
                <div className="">Send Message</div>
                <IoIosSend className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
