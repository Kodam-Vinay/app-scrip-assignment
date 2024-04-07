import "../css/Navbar.css";
import useDeviceResize from "../hooks/useDeviceResize";
import DesignLogo from "../svgs/DesignLogo";
import CartLogo from "../svgs/CartLogo";
import FourSquare from "../svgs/FourSquare";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoHeart } from "react-icons/go";
import UserLogo from "../svgs/UserLogo";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navigationLinks = [
  {
    id: "/shop",
    value: "SHOP",
  },
  {
    id: "/skills",
    value: "SKILLS",
  },
  {
    id: "/stories",
    value: "STORIES",
  },
  {
    id: "/about",
    value: "ABOUT",
  },
  {
    id: "/contact-us",
    value: "CONTACT US",
  },
];
const navigationLinksMobile = [
  {
    id: "/",
    value: "HOME",
  },
  {
    id: "/shop",
    value: "SHOP",
  },
];

const Navbar = () => {
  const size = useDeviceResize();
  const location = useLocation();
  const navigate = useNavigate();
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(true);
  const [activeNavigation, setActiveNavigation] = useState(
    size?.width < 768 ? navigationLinksMobile[0].id : navigationLinks[0].id
  );

  useEffect(() => {
    setActiveNavigation(location?.pathname);
  }, [location?.pathname]);
  const itemsValue =
    size?.width <= 500 ? 1 : size?.width > 500 && size?.width < 800 ? 2 : 3;
  return (
    <nav className="navbar">
      <div className="navbar-top-part-container">
        {Array(itemsValue)
          .fill("")
          .map((each, index) => (
            <div className="navbar-top-each-container" key={index}>
              <FourSquare />
              <span>Lorem ipsum dolor</span>
            </div>
          ))}
      </div>
      <div className="navbar-main-container">
        <div className="navbar-left-container">
          <button
            className="each-navbar-icon-button hide-navbar-icon"
            onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
          >
            <RxHamburgerMenu size={25} className="hide-navbar-icon" />
          </button>
          <button
            className="each-navbar-icon-button"
            onClick={() => navigate("/")}
          >
            <DesignLogo className="each-navbar-icon" />
          </button>
        </div>
        <span
          className="navbar-logo navigation-link-item"
          onClick={() => navigate("/")}
        >
          LOGO
        </span>

        <div className="right navbar-left-container">
          <button className="each-navbar-icon-button">
            <CiSearch size={25} className="each-navbar-icon" />
          </button>
          <button className="each-navbar-icon-button">
            <GoHeart size={25} className="each-navbar-icon" />
          </button>
          <button className="each-navbar-icon-button">
            <CartLogo className="each-navbar-icon" />
          </button>
          <button className="each-navbar-icon-button show-navbar-icon">
            <UserLogo className="each-navbar-icon show-navbar-icon" />
          </button>

          <select className="show-navbar-icon navbar-select-container">
            <option className="each-navbar-option" value="english">
              ENG
            </option>
            <option className="each-navbar-option" value="french">
              FRE
            </option>
          </select>
        </div>
      </div>
      <hr className="horizontal-rule hide-navbar-icon" />
      <div className="navigation-links-container show-navbar-icon">
        {navigationLinks.map((each, index) => (
          <span
            className={`navigation-link-item ${
              activeNavigation === each?.id ? "active-navigation-link-item" : ""
            }`}
            key={index}
            onClick={() => navigate(each?.id)}
          >
            {each?.value}
          </span>
        ))}
      </div>
      {isHamburgerClicked && (
        <div className="navigation-links-container-mobile hide-navbar-icon">
          {navigationLinksMobile.map((each, index) => (
            <span
              className={`navigation-link-item ${
                activeNavigation === each?.id
                  ? "active-navigation-link-item"
                  : ""
              }`}
              key={index}
              onClick={() => navigate(each?.id)}
            >
              {each?.value}
              {index % 2 === 0 && <span className="vertical-rule">|</span>}
            </span>
          ))}
        </div>
      )}
      <hr className="horizontal-rule show-navbar-icon" />
    </nav>
  );
};

export default Navbar;
