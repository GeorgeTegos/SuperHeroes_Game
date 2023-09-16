import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/NavStyle.css";

const Banner = styled.div`
  background-color: green;
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const newRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      document.getElementById("menu-bar").classList.remove("change");
      document.getElementById("nav").classList.remove("change");
      document.getElementById("menu-bg").classList.remove("change-bg");
      setMenuOpen(false);
    }
  };

  function menuOnClick() {
    if (menuOpen == false) {
      document.getElementById("menu-bar").classList.toggle("change");
      document.getElementById("nav").classList.toggle("change");
      document.getElementById("menu-bg").classList.toggle("change-bg");
      setMenuOpen(true);
    } else {
      document.getElementById("menu-bar").classList.remove("change");
      document.getElementById("nav").classList.remove("change");
      document.getElementById("menu-bg").classList.remove("change-bg");
      setMenuOpen(false);
    }
  }
  console.log(menuOpen);

  return (
    <>
      <Banner>
        Something Here <hr />
      </Banner>
      <div id="menu">
        {/* <div id="menu" ref={newRef}>  */}
        <div
          id="menu-bar"
          onClick={menuOnClick}
          ref={newRef}
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
