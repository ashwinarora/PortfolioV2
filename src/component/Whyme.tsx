import { FaHandPointRight } from "react-icons/fa6";

const Whyme = () => {
  const features = [
    {
      id: "01",
      title: "Expertise",
      description: "Proficient in modern tools, frameworks, and methodologies.",
    },
    {
      id: "02",
      title: "Communication",
      description: "Clear, concise, and proactive in exchanging information.",
    },
    {
      id: "03",
      title: "Ownership",
      description: "Takes full responsibility for tasks and outcomes.",
    },
    {
      id: "04",
      title: "Professionalism",
      description: "A strong work ethic, respect for deadlines, and integrity.",
    },
  ];

  const points = [
    "Proven expertise in scalable web and blockchain applications with over 5 years of experience.",
    "Strong sense of ownership—dedicated to taking full responsibility for delivering exceptional outcomes.",
    "Innovative problem-solver, delivering solutions that save time and eliminate inefficiencies.",
    "Full-stack proficiency in React, TypeScript, Solidity, and backend integration.",
    "Committed to professionalism, clear communication, and delivering high-quality results.",
  ];

  return (
    <div>
      {/* <section className="relative mx-0 -mb-1 mt-28 flex h-[900px] w-auto items-center justify-center bg-lightmode bg-testmonila py-12 dark:bg-black sm:h-[690px] md:mx-0 md:mb-0 md:py-24 lg:gap-6 lg:py-32 xl:gap-0"> */}
      <section className="relative mx-0 flex h-auto w-auto items-center justify-center bg-lightTestmonila dark:bg-testmonila py-12 sm:h-auto md:mx-0 md:py-24 lg:gap-6 lg:py-32 xl:gap-0">
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
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-x-4 text-base">
                  <FaHandPointRight className="size-5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
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
