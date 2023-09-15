import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/NavStyle.css";

const HeaderWrapper = styled.div`
  background-color: green;
`;

function Header() {
  function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  return (
    <>
      <div id="menu">
        <div
          id="menu-bar"
          onClick={menuOnClick}
        >
          <div
            id="bar1"
            className="bar"
          ></div>
          <div
            id="bar2"
            className="bar"
          ></div>
          <div
            id="bar3"
            className="bar"
          ></div>
        </div>
        <nav
          className="nav"
          id="nav"
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
        id="menu-bg"
      ></div>
    </>
  );
}

export default Header;

{
  /* <HeaderWrapper>
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
      </HeaderWrapper> */
}
