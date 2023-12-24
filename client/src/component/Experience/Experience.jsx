import "./Experience.css";
export const Experience = () => {
  return (
    <section className="expirence__section">
      <h1>Work Experience</h1>
      <ul className="expirence__list">
        <li className="expirence__item">
          <div className="expirence__header">
            <h3>Lead Student Developer</h3>
            <span>2022 - 2023</span>
          </div>
          <p>
            @ Collaborative Project, NERIST & Arunachal Pradesh Police Dept.
          </p>
          <ul className="work__done-list">
            <li className="work__done-item">
              Developed a full-stack web application to track progress of
              ongoing investigation of FIR's and generate SOP(Standard Operating
              Porcedures) for better management.
            </li>
            <li className="work__done-item">
              Created dynamic web pages, graphs, tables using EJS, Bootstrap for
              visual analysis.
            </li>
            <li className="work__done-item">
              Using Nodejs and Mongodb created an API to handle user and
              SOP(Standard Operating Porcedures) creation.
            </li>
            <li className="work__done-item">
              Deployed the application using AWS EC2 instance by using
              technologies like PM2 and NGINX.
            </li>
          </ul>
          <ul className="tech__used">
            <li>HTML</li>
            <li>Javascript</li>
            <li>CSS3</li>
            <li>EJS</li>
            <li>Nodejs</li>
            <li>MongoDb</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
