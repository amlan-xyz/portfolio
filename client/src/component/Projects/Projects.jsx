import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Projects.css";
export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1 className="section__title">Projects</h1>
      <ul className="projects__list">
        <li className="project__item">
          <img
            src="/projects/E-commerce.png
          "
            alt="E-commerce "
            className="project__img"
          />
          <div className="project__body">
            <h3>Candyland (E-Commerce)</h3>
            <p>
              Candyland is an e-commerce web application built using MERN stack
              and integrated with Razorpay payment gateway for secure
              transaction.
            </p>
            <div className="project__links">
              <Link
                to="https://github.com/theweird0ne/e-commerce"
                className="project__link"
              >
                Code <FaGithub />
              </Link>
              <Link
                to="https://candyland-by-amlan.vercel.app/shop"
                className="project__link"
              >
                Live Demo <FaExternalLinkAlt />{" "}
              </Link>
            </div>
            <ul className="tech__used">
              <li>React</li>
              <li>Nodejs</li>
              <li>MongoDb</li>
            </ul>
          </div>
        </li>
        <li className="project__item">
          <img
            src="/projects/SocialMedia.png
          "
            alt="E-commerce "
            className="project__img"
          />
          <div className="project__body">
            <h3>WeShare (Social Media)</h3>
            <p>
              WeShare is an social media web application built using MERN stack,
              redux-toolkit and integrated with Cloudinary API to store images.
            </p>
            <div className="project__links">
              <Link
                to="https://github.com/theweird0ne/social-media-application"
                className="project__link"
              >
                Code <FaGithub />
              </Link>
              <Link
                to="https://we-share-v1.vercel.app"
                className="project__link"
              >
                Live Demo <FaExternalLinkAlt />{" "}
              </Link>
            </div>
            <ul className="tech__used">
              <li>React</li>
              <li>Nodejs</li>
              <li>MongoDb</li>
              <li>redux-toolkit</li>
              <li>cloudinary</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};
