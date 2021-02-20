import React, { useState } from "react";
import Logo from "./../../assets/logo.png";
import { Container } from "./styles";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [hideBody, setHideBody] = useState(false);
  return (
    <Container bodyIsVisible={hideBody}>
      <header>
        <div className="container">
          <img src={Logo} alt="Logo" />
          <div className={"menu-section" + (hideBody ? " on" : "")}>
            <div
              className="menu-toggle"
              onClick={() => {
                setHideBody(!hideBody);
              }}
            >
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">Starter</a>
                </li>
                <li>
                  <a href="#">Bootcamp</a>
                </li>
                <li>
                  <a href="#">Comunidade</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default NavBar;
