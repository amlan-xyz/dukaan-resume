import { About } from "../../components/About/About";
import { Hero } from "../../components/Hero/Hero";
import { Highlight } from "../../components/Highlight/Highlight";
import { Projects } from "../../components/Projects/Projects";
import { Showcase } from "../../components/Showcase/Showcase";
import { Slider } from "../../components/Slider/MarqeeSlider";
import "./Home.css";
export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Slider />
      <About />
      <Projects />
      <Showcase />
      <Highlight />
    </div>
  );
};
