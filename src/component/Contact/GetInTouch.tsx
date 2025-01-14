import {
  FaEnvelope,
  FaRegCopy,
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { contactEmail, github, linkedIn, telegram, twitter } from "../constants";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { href: linkedIn, icon: FaLinkedin  },
  { href: twitter, icon: FaXTwitter  },
  { href: github, icon: FaGithub  },
  { href: telegram, icon: FaTelegramPlane },
];

const GetInTouch = () => {
  return (
    <div className="space-y-6 rounded-lg bg-white p-6 px-1 shadow-md backdrop-blur-md dark:bg-[#0c171c] dark:shadow-2xl sm:px-6">
      <h2 className="px-1 text-2xl font-bold text-black dark:text-white sm:text-3xl">
        Get In Touch <span className="text-[#00bfff]">With Me</span>
      </h2>
      <p className="px-1 text-gray-400">
        Whether you want to discuss a project idea or need a developer to bring
        your vision to life, I'm just a message away.
        <span className="font-bold italic">
          {" "}
          I guarantee a response within 24 hours
        </span>
        —let's make something incredible happen.
      </p>
      <div className="flex flex-col px-2 text-lg">
        <div className="-mt-2 mb-2 flex items-center gap-x-4">
          <div className="hidden rounded-full bg-[#00bfff] p-2 sm:block">
            <FaEnvelope className="h-6 w-6 text-white" />
          </div>
          <p className="flex items-center justify-start gap-x-3 overflow-visible text-black dark:text-white ">
            <a href={"mailto:" + contactEmail} className="hover:underline">
              {contactEmail}
            </a>
            <FaRegCopy
              className="hidden cursor-pointer hover:scale-125 active:scale-90 sm:block"
              onClick={() => {
                navigator.clipboard.writeText(contactEmail);
              }}
            />
          </p>
        </div>
        <div className="mr-4 flex flex-wrap items-center justify-between">
          {socialLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-x-4">
              <div className="rounded-full p-2 hover:scale-125">
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon  className="h-6 w-6 dark:text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="my-8 flex flex-row items-center justify-between">
          <hr className="w-4/12 border-gray-200 dark:border-gray-700" />
          <div className="w-4/12 text-center text-sm text-neutral-300">
            Or simply
          </div>
          <hr className="w-4/12 border-gray-200 dark:border-gray-700" />
        </div>
        <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-full border p-[2.3px] dark:border-slate-800">
          <div className="absolute inset-0 h-full w-full animate-rotate rounded-full bg-[conic-gradient(#00bfff_30deg,transparent_360deg)]"></div>
          <div className="relative z-20 flex w-full rounded-full bg-white dark:bg-[#0c171c]">
            <a
              href="https://calendly.com/ashwinarora/one-on-one"
              target="_blank"
              className="flex w-full flex-row-reverse items-center justify-center gap-x-2 rounded-full px-0 py-3 text-[#00bfff] hover:bg-[#4da8e0] hover:text-white sm:px-4 sm:text-sm md:text-base"
            >
              <div>Schedule a Meeting</div>
              <BsFillTelephoneOutboundFill className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
