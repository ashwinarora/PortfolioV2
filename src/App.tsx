import "./App.css";
import About from "./component/About";
import AfterHome from "./component/AfterHome";
import ContactUs from "./component/ContactUS";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
// import Project from "./component/Projects";
import Testimonial from "./component/Testimonial";
import Whyme from "./component/Whyme";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AfterHome />
      {/* <Project /> */}
      <Whyme />
      <Testimonial />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
