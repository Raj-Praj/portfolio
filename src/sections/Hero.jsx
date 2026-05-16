import { useState } from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "../styles/hero.css";

function Hero() {

  const [activePage, setActivePage] = useState("home");
  const getLeftText = () => {
  switch (activePage) {

    case "about":
      return {
        
        
        title: "I enjoy building clean UI and React apps"
      };

    case "projects":
      return {
        
        title: "Here are some things I built"
      };

    case "contact":
      return {
        
        title: "Let’s connect and work together"
      };

    default:
      return {
        name:"Raj Prajapati",
        title: "Hello, I am ",
        subtitle: "MERN Stack Learner"
      };
  }
};
const left = getLeftText();

  return (
    <section className="hero">

      {/* LEFT SIDE (STATIC) */}
      <div className="left-side">
          <div className="content">

                 
                 
                 <h2 className="intro">{left.title}</h2>
                 <h1 className="name">{left.name}</h1>


                 <p className="role">{left.subtitle}</p>
                

          </div>
          <div className="left-buttons">
    <a href="https://github.com/Raj-Praj" target="_blank">
    <FaGithub />
    </a>

    <a href="https://linkedin.com/in/yourusername" target="_blank">
    <FaLinkedin />
    </a>

    <a href="mailto:rajpz3579@gmail.com">
    <FaEnvelope />
    </a>
  </div>
      </div>

      {/* RIGHT SIDE (DYNAMIC AREA) */}
      <div className="right-side">

        <Navbar 
         setActivePage={setActivePage} 
         activePage={activePage}
        />

        <div className="page-area page-animate" key={activePage}>
          

          {activePage === "home" && (
            <h1 style={{ color: " rgb(183, 178, 178)",fontSize:"60px"}}>Welcome to my Portfolio</h1>
          )}

          {activePage === "about" && <About />}
          {activePage ==="projects" && <Projects />}
          {activePage ==="contact"&& <Contact />}
          

        </div>

      </div>

    </section>
  );
}

export default Hero;