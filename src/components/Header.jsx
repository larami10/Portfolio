import { SocialIcon } from "react-social-icons";
import VerticalNav from "./VerticalNav";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <h1>Luis Ramirez</h1>
      <h2>Software Engineer</h2>
      <p>
        I build responsive applications to improve user experience and optimize
        performance.
      </p>
      <VerticalNav />
      <div>
        <SocialIcon
          target="_blank"
          rel="noreferrer"
          url="https://github.com/larami10/"
          bgColor="transparent"
          fgColor="#94a3b8"
        />
        <SocialIcon
          target="_blank"
          rel="noreferrer"
          url="https://www.linkedin.com/in/luis-ramirez-developer/"
          bgColor="#94a3b8"
          fgColor="transparent"
          className="linkedin"
        />
      </div>
    </>
  );
};

export default Header;
