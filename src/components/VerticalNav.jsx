import { Nav, NavLink } from "react-bootstrap";
import "../styles/VerticalNav.css";

const VerticalNav = () => {
  return (
    <Nav className="hidden flex-column">
      <NavLink href="#about">
        <span className="nav-indicator"></span>
        <span className="nav-text">About</span>
      </NavLink>
      <NavLink href="#experience">
        <span className="nav-indicator"></span>
        <span className="nav-text">Tech Experience</span>
      </NavLink>
      <NavLink href="#projects">
        <span className="nav-indicator"></span>
        <span className="nav-text">Projects</span>
      </NavLink>
    </Nav>
  );
};

export default VerticalNav;
