import styled from "styled-components";

interface DivProps {
  itsFixed: Boolean;
}
export const Container = styled.div<DivProps>`
  .hamburg-icon {
    margin-left: 11rem;
    width: 25.5rem;
  }
  ul {
    height: 100%;

    .logOut {
      bottom: 2rem !important;
      position: absolute !important;
    }
    li {
      a {
        display: flex !important;
        align-items: center !important;
        height: 4rem !important;
        span {
          margin-left: 2.5rem;
        }
      }
    }
  }
  .logo-container {
    height: 35%;
    width: 90%;
    margin: 0 auto;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      img {
        width: 80%;
      }
    }
  }

  .icon-custom {
    margin-left: 2.4rem;
    cursor: pointer;
  }
  .custom-div {
    position: absolute;
    margin-left: 56px;
    top: 3px;
  }

  /* ScrolBar  */
  .scrollbar {
    height: 90%;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    border-top: 1px solid #fff;
  }

  /* Scrollbar Style */

  #style-1::-webkit-scrollbar-track {
    border-radius: 2px;
  }

  #style-1::-webkit-scrollbar {
    width: 5px;
    background-color: #f7f7f7;
  }

  #style-1::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #bfbfbf;
  }
  /* Scrollbar End */

  .fa-lg {
    font-size: 1em;
  }
  .fa {
    position: relative;
    display: table-cell;
    width: 55px;
    height: 36px;
    text-align: center;
    top: 12px;
    font-size: 20px;
  }

  .main-menu:hover,
  nav.main-menu.expanded {
    width: 18rem;
    overflow: hidden;
    opacity: 1;
  }

  .main-menu {
    background: var(--secondary);
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    width: ${(props) => (props.itsFixed ? "18rem" : "6rem")};
    overflow: hidden;
    -webkit-transition: width 0.2s linear;
    transition: width 0.2s linear;
    -webkit-transform: translateZ(0) scale(1, 1);
    box-shadow: 1px 0 15px rgba(0, 0, 0, 0.07);
    opacity: 1;
  }

  .main-menu li > a {
    position: relative;
    width: 25.5rem;
    display: table;
    color: #8a8a8a;
    font-size: 13px;
    text-decoration: none;
    -webkit-transform: translateZ(0) scale(1, 1);
    -webkit-transition: all 0.14s linear;
    transition: all 0.14s linear;
    font-family: "Strait", sans-serif;

    text-shadow: 1px 1px 1px #fff;
  }

  .main-menu .nav-icon {
    position: relative;
    display: table-cell;
    width: 55px;
    height: 36px;
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
  }

  .main-menu .nav-text {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    /* width: 190px; */
    font-family: "Titillium Web", sans-serif;
  }

  .main-menu .share {
  }

  .main-menu .fb-like {
    left: 180px;
    position: absolute;
    top: 15px;
  }

  .no-touch .scrollable.hover {
    overflow-y: hidden;
  }

  .no-touch .scrollable.hover:hover {
    overflow-y: auto;
    overflow: visible;
  }

  /* Logo Hover Property */

  .settings:active,
  settings:focus {
    background: url(https://s3.postimg.org/bqfooag4z/startific.jpg);
    -webkit-transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
    -moz-transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
    -o-transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
    transition: all 0.1s ease-in-out, width 0, height 0, top 0, left 0;
  }

  a:hover,
  a:focus {
    text-decoration: none;
    border-left: 0px solid #f7f7f7;
  }

  nav {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  nav ul,
  nav li {
    outline: 0;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  /* Darker element side menu End*/

  .main-menu li:hover > a,
  nav.main-menu li.active > a,
  .dropdown-menu > li > a:hover,
  .dropdown-menu > li > a:focus,
  .dropdown-menu > .active > a,
  .dropdown-menu > .active > a:hover,
  .dropdown-menu > .active > a:focus,
  .no-touch .dashboard-page nav.dashboard-menu ul li:hover a,
  .dashboard-page nav.dashboard-menu ul li.active a {
    color: #fff;
    background-color: #00bbbb;
    text-shadow: 0px 0px 0px;
  }
  .area {
    float: left;
    background: #e2e2e2;
    width: 100%;
    height: 100%;
  }
  @font-face {
    font-family: "Titillium Web";
    font-style: normal;
    font-weight: 300;
    src: local("Titillium WebLight"), local("TitilliumWeb-Light"),
      url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff)
        format("woff");
  }
`;
