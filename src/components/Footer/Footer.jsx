import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span><a href="mailto:info@harsheet.co">info@harsheet.co</a></span>
        <div className="f-icons">
        <a href="https://github.com/Harsheet196">
        <Gitub color="white" size={"3rem"} /></a>
        <a href="https://www.linkedin.com/in/harsheet-chordiya/"><Linkedin color="white" size={"3rem"} /></a>
        <a href="https://www.instagram.com/harsheet__196/"><Insta color="white" size={"3rem"} /></a>
        
        </div>
        <span style={{color:"black"}}>
        Best Viewed          On Desktop!
        </span>
        <div className="react" style={{color:"black"}}>
          This website was built on React.Js
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
