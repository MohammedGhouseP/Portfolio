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
import { FaRocket } from "react-icons/fa";

const projects = [
  {
    img: "lenskart.png",
    title: "Lenskart Clone",
    desc: "Solve the problem of not being able to try on glasses before buying them online.",
    liveUrl: "https://lenskart-clone-two.vercel.app/",
  },
  {
    img: "report.jpg",
    title: "Report Web App",
    desc: "Issue tracking & ticket management",
    liveUrl: "https://report-9co9.vercel.app/",
  },
];

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}

      <div className="projects">
        {projects.map(({ img, title, desc, liveUrl }, i) => (
          <a
            key={i}
            href={liveUrl}
            className="projectCard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img} alt={title} />
            <div className="projectInfo">
              <h2>
                {title}
                {"  live "}
                <FaRocket className="liveIcon" title="Live" />
              </h2>

              <p>{desc}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            As a fresher need oppurtunity to show case my skill set.
          </span>
          {/* <span>Brands & Clients</span>
          <spane>
          Works with top-tier brands and esteemed clients to
            <br />
            deliver exceptional solutions tailored to their
          
            <br />
            unique needs,consistently 
            <br />
            exceeding expectations and driving success.
          </spane> */}
          {/* <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link> */}
          <a
            href="/Resume.pdf"
            download
            className="buttonResume i-buttonResume"
          >
            Download Resume
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      {/* <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
      {/* <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div> */}
      {/* </div> */}
    </div>
  );
};

export default Works;
