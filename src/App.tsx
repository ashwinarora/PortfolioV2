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

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="afterhome">
        <AfterHome />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="whyme">
        <Whyme />
      </div>
      <div id="testimonial">
        <Testimonial />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <ContactContainer />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
