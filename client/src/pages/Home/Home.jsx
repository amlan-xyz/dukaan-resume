import { About } from "../../components/About/About";
import { Hero } from "../../components/Hero/Hero";
import { Projects } from "../../components/Projects/Projects";
import { Slider } from "../../components/Slider/MarqeeSlider";
import "./Home.css";
export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Slider />
      <About />
      <Projects />
    </div>
  );
};
