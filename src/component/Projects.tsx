import { IoMdPlayCircle } from "react-icons/io";
import { useRef, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { MdFormatStrikethrough } from "react-icons/md";
import { DiMaterializecss } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiJsonwebtokens } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import ReactPlayer from "react-player";
import { DiNodejsSmall } from "react-icons/di";
import { ImTree } from "react-icons/im";
import { SiAxios } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const projects = [
  {
    title: "Ethereum TicTacToe",
    link: "view video",
    description:
      "A real-time multiplayer TicTacToe game where two players bet in ETH and the winner takes all. A state channel is created between the two players to enable Off-Chain exchange of messages. These messages are signed by the player's private key.",
    images: [
      "assets/projects/et1.jpg",
      "assets/projects/et2.jpg",
      "assets/projects/et3.jpg",
      "assets/projects/et4.jpg",
      "assets/projects/et5.jpg",
    ],
    youtube: "https://www.youtube.com/embed/zccVz3-4Mho?start=",
    videoId: "UmSzmoAK5jM",
    timestamps: [
      {
        name: "Intro",
        timestamp: 0,
      },
      {
        name: "Initial Account Balance",
        timestamp: 5,
      },
      {
        name: "New Game Created",
        timestamp: 13,
      },
      {
        name: "Game Joined",
        timestamp: 26,
      },
      {
        name: "Game Play Started",
        timestamp: 44,
      },
      {
        name: "Game Ended",
        timestamp: 73,
      },
      {
        name: "Final Account Balance",
        timestamp: 79,
      },
    ],
    tools: [
      { name: "Socket.io", icon: null, Img: "assets/icons/socket.svg" },
      { name: "Ethers.js", icon: <FaEthereum />, Img: null },
      { name: "Node", icon: null, Img: "assets/icons/node.svg" },
      { name: "Express", icon: null, Img: "assets/icons/express.svg" },
      { name: "DOM", icon: <ImTree />, Img: null },
      { name: "Bootstrap", icon: null, Img: "assets/icons/bootstrap.svg" },
      { name: "Solidity", icon: <SiSolidity />, Img: null },
    ],
    features: [
      "Multiplayer",
      "Real Time",
      "Instant Payouts",
      "State Channel",
      "Off-Chain Gameplay",
    ],
    liveDemo: "https://www.ethtictactoe.com/",
    github: "https://github.com/ashwinarora/ethereum-tictactoe",
  },
  {
    title: "Social Network",
    link: "view video",
    description:
      "A full-fledged social networking platform. Allowing users to follow, post images, comment, like etc. A complete implementation of MERN stack with JWT authentication.A full-fledged social networking platform.",
    images: [
      "assets/projects/sn-01.jpg",
      "assets/projects/sn-02.jpg",
      "assets/projects/sn-03.jpg",
      "assets/projects/sn-04.jpg",
      "assets/projects/sn-05.jpg",
    ],
    youtube: "https://www.youtube.com/embed/zccVz3-4Mho?start=",
    videoId: "yrIb_unPfec",
    timestamps: [
      {
        name: "Sign Up/Sign In",
        timestamp: 0,
      },
      {
        name: "Sign In Success",
        timestamp: 18,
      },
      {
        name: "Follow/Unfollow",
        timestamp: 39,
      },
      {
        name: "Like and Comment",
        timestamp: 48,
      },
      {
        name: "New Post",
        timestamp: 56,
      },
      {
        name: "Update Profile Image",
        timestamp: 74,
      },
      {
        name: "Delete Post",
        timestamp: 81,
      },
      {
        name: "Password Reset",
        timestamp: 88,
      },
    ],
    tools: [
      { name: "React", icon: <FaReact />, Img: null },
      { name: "MongoDB", icon: <DiMongodb />, Img: null },
      {
        name: "JWT Authentication",
        icon: <SiJsonwebtokens />,
        Img: null,
      },
      { name: "Express", icon: null, Img: "assets/icons/express.svg" },
      { name: "Fetch Api", icon: <FiSettings />, Img: null },
      {
        name: "Nodemailer",
        icon: <DiNodejsSmall />,
        Img: null,
      },
      { name: "MaterializeCSS", icon: <DiMaterializecss />, Img: null },
      { name: "REST", icon: <FiSettings />, Img: null },
    ],
    features: [
      "Follow/Unfollow",
      "Make New Post",
      "Like & Comment",
      "Password Reset",
      "Image Upload",
      "Search",
    ],
    liveDemo: "https://socialnetwork-ashwin.herokuapp.com/",
    github: "https://github.com/ashwinarora/mern-social-network",
  },
  {
    title: "Ethereum Housie",
    link: "view video",
    description:
      "A real-time multiplayer game inspired by Bingo. There is no limit to the number of players per game. Each player pays in ETH to purchase a ticket and then select 15 numbers(1-90). The server broadcasts random numbers one by one to the players.",
    images: [
      "assets/projects/hr1.jpg",
      "assets/projects/hr2.jpg",
      "assets/projects/hr3.jpg",
      "assets/projects/hr4.jpg",
      "assets/projects/hr5.jpg",
    ],
    youtube: "https://www.youtube.com/embed/zccVz3-4Mho?start=",
    videoId: "aN0AKmAdPjs",
    timestamps: [
      {
        name: "Game Setup",
        timestamp: 0,
      },
      {
        name: "Ticket Setup",
        timestamp: 10,
      },
      {
        name: "Ticket Purchase",
        timestamp: 22,
      },
      {
        name: "Game Started",
        timestamp: 80,
      },
      {
        name: "Game Ended",
        timestamp: 136,
      },
    ],
    tools: [
      { name: "Socket.io", icon: null, Img: "assets/icons/socket.svg" },
      { name: "Web3.js", icon: null, Img: "assets/icons/ether.svg" },
      { name: "React", icon: <FaReact />, Img: null },
      { name: "Node", icon: null, Img: "assets/icons/node.svg" },
      { name: "Express", icon: null, Img: "assets/icons/express.svg" },
      { name: "Axios", icon: <SiAxios />, Img: null },
      {
        name: "Infura",
        icon: <MdFormatStrikethrough />,
        Img: null,
      },
      { name: "Solidity", icon: <SiSolidity />, Img: null },
    ],
    features: [
      "Multiplayer",
      "Real Time",
      "Synchronized Gameplay",
      "Instant Payouts",
      "No Player Limit",
      "Monitor Game",
    ],

    liveDemo: "https://www.eth-housie.com/",
    github: "https://github.com/ashwinarora/ethereum-housie",
  },
];

