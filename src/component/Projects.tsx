import { SiSocketdotio } from "react-icons/si";
import { SiEthers } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { DiBootstrap } from "react-icons/di";
import { LuBoxes } from "react-icons/lu";
import { BsBox } from "react-icons/bs";
import { IoMdPlayCircle } from "react-icons/io";
const projects = [
  {
    title: "Ethereum TicTacToe",
    link: "view video",
    description:
      "A real-time multiplayer TicTacToe game where two players bet in ETH and the winner takes all. A state channel is created between the two players to enable Off-Chain exchange of messages. These messages are signed by the player's private key.",
    image: "assets/images/project1.svg",
    tools: [
      { name: "Socket.io", icon: <SiSocketdotio />, Img: null },
      { name: "Ethers.js", icon: <SiEthers />, Img: null },
      { name: "Node", icon: <LuBoxes />, Img: null },
      { name: "Express", icon: null, Img: "assets/icons/express.svg" },
      { name: "Figma", icon: <IoLogoFigma />, Img: null },
      { name: "Bootstrap", icon: <DiBootstrap />, Img: null },
      { name: "Solidity", icon: <BsBox />, Img: null },
    ],
    features: [
      "Multiplayer",
      "Real Time",
      "Instant Payouts",
      "State Channel",
      "Off-Chain Gameplay",
    ],
  },
  {
    title: "Social Network",
    link: "view video",
    description:
      "A full-fledged social networking platform. Allowing users to follow, post images, comment, like etc. A complete implementation of MERN stack with JWT authentication.A full-fledged social networking platform.",
    image: "assets/images/project2.svg",
    tools: [
      { name: "Socket.io", icon: <SiSocketdotio />, Img: null },
      { name: "Ethers.js", icon: <SiEthers />, Img: null },
      { name: "Node", icon: <LuBoxes />, Img: null },
      { name: "Express", icon: null, Img: "assets/icons/express.svg" },
      { name: "Figma", icon: <IoLogoFigma />, Img: null },
      { name: "Bootstrap", icon: <DiBootstrap />, Img: null },
      { name: "Solidity", icon: <BsBox />, Img: null },
    ],
    features: [
      "Follow/Unfollow",
      "Make New Post",
      "Like & Comment",
      "Password Reset",
      "Image Upload",
      "Search",
    ],
  },
  {
    title: "Ethereum Housie",
    link: "view video",
    description:
      "A real-time multiplayer game inspired by Bingo. There is no limit to the number of players per game. Each player pays in ETH to purchase a ticket and then select 15 numbers(1-90). The server broadcasts random numbers one by one to the players.",
    image: "assets/images/project3.svg",
    tools: [
      { name: "Socket.io", icon: <SiSocketdotio />, Img: null },
      { name: "Ethers.js", icon: <SiEthers />, Img: null },
      { name: "Node", icon: <LuBoxes />, Img: null },
      { name: "Express", icon: null, Img: "assets/icons/express.svg" },
      { name: "Figma", icon: <IoLogoFigma />, Img: null },
      { name: "Bootstrap", icon: <DiBootstrap />, Img: null },
      { name: "Solidity", icon: <BsBox />, Img: null },
    ],
    features: [
      "Multiplayer",
      "Real Time",
      "Synchronized Gameplay",
      "Instant Payouts",
      "No Player Limit",
      "Monitor Game",
    ],
  },
];

export default function ProjectShowcase() {
  return (
    <div className="min-h-screen relative projectmainbg text-gray-100 py-12 ">
      <div className="container mx-auto px-4 ">
        <img
          src="assets/images/projectleftbg.svg"
          alt="Small Image 2"
          className="absolute   right-12 w-72  "
          loading="lazy"
        />
        <img
          src="assets/images/projectbottombg.svg"
          alt="Small Image 2"
          loading="lazy"
          className="absolute right-40  bottom-28  "
        />
        <div className=" font-bold mb-12 text-center">
          <div>
            <h1 className="text-4xl ">
              Our <span className="text-spantext"> Projects </span>
            </h1>
            <h3 className="text-gray-700 mt-4  md:mx-80">
              A real-time multiplayer TicTacToe game where two players can bet
              ETH and the winner take all. A state channel is created between
              the two players to enable 'Off-Chain'.
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:mx-56 shadow-lg ">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "flex flex-col md:col-span-2 lg:col-span-2 md:flex-row" // Adjust span for large screens
                  : "col-span-1 gap-8"
              } projectbg border border-gray-700 rounded-lg overflow-hidden`}
            >
              <div
                className={`${
                  index === 0
                    ? "flex flex-col md:flex-row w-full"
                    : "flex flex-col"
                }`}
              >
                {/* First half of the first component */}
                <div
                  className={`${
                    index === 0
                      ? "flex-1 bg-[#243c41a1] pt-6 mx-4 rounded-md"
                      : "pt-6 mt-2 mx-4 bg-[#243c41a1] rounded-md"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover "
                    loading="lazy"
                  />
                </div>

                {/* Second half of the first component */}
                <div
                  className={`${
                    index === 0
                      ? "flex-1 p-4 flex flex-col"
                      : "p-4 flex flex-col"
                  }`}
                >
                  <div className=" sm:text-sm md:text-2xl font-semibold flex justify-between mx-4 mt-3">
                    <h1>{project.title}</h1>
                    <button className="flex justify-center items-center gap-1">
                      <p className="text-spantext">{project?.link}</p>
                      <i className="text-spantext text-lg mt-1">
                        <IoMdPlayCircle />
                      </i>
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2 text-gray-300">
                        Tools Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool: any, i: any) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full bg-gray-700 text-blue-300 flex items-center gap-1"
                          >
                            {tool.icon && (
                              <span className="text-xl bg-[#2f393d] p-1 rounded-full">
                                {tool.icon}
                              </span>
                            )}
                            {tool.Img && (
                              <img className="w-6 h-6" src={tool.Img} alt="" />
                            )}
                            {tool.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-300">
                        Features
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full border border-blue-400 text-blue-400"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600">
                      Live Demo
                    </button>
                    <button className="px-4 py-2 border border-blue-400 text-blue-400 rounded font-semibold hover:bg-blue-400 hover:text-gray-900">
                      View Source
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
