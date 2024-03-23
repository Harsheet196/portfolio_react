import React, { useContext } from "react";
import "../Portfolio/Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import at from "../../img/at.png";
import cvap from "../../img/c-vap.png";
import beast from "../../img/codingbeast.png";
import hack from "../../img/dev.png";
import nlp from "../../img/nlp.png";
import opin from "../../img/opin.png";
import web3 from "../../img/web3Campus.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={at} alt=""/><span ><a href="attendance.harsheetchordiya.co">Automatic Attendance Retrieval System</a></span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={cvap} alt="" /><span ><a href="https://c-vap.github.io/Covid-Vaccine/">C-VAP: Covid Vaccine Awareness Programme</a></span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={beast} alt="" /><span ><a href="https://github.com/Harsheet196/coding__beast.git">Virtual Health Assistant</a></span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={hack} alt="" /><span ><a href="https://devfolio.co/projects/transparent-and-corruptionfree-mnrega-5e4c">Transparent and Corruption free: MNREGA</a></span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nlp} alt="" /><span ><a href="https://github.com/Harsheet196/NLP-based-data-integration">An NLP based approach for data Integration and Migration</a></span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={opin} alt="" /><span ><a href="https://github.com/jhamadhav/thisDot_opinhacks">ThisDot @OPINHacks</a></span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={web3} alt="" /><span ><a href="http://jhamadhav.com/web3Campus/">Web3Campus</a></span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
