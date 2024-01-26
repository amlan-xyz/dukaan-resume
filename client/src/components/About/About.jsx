import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1>
          Whether you want a Frontend Developer or a Backend Developer, here's
          why I am your best choice
        </h1>
      </div>
      <div className="about__body container">
        <div className="about__details">
          <img
            className="about__img"
            src="/about/frontend.png"
            alt="frontend"
          />
          <div className="about__content">
            <p>Frontend Developer</p>
            <ul className="purple-star">
              <li>I can build fully responsive website.</li>
              <li>Proficient in HTML5 and CSS3.</li>
              <li>Can work in React.</li>
              <li>Knows state management in Redux.</li>
              <li>I can integrate payment gateways.</li>
            </ul>
          </div>
        </div>
        <div className="about__details">
          <div className="about__content">
            <p>Backend Developer</p>
            <ul className="">
              <li>Proficient in JavaScript (ES6+) syntax.</li>
              <li>
                <span>Strong understanding of Node.js</span>
              </li>
              <li>Expertise in Express.js.</li>
              <li>Knowledge of MongoDB database.</li>
              <li>Can implement auth using JWT or OAuth.</li>
            </ul>
          </div>
          <img className="about__img" src="/about/backend.png" alt="backend" />
        </div>
        <div className="about__details">
          <img className="about__img" src="/about/extra.png" alt=" extra" />
          <div className="about__content">
            <p>What Else?</p>
            <ul className="green-star">
              <li>I know how to use Git.</li>
              <li>I know typescript.</li>
              <li>Knows hosting in AWS EC2.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
