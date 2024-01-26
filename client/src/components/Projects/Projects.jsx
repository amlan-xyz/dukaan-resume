import { BsCartCheck } from "react-icons/bs";
import { GrSchedules } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";
import "./Projects.css";
export const Projects = () => {
  return (
    <div className="projects">
      <h1>Some of my projects</h1>
      <p>For more projects check my github</p>
      <div className="projects__list container">
        <div className="projects__body">
          <div className="projects__body-icon">
            <BsCartCheck className="project__icon" />
          </div>
          <a href="https://candyland-by-amlan.vercel.app">Candyland</a>
          <p>
            Candyland is an e-commerce web application built using MERN stack
            and integrated with Razorpay payment gateway for secure transaction.
          </p>
        </div>
        <div className="projects__body">
          <div className="projects__body-icon">
            <IoShareSocialOutline className="project__icon" />
          </div>
          <a href="https://we-share-v1.vercel.app">WeShare</a>
          <p>
            WeShare is an social media web application built using MERN stack,
            redux-toolkit and integrated with Cloudinary API to store images.
          </p>
        </div>
        <div className="projects__body">
          <div className="projects__body-icon">
            <GrSchedules className="project__icon" />
          </div>
          <a href="https://moonshot-booking-app.vercel.app">BookMySlot</a>
          <p>
            A Demo page for booking slots. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illum, corrupti!
          </p>
        </div>
      </div>
    </div>
  );
};
