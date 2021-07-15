import React from "react";
import nbm from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={nbm.navBar}>
      <div className={nbm.navBar__container}>
        <div className={nbm.navBar__box}>
          <div>
            <NavLink to="/time">Время</NavLink>
          </div>
          <div>
            <NavLink to="/weather">Погода</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
