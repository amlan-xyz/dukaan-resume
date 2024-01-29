import "./Showcase.css";

export const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase__body container">
        <h1>Get a glimpse of my designed websites</h1>
        <div className="showcase__list">
          <img
            className="showcase__item"
            src="/designs/weshare.png"
            alt="we-share"
          />
          <img
            className="showcase__item"
            src="/designs/candyland.png"
            alt="candyland"
          />
          <img
            className="showcase__item"
            src="/designs/booking.png"
            alt="booking"
          />
        </div>
      </div>
    </div>
  );
};
