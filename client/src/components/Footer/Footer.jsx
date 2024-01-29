import { RiShoppingBag2Fill } from "react-icons/ri";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__body container">
        <div className="footer__logo">
          <span>
            <RiShoppingBag2Fill className="fill__bg footer__icon" />
          </span>
          amlan <sup>&#174;</sup>
        </div>
        <div className="footer__links">
          <a href="#linkedin">LinkedIn</a>
          <a href="#github">Github</a>
          <a href="instagram">Instagram</a>
        </div>
        <div className="footer__links">
          <a href="mailto:heyamlan192gmail.com">Email</a>
          <a href="X">X</a>
        </div>
      </div>
      <div className="container footer__content">
        <hr />
        <div className="">
          <p>Hire Me Pvt Ltd. All rights reserved, 2024.</p>
          <p>
            Made in <img src="/indian_flag.png" alt="" />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};