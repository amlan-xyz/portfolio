import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Hero.css";
export const Hero = () => {
  return (
    <section className="hero__container">
      <div className="hero__body">
        <div className="hero__details">
          <h1>
            Full-Stack <span className="highlight">MERN</span> Developer.
          </h1>
          <p>
            Hi, I'm Amlan. A Computer Science & Engineering Grad. and a
            passionate Web Developer.
          </p>
          <div className="hero__contact">
            <Link to="https://github.com/theweird0ne">
              <FaGithub className="hero__contact-icon" />
            </Link>
            <Link to="https://www.linkedin.com/in/amlanjyoti-saikia-5b280b1bb/">
              {" "}
              <FaLinkedin className="hero__contact-icon" />
            </Link>
          </div>
          <div className="skills">
            <h3>Tech Stack</h3>
            <ul>
              <li>
                <img src="/logo/html5.png" alt="html5 logo" />
              </li>
              <li>
                <img src="/logo/css3.png" alt="css3 logo" />
              </li>
              <li>
                <img src="/logo/javascript.png" alt="javascript logo" />
              </li>
              <li>
                <img src="/logo/react.png" alt="react logo" />
              </li>
              <li>
                <img src="/logo/nodejs.png" alt="node js logo" />
              </li>
              <li>
                <img src="/logo/mongodb.png" alt="mongodb logo" />
              </li>

              <li>
                <img src="/logo/typescript.png" alt="typescript logo" />
              </li>
            </ul>
          </div>
        </div>
        <img
          className="hero__img"
          src="hero.png"
          alt="Two people looking at a monitor"
        />
      </div>
    </section>
  );
};
