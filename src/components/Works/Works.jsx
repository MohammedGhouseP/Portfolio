import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
// import { FaCircle } from "react-icons/fa";
import { FaRocket, FaGithub, FaUnderline } from "react-icons/fa";

const projects = [
  {
    img: "lenskart.png",
    title: "Lenskart Clone",
    desc: "A virtual try-on experience that uses your webcam and face-detection to let you see how different frames look on you in real time. Includes advanced search, filtering by shape or color, seamless cart integration for checkout, and user profiles to save favorite styles.",
    liveUrl: "https://lenskart-clone-two.vercel.app/",
    techStack: "React, Chakra UI, Redux, Node.js, Express, JWT, MongoDB",
    github: "https://github.com/MohammedGhouseP/lenskart_clone",
  },
  {
    img: "report.jpg",
    title: "Report Web App",
    desc: "A full-featured issue-tracking platform where users can submit tickets, set priorities, and leave comments. Admins and agents can assign, filter, and update ticket statuses, view analytics on resolution times, and export reports for team performance.",
    liveUrl: "https://report-9co9.vercel.app/",
    techStack: "React, Chakra UI, json Server, context API",
    github: "https://github.com/MohammedGhouseP/report",
  },
];

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      <div
        style={{
          color: "orange",
          alignContent: "center",
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          marginTop:"60px",
          textDecoration:"underline",
        }}
      >
        Projects
      </div>
      {/* left side */}

      <div className="projects">
        {projects.map(({ img, title, desc, liveUrl, techStack }, i) => (
          <a
            key={i}
            href={liveUrl}
            className="projectCard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img} alt={title} />
            <div className="projectInfo">
              <h2 className="yellowCircle">
                {title}
                {"  live "}
                <FaRocket className="liveIcon" title="Live" />
                <FaGithub className="liveIcon" title="Live" />
              </h2>
              <p>{desc}</p>
              <p className="techStack">{techStack}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="w-left">
        <div className="techStack">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            As a fresher need oppurtunity to show case my skill set.
          </span>

          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
    </div>
  );
};

export default Works;
