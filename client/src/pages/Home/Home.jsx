import { Hero } from "../../components/Hero/Hero";
import { Slider } from "../../components/Slider/MarqeeSlider";
import "./Home.css";
export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Slider />
    </div>
  );
};
