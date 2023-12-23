import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const getActiveStyle = ({ isActive }) => ({
    display: isActive ? "block" : "",
    padding: isActive ? ".5rem" : "",
    margin: isActive ? "0 0.5rem" : "",
    borderRadius: isActive ? ".5rem" : "",
    backgroundColor: isActive ? "#5c02a7" : "",
  });
  return (
    <nav className="navbar">
      <NavLink className="nav__header" to="/">
        <FaCode className="nav__logo" /> dev.amlan
      </NavLink>
      <div onClick={() => setShowMenu(!showMenu)} className="menu">
        {showMenu ? <MdClose /> : <MdOutlineMenu />}
      </div>
      <ul className={showMenu ? "nav__links open" : "nav__links"}>
        <li className="nav__item">
          {" "}
          <NavLink style={getActiveStyle} to="/" className="nav__link">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          {" "}
          <NavLink style={getActiveStyle} to="/blogs" className="nav__link">
            Blogs
          </NavLink>
        </li>
        <li className="nav__item">
          {" "}
          <NavLink style={getActiveStyle} to="/contact" className="nav__link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
