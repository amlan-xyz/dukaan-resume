import Marquee from "react-fast-marquee";
import { DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiTypescript } from "react-icons/si";
import "./MarqeeSlider.css";
export const Slider = () => {
  return (
    <Marquee autoFill pauseOnHover className="slider">
      <FaHtml5 className="slider__img" />
      <FaCss3Alt className="slider__img" />
      <FaNodeJs className="slider__img" />
      <FaReact className="slider__img" />
      <IoLogoJavascript className="slider__img" />
      <SiRedux className="slider__img" />
      <SiTypescript className="slider__img" />
      <DiMongodb className="slider__img" />
    </Marquee>
  );
};
