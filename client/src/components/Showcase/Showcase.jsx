import "./Showcase.css";

export const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase__body container">
        <h1>Get a glimpse of my designed websites</h1>
        <div className="showcase__list">
          <img className="showcase__item" src="/designs/weshare.png" alt="" />
          <img className="showcase__item" src="/designs/candyland.png" alt="" />
          <img className="showcase__item" src="/designs/booking.png" alt="" />
        </div>
      </div>
    </div>
  );
};
