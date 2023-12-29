import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from '../Services/resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // card sizes fixed
  

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}> Skills &#128524;</span>
        <span> </span> 
        
        <span>
        Sophomore @RCOEM || CSE
          <br />
         Whatever it takes!
        </span>
        <a href="https://drive.google.com/file/d/1Hie09WY1yqVAt_jXE0BpI8q9vGl2xFua/view?usp=sharing">
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Tech Stack / Programming"}
            detail={"Python, R ,PHP , C/C++ , HTML/CSS, JavaScript, SQL, JAVA, React.Js, Node.Js"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card 
            emoji={Glasses}
            heading={"Technologies/Platforms"}
            detail={"MS Office, JetBrains Coding Platforms, VSCode, Arduino IDE for Robotics and IoT, GitHub, Apache Kafka "}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Achievements"}
            detail={
              
               "• 3rd in IIT Bombay Nagpur  Zonals and in Top 25 teams              across nation in CodeCode              Competition    S  •Runner up in Cluster finals of              Tata Crucible Quiz. (18k Prize)              • Lead the team in Top 7              Finalized teams for SIH‑2022              from our Institute.              • 2nd Runner Up in CSE Dept              Web‑dev competition."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
