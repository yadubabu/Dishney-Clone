import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="./images/logo.svg" />
      <NavMenu>
        <a>
          <img src="./images/home-icon.svg" />
          <span>Home</span>
        </a>
        <a>
          <img src="./images/search-icon.svg" />
          <span>Search</span>
        </a>
        <a>
          <img src="./images/watchlist-icon.svg" />
          <span>Watchlist</span>
        </a>
        <a>
          <img src="./images/original-icon.svg" />
          <span>Originals</span>
        </a>
        <a>
          <img src="./images/movie-icon.svg" />
          <span>Movies</span>
        </a>
        <a>
          <img src="./images/series-icon.svg" />
          <span>Series</span>
        </a>
      </NavMenu>
      <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmS9BcAn2ZpJxnz1Ll6Fw_tHT-V4whQYftg&usqp=CAU" />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 70px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    /* &:hover {
      text-decoration: underline;
    } */
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.32px;
      padding-left: 1px;
      padding-top: 2px;
      position: relative;
      &:after {
        content: "";
        background-color: white;
        height: 2px;
        left: 0;
        right: 0;
        bottom: -6px;
        position: absolute;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
const User = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
`;
