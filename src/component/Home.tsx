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
      <div className="flex min-h-[80vh] flex-col items-center justify-center bg-bgPrimary px-4 py-12 sm:px-6 lg:px-8">
        <img
          src="assets/icons/homeleftbg.svg"
          alt="Small Image 2"
          className="absolute  right-0 w-[30rem] h-[30rem] top-16 left-0 "
        />
        <img
          src="assets/icons/homerightbg.svg"
          alt="Small Image 2"
          className="absolute  w-[30rem] h-[30rem]  right-0 top-16"
        />
        <img
          src="assets/icons/homeringleft.svg"
          alt="Small Image 2"
          className="absolute  w-[20rem] h-[10rem]  left-0 bottom-10"
        />
        <img
          src="assets/icons/homebgbox.svg"
          alt="Small Image 2"
          className="absolute    right-80 bottom-24 "
        />
        <img
          src="assets/icons/homebgbox1.svg"
          alt="Small Image 2"
          className="absolute  top-48   left-80 "
        />
        <img
          src="assets/icons/homeringright.svg"
          alt="Small Image 2"
          className="absolute  w-[20rem] h-[10rem]  right-0 bottom-10"
        />
        <div className="mx-auto max-w-md text-center">
          <div className="relative">
            <button className="text-white rounded-xl border py-2 px-8 relative z-10">
              hello
            </button>
            <div className="absolute -top-3 right-40 w-4 h-4">
              <img src="assets/images/hello.svg" alt="" />
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            I'm <span className="text-cyan-500">Ashwin Arora,</span> Full Stack
            Developer
          </h1>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-blue-400 text-white px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="mt-8 flex items-center space-x-4 text-white bg-black border border-[#131229] p-3 rounded-md">
          {items.map((item, index) => (
            <div
              key={index}
              className={`text-muted-foreground flex justify-center items-center gap-3 pr-4 ${
                index !== items.length - 1
                  ? "border-r h-12 border-blue-400"
                  : ""
              }`}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
