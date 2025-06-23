// import React, { useContext } from "react";
// import "./Services.css";
// import Card from "../Card/Card";
// import HeartEmoji from "../../img/heartemoji.png";
// import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import Resume from './resume.pdf';

// const Services = () => {
//   // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

//   // transition
//   const transition = {
//     duration: 1,
//     type: "spring",
//   };

//   return (
//     <div className="services" id="services">
//       {/* left side */}
//       <div className="awesome">
//         {/* dark mode */}
//         <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
//         <span>services</span>
//         <spane>
//         Passionate about leveraging cutting-edge technologies and innovative strategies to create impactful solutions and 
//           <br />
//           enhance user experiences
//         </spane>
//         <a href={Resume} download>
//           <button className="button s-button">Download CV</button>
//         </a>
//         <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
//       </div>
//       {/* right */}
//       <div className="cards">
//         {/* first card */}
//         <motion.div
//           initial={{ left: "25rem" }}
//           whileInView={{ left: "14rem" }}
//           transition={transition}
//         >
//           <Card
//             emoji={HeartEmoji}
//             heading={"Design"}
//             detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
//           />
//         </motion.div>
//         {/* second card */}
//         <motion.div
//           initial={{ left: "-11rem", top: "12rem" }}
//           whileInView={{ left: "-4rem" }}
//           transition={transition}
//         >
//           <Card
//             emoji={Glasses}
//             heading={"Developer"}
//             detail={"Html, Css, JavaScript, React, Nodejs, Express"}
//           />
//         </motion.div>
//         {/* 3rd */}
//         <motion.div
//           initial={{ top: "19rem", left: "25rem" }}
//           whileInView={{ left: "12rem" }}
//           transition={transition}
//         >
//           <Card
//             emoji={Humble}
//             heading={"UI/UX"}
//             detail={
//               "Lorem ispum dummy text are usually use in section where we need some random text"
//             }
//             color="rgba(252, 166, 31, 0.45)"
//           />
//         </motion.div>
//         <div
//           className="blur s-blur2"
//           style={{ background: "var(--purple)" }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Services;
import React from 'react';
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <div className="service-card">
        <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710460800&semt=ais" alt="Web Development" />
        <h2>Web Development</h2>
        <p>Crafting captivating websites tailored to your vision. Leveraging cutting-edge technologies for exceptional web solutions.</p>
        <h3>Skills:</h3>
        <p>HTML, CSS, JavaScript, ES6, React.js, Next.js, CI/CD, Docker, Node.js, Express.js and MongoDB</p>
      </div>
      <div className="service-card">
        <img src="https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038906.jpg" alt="App Development" />
        <h2>App Development</h2>
        <p>Specializing in crafting intuitive mobile applications for cross platform iOS and Android , delivering seamless user experiences.</p>
        <h3>Skills:</h3>
        <p>React Native, Firebase</p>
      </div>
      {/* <div className="service-card">
        <img src="https://img.freepik.com/premium-photo/creative-blue-polygonal-head-outline-dark-backdrop-with-mock-up-place-artificial-intelligence-machine-learning-3d-rendering_670147-49630.jpg" alt="Artificial Intelligence" />
        <h2>Artificial Intelligence</h2>
        <p>Unlocking the potential of AI to optimize your business operations and strategic decision-making processes.</p>
      </div> */}
    </div>
  );
}

export default Services;





