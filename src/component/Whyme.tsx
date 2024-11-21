import { FaHandPointRight } from "react-icons/fa6";

const Whyme = () => {
  const features = [
    {
      id: "01",
      title: "Expertise",
      description:
        "I bring a wealth of experience and expertise to the table With a.",
    },
    {
      id: "02",
      title: " Reliability",
      description:
        "Meeting deadlines and exceeding expectations is my priority.",
    },
    {
      id: "03",
      title: "Versatility",
      description:
        "I excel in [specific skills, e.g., content development, project management, etc.],",
    },

    {
      id: "04",
      title: "Professionalism",
      description:
        "With a strong work ethic and attention to detail, I approach every project.",
    },
  ];
  return (
    <div>
      <section className="relative bg-testmonila mx-0 -mb-1 mt-28 flex h-[900px] w-auto items-center justify-center bg-lightmode py-12 dark:bg-black sm:h-[690px] md:mx-0 md:mb-0 md:py-24 lg:gap-6 lg:py-32 xl:gap-0">
      <img
          src="assets/icons/testimonialrightbg.svg"
          alt="Small Image 2"
          className="absolute right-3 top-16"
          loading="lazy"
        />
        <img
          src="assets/icons/testimonialleftbg.svg"
          alt="Small Image 2"
          className="absolute bottom-0 left-0 sm:top-52"
          loading="lazy"
        />
        <div className="container relative grid gap-10 px-4 md:grid-cols-2 md:gap-0 md:px-0 lg:px-32">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-black dark:text-white sm:text-4xl md:text-5xl">
              Why Hire Me For Your <br />{" "}
              <span className="text-spantext"> Next Project ?</span>
            </h2>
            <ul className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-x-2 text-lg">
                <FaHandPointRight />
                <span>Proven track record of delivering high-quality projects on time.</span>
              </li>
              <li className="flex items-center gap-x-2 text-lg">
                <FaHandPointRight />
                <span>Strong problem-solving skills and attention to detail.</span>
              </li>
              <li className="flex items-center gap-x-2 text-lg">
                <FaHandPointRight />
                <span>Excellent communication and collaboration abilities.</span>
              </li>
              <li className="flex items-center gap-x-2 text-lg">
                <FaHandPointRight />
                <span>Adaptable to new technologies and methodologies.</span>
              </li>
              <li className="flex items-center gap-x-2 text-lg">
                <FaHandPointRight />
                <span>Commitment to continuous learning and professional growth.</span>
              </li>
            </ul>
            
            {/* <p className="text-muted-foreground mt-4 max-w-[600px] text-gray-500 md:text-sm lg:text-base xl:text-lg">
              I am a Full Stack Developer with expertise in Blockchain. I can
              realize the vision of your product. I am proficient with both
              Front-End and Back-End Development. Using React for Front-End and
              Node with Express for Back-End. Apart from this, I have experience
              in Blockchain Development with expertise in Ethereum. My portfolio
              demonstrates my ability to meet deadlines, exceed expectations,
              and deliver outstanding work.
            </p> */}
          </div>

          <div className="sm:-px-10 rounded-2xl bg-feturelg px-2 dark:bg-feature 2xl:mx-16">
            <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:mt-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative flex items-center justify-center sm:-mx-4 2xl:-mx-10 ${
                    index % 2 === 0 ? "-top-12 sm:-top-8" : "top-10 sm:top-14"
                  } `}
                >
                  <div className="bg-muted -px-0 -py-8 sm:-py-0 relative z-10 rounded-xl border bg-white p-0 text-center shadow-lg dark:border-gray-800 dark:bg-[#14202b] sm:mx-6 sm:p-8 sm:px-0 2xl:mx-12">
                    <div className="absolute inset-0 z-0 -mt-28 flex items-center justify-center text-5xl text-gray-400 dark:text-gray-600 2xl:-mt-28">
                      {feature.id}
                    </div>
                    <div className="relative z-10 p-2">
                      <h3 className="text-base font-semibold text-black dark:text-white sm:text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground sm:text-md text-sm text-gray-800 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whyme;
