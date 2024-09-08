import { FiVideo } from "react-icons/fi";

export default function Project() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-white ">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-6 bg-background rounded-lg shadow-lg overflow-hidden bg-white">
          <img
            src="assets/images/project1.svg"
            width={600}
            height={400}
            alt="Project 1"
            className="md:w-1/2 object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold">Project 1</h3>
              <p className="text-muted-foreground mt-2">
                A detailed description of the first project in the portfolio.
              </p>
            </div>
            <div className="mt-4 space-y-2">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <FiVideo className="w-4 h-4" />
                Watch Video
              </a>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Tools:</span> Lorem ipsum
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">Key Features:</span> Responsive
                design, dynamic content, user authentication
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <img
              src="assets/images/project2.svg"
              width={600}
              height={400}
              alt="Project 2"
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Project 2</h3>
              <p className="text-muted-foreground mt-2">
                A detailed description of the second project in the portfolio.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <FiVideo className="w-4 h-4" />
                  Watch Video
                </a>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Tools:</span> Lorem ipsum
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Key Features:</span>
                  <ul className="bg-blue-400 shadow-sm flex">
                    <li> Follow/UnFollow</li>
                    <li> Make New Post</li>
                    <li> Like & comment</li>
                    <li> Password Reset</li>
                  </ul>
                  Responsive design, real-time data updates, user authentication
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <img
              src="assets/images/project3.svg"
              width={600}
              height={400}
              alt="Project 3"
              className="w-full h-64 object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Project 3</h3>
              <p className="text-muted-foreground mt-2">
                A detailed description of the third project in the portfolio.
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <FiVideo className="w-4 h-4" />
                  Watch Video
                </a>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Tools:</span> Next.js, Tailwind
                  CSS, Prisma
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Key Features:</span> Server-side
                  rendering, database integration, user management
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
