import React, { useState } from "react";
import Logo from "./../../assets/logo.png";
import { Container } from "./styles";
import { FaHome, FaSignOutAlt, FaChartLine } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const SideBar = () => {
  const [itsFixed, setItsFixed] = useState(false);
  return (
    <Container itsFixed={itsFixed}>
      <nav className="main-menu">
        <div className="logo-container">
          <div className="hamburg-icon">
            <GiHamburgerMenu
              color={"#fff"}
              size={15}
              className="icon-custom"
              onClick={() => {
                setItsFixed(!itsFixed);
              }}
            />
          </div>
          <a className="logo" href="#">
            <img src={Logo} alt="Logo da empresa" />
          </a>
        </div>
        <div className="scrollbar" id="style-1">
          <ul>
            <li>
              <a href="#">
                <FaHome size={25} color={"#fff"} className="icon-custom" />
                <span className="nav-text">Home</span>
              </a>
            </li>

            <li>
              <a href="#">
                <FaChartLine size={25} color={"#fff"} className="icon-custom" />
                <span className="nav-text">DashBoard</span>
              </a>
            </li>

            <li className="logOut">
              <a href="#">
                <FaSignOutAlt
                  size={25}
                  color={"#fff"}
                  className="icon-custom"
                />
                <span className="nav-text">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default SideBar;
