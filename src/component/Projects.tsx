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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-4xl rounded-lg bg-white p-6 dark:bg-gray-800">
        <button
          className="absolute right-2 top-2 text-gray-800 dark:text-gray-100"
          onClick={onClose}
        >
          &#x2716; {/* Close button */}
        </button>
        <div className="relative mb-4 h-0 overflow-hidden rounded-md pb-[56.25%]">
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube.com/embed/${videoId}?start=${currentTime}`}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
            className="absolute left-0 top-0"
          />
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold text-black dark:text-white">
            Timestamps
          </h2>
          <ul className="flex flex-wrap gap-4">
            {timestamps.map((stamp: any, index: any) => (
              <li
                key={index}
                className="flex cursor-pointer rounded-full border bg-blue-600 px-4 text-xs text-white hover:underline lg:text-lg"
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
      <div className="relative bg-lightbg py-12 text-gray-100 dark:bg-projectmainbg">
        <div className="container mx-auto px-4">
          <img
            src="assets/images/projectleftbg.svg"
            alt="Small Image 2"
            className="absolute right-12 w-72 mix-blend-difference dark:mix-blend-normal 2xl:right-2 2xl:top-0"
            loading="lazy"
          />
          <img
            src="assets/images/projectbottombg.svg"
            alt="Small Image 2"
            loading="lazy"
            className="absolute bottom-28 right-40 z-10"
          />
          <div className="mb-12 mt-12 text-center font-bold">
            <div>
              <h1 className="text-4xl text-black dark:text-white">
                Our <span className="text-spantext"> Projects </span>
              </h1>
              <h3 className="mx-10 mt-4 text-xs text-gray-700 sm:-mx-0 md:mx-4 md:text-sm 2xl:mx-80">
                A real-time multiplayer TicTacToe game where two players can bet
                ETH and the winner take all. A state channel is created between
                the two players to enable 'Off-Chain'.
              </h3>
            </div>
          </div>
          <div className="mx-0 grid grid-cols-1 gap-8 dark:shadow-lg sm:mx-20 md:-mx-4 md:grid-cols-2 lg:mx-16 lg:grid-cols-2 2xl:mx-36">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "flex flex-col md:col-span-2 md:flex-row lg:col-span-2"
                    : "col-span-1 gap-8"
                } transform overflow-hidden rounded-lg border border-gray-900 bg-white shadow-lg duration-200 hover:scale-105 dark:bg-projectbg`}
              >
                <div
                  className={`${
                    index === 0 ? "flex flex-col md:flex-row" : "flex flex-col"
                  }`}
                >
                  <div
                    className={`${
                      index === 0
                        ? "relative mx-4 w-auto flex-1 rounded-md pt-6 md:my-10 md:w-0"
                        : "relative mx-4 mt-2 rounded-md pt-6"
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
                                ? "h-auto md:h-[20rem] 2xl:h-[22rem]"
                                : "2xl:h-[20rem]"
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
                        ? "flex flex-1 flex-col p-2 md:p-2 lg:p-4"
                        : "flex flex-col p-4"
                    }`}
                  >
                    <div className="mx-4 mt-3 flex items-center justify-between text-xs font-semibold md:mx-2 md:text-2xl 2xl:mx-4">
                      <h1 className="text-xs text-black dark:text-white md:text-sm lg:text-xl 2xl:text-2xl">
                        {project.title}
                      </h1>
                      <button className="flex items-center justify-center gap-1">
                        <a
                          // href={project.youtube}
                          target="_parent"
                          className="z-50 text-xs text-spantext md:text-sm lg:text-xl 2xl:text-2xl"
                          onClick={() => handleViewVideo(project)}
                        >
                          {project?.link}
                        </a>
                        <i className="mt-0 text-sm text-spantext md:text-lg lg:text-xl">
                          <IoMdPlayCircle />
                        </i>
                      </button>
                    </div>
                    <div className="p-4">
                      <p className="mb-4 text-xs text-gray-800 dark:text-gray-400 lg:text-sm">
                        {project.description}
                      </p>
                      <div className="mb-4">
                        <h3 className="md:lg mb-2 text-sm font-semibold text-black dark:text-white lg:text-xl">
                          Tools Used
                        </h3>
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {project.tools.map((tool: any, i: any) => (
                            <span
                              key={i}
                              className="flex items-center gap-1 rounded-full bg-lightmode px-1 py-1 text-sm text-black dark:bg-gray-700 dark:text-blue-300 md:px-1"
                            >
                              {tool.icon && (
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2f393d] p-2">
                                  <i className="text-xs text-white">
                                    {tool.icon}
                                  </i>
                                </div>
                              )}
                              {tool.Img && (
                                <img
                                  className="h-4 w-4 md:h-6 md:w-5"
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
                        <h3 className="md:lg mb-2 text-sm font-semibold text-black dark:text-white lg:text-xl">
                          Features
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature, i) => (
                            <span
                              key={i}
                              className="rounded-full border border-blue-400 px-1 py-0 text-[11px] text-blue-400 md:px-2 md:text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between p-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-2 text-xs font-semibold text-white hover:bg-blue-600 sm:px-2 sm:text-sm md:px-8 lg:px-6"
                      >
                        <p> Live Demo</p>
                        <span className="text-white">
                          <FiExternalLink />
                        </span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        className="flex cursor-pointer items-center gap-2 rounded-full border border-blue-400 px-6 py-2 text-xs font-semibold text-blue-400 hover:bg-blue-400 hover:text-gray-900 sm:text-sm md:px-8 lg:px-6"
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