const VideoModal = ({ videoId, timestamps, onClose }: any) => {
  const [currentTime, setCurrentTime] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);

  const handleTimestampClick = (time: any) => {
    setCurrentTime(time);
    if (playerRef.current) {
      playerRef.current.seekTo(time);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg relative  max-w-4xl">
        <button
          className="absolute top-2 right-2 text-gray-800 dark:text-gray-100"
          onClick={onClose}
        >
          &#x2716; {/* Close button */}
        </button>
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md mb-4">
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube.com/embed/${videoId}?start=${currentTime}`}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold text-black dark:text-white mb-2">
            Timestamps
          </h2>
          <ul className="flex gap-4 flex-wrap">
            {timestamps.map((stamp: any, index: any) => (
              <li
                key={index}
                className="cursor-pointer text-white bg-blue-600 hover:underline text-xs lg:text-lg px-4 border flex rounded-full"
                onClick={() => handleTimestampClick(stamp.timestamp)}
              >
                {stamp.name} -{" "}
                {new Date(stamp.timestamp * 1000).toISOString().substr(14, 5)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function ProjectShowcase() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewVideo = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="relative bg-lightbg  dark:bg-projectmainbg text-gray-100 py-12 ">
        <div className="container mx-auto px-4 ">
          <img
            src="assets/images/projectleftbg.svg"
            alt="Small Image 2"
            className="absolute   right-12 w-72 2xl:right-2 2xl:top-0  mix-blend-difference dark:mix-blend-normal "
            loading="lazy"
          />
          <img
            src="assets/images/projectbottombg.svg"
            alt="Small Image 2"
            loading="lazy"
            className="absolute right-40  bottom-28 z-10  "
          />
          <div className=" mt-12 font-bold mb-12 text-center">
            <div>
              <h1 className="text-4xl  text-black dark:text-white">
                Our <span className="text-spantext"> Projects </span>
              </h1>
              <h3 className="text-gray-700 text-xs md:text-sm mt-4 mx-10 sm:-mx-0 md:mx-4 2xl:mx-80">
                A real-time multiplayer TicTacToe game where two players can bet
                ETH and the winner take all. A state channel is created between
                the two players to enable 'Off-Chain'.
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-0 sm:mx-20 md:-mx-4 lg:mx-16 2xl:mx-36 dark:shadow-lg  ">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "flex flex-col md:col-span-2 lg:col-span-2 md:flex-row"
                    : "col-span-1 gap-8"
                } bg-white dark:bg-projectbg border border-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105  transform duration-200`}
              >
                <div
                  className={`${
                    index === 0 ? "flex flex-col md:flex-row" : "flex flex-col"
                  }`}
                >
                  <div
                    className={`${
                      index === 0
                        ? "relative w-auto md:w-0 md:my-10 flex-1 pt-6 mx-4 rounded-md"
                        : "relative pt-6 mt-2 mx-4 rounded-md"
                    } bg-gray-200 dark:bg-[#222e35]`}
                  >
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      centeredSlides={true}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                    >
                      {project.images.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <img
                            src={image}
                            alt={project.title}
                            className={`w-full px-4 ${
                              index === 0
                                ? "h-auto md:h-[20rem] 2xl:h-[22rem] "
                                : "2xl:h-[20rem] "
                            }`}
                            loading="lazy"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div
                    className={`${
                      index === 0
                        ? "flex-1 p-2 md:p-2 lg:p-4 flex flex-col"
                        : "p-4 flex flex-col"
                    }`}
                  >
                    <div className=" text-xs  md:text-2xl font-semibold flex justify-between mx-4 md:mx-2 mt-3 items-center 2xl:mx-4">
                      <h1 className="text-xs md:text-sm lg:text-xl 2xl:text-2xl text-black dark:text-white">
                        {project.title}
                      </h1>
                      <button className="flex justify-center items-center gap-1">
                        <a
                          // href={project.youtube}
                          target="_parent"
                          className="text-spantext text-xs md:text-sm lg:text-xl 2xl:text-2xl z-50"
                          onClick={() => handleViewVideo(project)}
                        >
                          {project?.link}
                        </a>
                        <i className="text-spantext text-sm md:text-lg lg:text-xl mt-0">
                          <IoMdPlayCircle />
                        </i>
                      </button>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-800 dark:text-gray-400 mb-4 text-xs lg:text-sm">
                        {project.description}
                      </p>
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2  text-sm  md:lg lg:text-xl text-black dark:text-white">
                          Tools Used
                        </h3>
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {project.tools.map((tool: any, i: any) => (
                            <span
                              key={i}
                              className="px-1 md:px-1 py-1 text-sm rounded-full bg-lightmode text-black  dark:bg-gray-700 dark:text-blue-300 flex items-center gap-1"
                            >
                              {tool.icon && (
                                <div className="bg-[#2f393d] p-2 w-5 h-5 rounded-full flex justify-center items-center">
                                  <i className="text-xs text-white ">
                                    {tool.icon}
                                  </i>
                                </div>
                              )}
                              {tool.Img && (
                                <img
                                  className="w-4 h-4 md:w-5 md:h-6"
                                  src={tool.Img}
                                  alt="icons"
                                  loading="lazy"
                                />
                              )}
                              <p className="text-[9px] md:text-xs lg:pr-2">
                                {tool.name}
                              </p>
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-black dark:text-white  text-sm  md:lg lg:text-xl">
                          Features
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, i) => (
                            <span
                              key={i}
                              className="px-1 md:px-2 py-0 text-[11px] md:text-sm rounded-full border border-blue-400 text-blue-400"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex justify-between">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        className=" flex justify-center items-center gap-2 py-2 bg-blue-500 text-white rounded-full px-6 sm:px-2 md:px-8 lg:px-6 font-semibold hover:bg-blue-600 text-xs sm:text-sm cursor-pointer "
                      >
                        <p> Live Demo</p>
                        <span className="text-white">
                          <FiExternalLink />
                        </span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        className=" py-2 border border-blue-400 text-blue-400  font-semibold hover:bg-blue-400 rounded-full px-6   md:px-8 hover:text-gray-900 text-xs sm:text-sm lg:px-6 flex items-center gap-2 cursor-pointer"
                      >
                        <p> View Source</p>
                        <span>
                          <FaCode />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showModal && selectedProject && (
          <VideoModal
            // @ts-ignore
            videoId={selectedProject.videoId}
            // @ts-ignore
            timestamps={selectedProject.timestamps}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
}
