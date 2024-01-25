import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";
export const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero__content">
        <h1>Full Stack MERN Developer.</h1>
        <p>
          Hi, I'm Amlan. A Computer Science and Engineering Grad. and a
          passionate Web Developer.
        </p>
        <a className="hero__btn" href="mailto:heyamlan19@gmail.com">
          Hire Me
        </a>
        <ul>
          <li>Also available on</li>
          <li>
            <a href="https://github.com/amlan-xyz/">
              <FaGithub className="hero__icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/amlanxyz/">
              <FaLinkedin className="hero__icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="hero__img">
        <img src="/hero/desktop.png" className="desktop__img" alt="a laptop" />
        <img src="/hero/mobile.png" className="mobile__img" alt="a mobile" />
      </div>
    </div>
  );
};
