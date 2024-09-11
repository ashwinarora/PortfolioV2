import { SiCircle } from "react-icons/si";
import { RiDiscordLine } from "react-icons/ri";
import { FaBrave } from "react-icons/fa6";
const Home = () => {
  const items = [
    { icon: <FaBrave />, label: "Brave" },
    { icon: <SiCircle />, label: "CIRCLE" },
    { icon: <RiDiscordLine />, label: "Discord" },
    { label: "Google" },
    { label: "Discord" },
    { icon: <SiCircle />, label: "MAGIC EDEN" },
  ];

  return (
    <div>
      <div className="flex min-h-[70vh] sm:min-h-[80vh] flex-col items-center justify-center bg-bgPrimary px-4 py-12 sm:px-6 lg:px-8">
        <img
          src="assets/icons/homeleftbg.svg"
          alt="Small Image 2"
          className="absolute  right-0  w-56 h-56  sm:w-80 sm:h-80 lg:w-[30rem] lg:h-[30rem] top-20 left-0 "
        />
        <img
          src="assets/icons/homerightbg.svg"
          alt="Small Image 2"
          className="absolute  w-56 h-56 sm:w-80 sm:h-80 lg:w-[30rem] lg:h-[30rem]  right-0 top-20"
        />
        <img
          src="assets/icons/homeringleft.svg"
          alt="Small Image 2"
          className="absolute  w-36 h-36 sm:w-[20rem] sm:h-[10rem]  left-0 bottom-40 sm:bottom-10"
        />
        <img
          src="assets/icons/homebgbox.svg"
          alt="Small Image 2"
          className="absolute w-[6rem]  right-10  sm:right-80 bottom-80 sm:bottom-24 "
        />
        <img
          src="assets/icons/homebgbox1.svg"
          alt="Small Image 2"
          className="absolute  top-48  w-[6rem]  left-16 sm:left-96  "
        />
        <img
          src="assets/icons/homeringright.svg"
          alt="Small Image 2"
          className="absolute   w-36 h-36 sm:w-[20rem] sm:h-[10rem] right-0 bottom-40 sm:bottom-10"
        />
        <div className="mx-auto flex flex-col justify-center items-center gap-4 text-center ">
          <div className="relative">
            <div className=" card  example-2">
              <button className="text-white  rounded-full border py-0 px-8 inner relative z-10 border-gray-800 ">
                Hello
              </button>
            </div>
            <div className="absolute -top-3 -right-3 sm:-top-2 sm:-right-3 w-4 h-4">
              <img src="assets/images/hello.svg" alt="" />
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            I'm <span className="text-cyan-500">Ashwin Arora,</span> <br /> Full
            Stack Application
          </h1>
          <div className="mt-6 rounded-full">
            <button className="inline-flex items-center bg-[#37b0e0] text-white px-4 py-2 text-sm font-medium   transition-colors  ffocus:ring-offset-2 hover:shadow-2xl hover:border rounded-full cursor-pointer">
              Hire Me
            </button>
          </div>
        </div>

        {/* <div className="mt-8 flex flex-wrap justify-center space-x-4 text-white bg-black border border-[#131229] p-3 rounded-md">
          {items.map((item, index) => (
            <div
              key={index}
              className={`text-muted-foreground flex items-center gap-3 px-3 py-2 ${
                index !== items.length - 1 ? "border-r border-blue-400" : ""
              }`}
            >
              {item.icon && <span className="text-lg">{item.icon}</span>}
              <span>{item.label}</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Home;
