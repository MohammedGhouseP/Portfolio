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

  return (
    <div
      className="works"
      id="works"
      style={{
        backgroundColor: darkMode ? "#000000" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div
        style={{
          color: "orange",
          alignContent: "center",
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          marginTop: "9rem",
          textDecoration: "underline",
        }}
      >
        Projects
      </div>

      <div className="projects">
        {projects.map(({ img, title, desc, liveUrl, techStack }, i) => (
          <a
            key={i}
            href={liveUrl}
            className="projectCard"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
              border: darkMode ? "1px solid #333" : "1px solid #ddd",
              transition: "all 0.3s ease",
            }}
          >
            <img src={img} alt={title} />
            <div className="projectInfo">
              <h2
                className="yellowCircle"
                style={{
                  color: darkMode ? "#ffffff" : "#000000",
                }}
              >
                {title}
                {"  live "}
                <FaRocket
                  className="liveIcon"
                  title="Live"
                  style={{ color: darkMode ? "#ffffff" : "#000000" }}
                />
                <FaGithub
                  className="liveIcon"
                  title="GitHub"
                  style={{ color: darkMode ? "#ffffff" : "#000000" }}
                />
              </h2>
              <p style={{ color: darkMode ? "#cccccc" : "#333333" }}>{desc}</p>
              <p
                className="techStack"
                style={{ color: darkMode ? "#aaaaaa" : "#666666" }}
              >
                {techStack}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="w-left">
        <div className="techStack">
          <span style={{ color: darkMode ? "white" : "#000000" }}>
            As a fresher need opportunity to showcase my skill set.
          </span>

          <div
            className="blur s-blur1"
            style={{
              background: darkMode ? "#333333" : "#ABF1FF94",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Works;
