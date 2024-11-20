import { useContext, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaCode, FaRegCirclePlay } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import VideoModal from "./VideoModal";
import { allProjects, Project } from "./Data";
import { ThemeContext } from "../Context/ThemeContext";
import PoolzFinanceWhite from "/assets/images/PoolzFinanceWhite.png";
import PoolzFinanceBlack from "/assets/images/PoolzFinanceBlack.png";
import ImageModal from "./ImageModal";
import { MdOutlineOpenInNew } from "react-icons/md";

export default function ProjectShowcase() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const themeContext = useContext(ThemeContext);

  const handleViewVideo = (project: Project) => {
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
                My <span className="text-spantext"> Projects </span>
              </h1>
            </div>
          </div>
          <div className="mx-0 grid grid-cols-1 gap-8 dark:shadow-lg sm:mx-20 md:-mx-4 md:grid-cols-2 lg:mx-16 lg:grid-cols-2 2xl:mx-36">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className={`${
                  project.isBig
                    ? "flex flex-col md:col-span-2 md:flex-row lg:col-span-2"
                    : "col-span-1 gap-8"
                } transform overflow-hidden rounded-lg border border-gray-900 bg-white shadow-lg duration-200 hover:scale-105 dark:bg-projectbg`}
              >
                <div
                  className={`${
                    project.isBig
                      ? "flex flex-col md:flex-row"
                      : "flex flex-col"
                  }`}
                >
                  <div
                    className={`${
                      project.isBig
                        ? "relative mx-4 w-auto flex-1 rounded-md pt-6 md:my-10 md:w-0"
                        : "relative mx-4 mt-2 rounded-md pt-3"
                    } bg-gray-200 dark:bg-[#222e35]`}
                  >
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      centeredSlides={true}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
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
                              project.isBig
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
                      project.isBig
                        ? "flex flex-1 flex-col p-2 md:p-2 lg:p-4"
                        : "flex flex-col p-4"
                    }`}
                  >
                    <div className="mx-4 mt-3 flex items-center justify-between text-xs font-semibold md:mx-2 md:text-2xl 2xl:mx-4">
                      <h1 className="flex items-center justify-start gap-x-2 text-xs text-black dark:text-white md:text-sm lg:text-xl 2xl:text-2xl">
                        {project.logo && (
                          <img
                            src={project.logo}
                            alt={""}
                            className="size-10"
                            onError={(e) => {
                              e.currentTarget.classList.add("hidden");
                            }}
                          />
                        )}
                        {project.title}
                      </h1>
                      <button className="flex items-center justify-center gap-1">
                        <a
                          target="_parent"
                          className="z-50 flex items-center justify-center gap-x-1 text-xs text-spantext md:text-sm lg:text-xl"
                          onClick={() => handleViewVideo(project)}
                        >
                          {project.dialog.content === "video"
                            ? "Watch Video"
                            : "Expand"}
                          {project.dialog.content === "video" ? (
                            <FaRegCirclePlay />
                          ) : (
                            <MdOutlineOpenInNew />
                          )}
                        </a>
                        {/* <i className="mt-0 text-sm text-spantext md:text-lg lg:text-xl">
                        </i> */}
                      </button>
                    </div>
                    <div className="p-4">
                      {project.title === "DaoSender" && (
                        <div className="text-black dark:text-white">
                          developed with
                          <a href="https://www.poolz.finance/" target="_blank">
                            {themeContext?.theme === "dark" ? (
                              <img
                                src={PoolzFinanceWhite}
                                alt="Poolz Finance"
                                className="ml-2 inline h-9 w-40 object-scale-down hover:scale-125"
                              />
                            ) : (
                              <img
                                src={PoolzFinanceBlack}
                                alt="Poolz Finance"
                                className="ml-2 inline h-9 w-40 object-scale-down hover:scale-125"
                              />
                            )}
                          </a>
                        </div>
                      )}
                      <p className="mb-4 text-xs text-gray-800 dark:text-gray-400 lg:text-base">
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
                                <div className="flex h-5 w-auto items-center justify-center rounded-full bg-[#2f393d] p-2">
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
                    <div className="flex flex-row gap-4 p-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-2 text-xs font-semibold text-white hover:bg-blue-700 sm:px-2 sm:text-sm md:px-8 lg:px-6"
                      >
                        <p>Launch App</p>
                        <span className="text-white">
                          <FiExternalLink className="size-5" />
                        </span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-blue-400 px-6 py-2 text-xs font-semibold text-blue-400 hover:bg-blue-600 hover:text-white sm:text-sm md:px-8 lg:px-6"
                      >
                        <p> View Source</p>
                        <span>
                          <FaCode className="size-5" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showModal &&
          selectedProject &&
          selectedProject.dialog.content === "video" && (
            <VideoModal
              videoProps={selectedProject.dialog}
              onClose={closeModal}
            />
          )}
        {showModal &&
          selectedProject &&
          selectedProject.dialog.content === "image" && (
            <ImageModal
              imageProps={selectedProject.dialog}
              onClose={closeModal}
            />
          )}
      </div>
    </div>
  );
}
