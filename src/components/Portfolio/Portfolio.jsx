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
          <img src={at} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cvap} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={beast} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hack} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nlp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={opin} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={web3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
