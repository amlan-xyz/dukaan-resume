import { RiShoppingBag2Fill } from "react-icons/ri";
import "./Contact.css";
export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__body container">
        <img src="/gradient.png" alt="gradient bg" />
        <div>
          <span>
            <RiShoppingBag2Fill className="fill__gradient" />
          </span>
          <h1>Get in touch with me.</h1>
          <p>Send me an email.</p>
          <a href="mailto:heyamlan19@gmail.com">Email Me</a>
        </div>
      </div>
    </div>
  );
};
