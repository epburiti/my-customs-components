import styled from "styled-components";
interface DivProps {
  bodyIsVisible: Boolean;
}
export const Container = styled.div<DivProps>`
  box-shadow: 0 0 1rem 0 black;
  body {
    overflow: ${(props) => (props.bodyIsVisible ? "hidden" : "initial")};
  }
  header {
    background-color: var(--secondary);
  }

  header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: 980px;

    margin: auto;
  }

  header img {
    width: 7rem;
    /* margin-left: 2rem; */
    padding: 15px 0;
  }

  header nav ul {
    display: flex;
  }

  header nav ul li {
    list-style: none;
  }

  header nav ul li a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-size: 1.4rem;
    padding: 2.4rem;
    transition: all 250ms linear 0s;
  }

  header nav ul li a:hover {
    background: rgba(255, 255, 255, 0.15);
  }
  @media (max-width: 940px) {
    nav {
      display: none;
    }

    .one,
    .two,
    .three {
      background-color: #fff;
      height: 5px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;
    }

    .menu-toggle {
      width: 40px;
      height: 30px;
      margin-right: 20px;
    }

    /* fullscreen */
    .menu-section {
      cursor: pointer;
    }
    .menu-section.on {
      position: absolute;
      top: 0;
      left: 0;

      width: 100vw;
      height: 100vh;

      background-color: var(--secondary);

      z-index: 10;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .menu-section.on nav {
      display: block;
    }

    .menu-section.on .menu-toggle {
      position: absolute;
      right: 25px;
      top: 15px;
    }

    .menu-section.on .menu-toggle .one {
      transform: rotate(45deg) translate(7px, 7px);
    }

    .menu-section.on .menu-toggle .two {
      opacity: 0;
    }

    .menu-section.on .menu-toggle .three {
      transform: rotate(-45deg) translate(8px, -9px);
    }

    .menu-section.on nav ul {
      text-align: center;
      display: block;
    }

    .menu-section.on nav ul a {
      transition-duration: 0.5s;
      font-size: 3rem;
      line-height: 4rem;
      display: block;
    }
  }
`;
