import React from "react";
import { Link } from "react-router-dom";
import "../styles/RightSideNavBar.css";

function RightSideNavBar() {
  function menuOnClick() {
    document.getElementById("menu-bar2").classList.toggle("change");
    document.getElementById("nav2").classList.toggle("change");
    document.getElementById("menu-bg2").classList.toggle("change-bg");
  }

  return (
    <>
      <div id="menu2">
        <div
          id="menu-bar2"
          onClick={menuOnClick}
        >
          <div
            id="bar4" //1
            className="bar"
          ></div>
          <div
            id="bar5" //2
            className="bar"
          ></div>
          <div
            id="bar6" //3
            className="bar"
          ></div>
        </div>
        <nav
          className="nav"
          id="nav2" //nav
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/play">PLAY</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="menu-bg"
        id="menu-bg2" //menu-bg
      ></div>
    </>
  );
}

export default RightSideNavBar;
