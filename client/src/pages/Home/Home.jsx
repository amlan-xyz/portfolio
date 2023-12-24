import { Experience } from "../../component/Experience/Experience";
import { Hero } from "../../component/Hero/Hero";
import "./Home.css";
export const Home = () => {
  return (
    <div className="home__container">
      <Hero />
      <Experience />
    </div>
  );
};
