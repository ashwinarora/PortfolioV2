import "./App.css";
import About from "./component/About";
import AfterHome from "./component/AfterHome";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Project from "./component/Projects";
import Testimonial from "./component/Testimonial";
import Whyme from "./component/Whyme";
import { ThemeProvider } from "./component/Context/ThemeContext";
import ContactContainer from "./component/Contact/ContactContainer";
import { useEffect, useRef, useState } from "react";

export type Sections = "home" | "project" | "about" | "contact";

function App() {
  const [activeSection, setActiveSection] = useState<Sections>("home");

  const projectSection = useRef<HTMLDivElement>(null);
  const aboutSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections: {key: Sections, ref: React.RefObject<HTMLDivElement>}[] = [
        { key: 'project', ref: projectSection },
        { key: 'about', ref: aboutSection },
        { key: 'contact', ref: contactSection },
      ];
  
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let foundActiveSection = false;
  
      for (const section of sections) {
        const offsetTop = section.ref.current?.offsetTop ?? 0;
        const offsetBottom = offsetTop + (section.ref.current?.offsetHeight ?? 0);
  
        // Check if the scroll position is within the current section's bounds
        if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
          setActiveSection(section.key);
          foundActiveSection = true;
          break;
        }
      }
  
      // If no section matched, set activeSection to null
      if (!foundActiveSection) {
        setActiveSection("home");
      }
    };
  

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <ThemeProvider>
      <Navbar activeSection={activeSection} />
      <div id="home">
        <Home />
      </div>
      <div id="afterhome">
        <AfterHome />
      </div>
      <div id="project" ref={projectSection}>
        <Project />
      </div>
      <div id="whyme">
        <Whyme />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="about" ref={aboutSection}>
        <About />
      </div>
      <div id="contact" ref={contactSection}>
        <ContactContainer />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
