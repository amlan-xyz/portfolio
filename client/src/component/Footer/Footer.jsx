import { MdOutlineMail } from "react-icons/md";
import "./Footer.css";
export const Footer = () => {
  return (
    <section className="footer">
      Built using ReactJS by Amlanjyoti Saikia.
      <br />
      <span>
        <MdOutlineMail className="footer__icon" />
        <a href="mailto:heyamlan19@gmail.com">heyamlan19@gmail.com</a>
      </span>
    </section>
  );
};
