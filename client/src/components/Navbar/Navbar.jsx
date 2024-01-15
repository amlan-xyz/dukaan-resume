import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose, IoShareSocial } from "react-icons/io5";
import { LuEqual } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  const [color, setColor] = useState(false);
  const [show, setShow] = useState(false);

  const toggleNav = () => {
    setShow(!show);
  };

  const changeColor = () => {
    if (window.scrollY >= 12) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color || show ? "nav__color-bg" : ""}>
      <div className="container navbar">
        <header className="nav__header">
          <span>
            <RiShoppingBag2Fill className="fill__bg" />
          </span>
          amlan <sup>&#174;</sup>
        </header>
        <ul className={show ? "nav__list-mobile" : "nav__list"}>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <span>
                Skills <MdKeyboardArrowDown className="nav__arrow" />
              </span>
              <div className="nav__info">
                <ul className="nav__icons-list">
                  <li className="nav__icons-item">
                    <img src="/icons/html.png" alt="" />
                  </li>
                  <li className="nav__icons-item">
                    <img src="/icons/css.png" alt="" />
                  </li>
                  <li className="nav__icons-item">
                    <img src="/icons/js.png" alt="" />
                  </li>
                  <li className="nav__icons-item">
                    <img src="/icons/react.png" alt="" />
                  </li>
                  <li className="nav__icons-item">
                    <img src="/icons/redux.png" alt="" />
                  </li>
                  <li className="nav__icons-item">
                    <img src="/icons/nodejs.png" alt="" />
                  </li>
                  <li className="nav__icons-item">
                    <img src="/icons/mongodb.png" alt="" />
                  </li>
                </ul>
              </div>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/">
              <span>
                Projects <MdKeyboardArrowDown className="nav__arrow" />
              </span>
              <div className="nav__info">
                <ul className="nav__projects-list">
                  <li className="nav__projects-item">
                    <span>
                      <FaShoppingCart className="nav__projects-icon" />
                    </span>

                    <p>
                      Candyland is an e-commerce web application built using
                      MERN stack and integrated with Razorpay payment gateway
                      for secure transaction.
                    </p>
                  </li>

                  <li className="nav__projects-item">
                    <span>
                      {" "}
                      <IoShareSocial className="nav__projects-icon" />
                    </span>
                    <p>
                      WeShare is an social media web application built using
                      MERN stack, redux-toolkit and integrated with Cloudinary
                      API to store images.
                    </p>
                  </li>
                </ul>
              </div>
            </Link>
          </li>
        </ul>
        <div className="nav__btns">
          <a href="https://www.linkedin.com/in/amlanxyz/">LinkedIn</a>
          <a href="https://github.com/amlan-xyz/">Github</a>
        </div>
        <div className="hamburger" onClick={toggleNav}>
          {show ? (
            <IoClose className="menu__icon" />
          ) : (
            <LuEqual className="menu__icon" />
          )}
        </div>
      </div>
    </nav>
  );
};
