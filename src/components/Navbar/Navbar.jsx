import React, { useState } from "react";
import "./Navbar.css";
import images from "../../constants/images";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="navbar logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} className="toggle-menu" onClick={()=>setToggleMenu(true)}/>
        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay slide-bottom flex__center">
          <MdOutlineRestaurantMenu
            fontSize={27}
            color="#fff"
            className="overlay-close"
            onClick={()=>setToggleMenu(false)}
          />
          <ul className="app__smallscreen-links">
            <li className="p__opensans" onClick={()=>setToggleMenu(false)}>
              <a href="#home">Home</a>
            </li>
            <li className="p__opensans" onClick={()=>setToggleMenu(false)}>
              <a href="#about">About</a>
            </li>
            <li className="p__opensans" onClick={()=>setToggleMenu(false)}>
              <a href="#menu">Menu</a>
            </li>
            <li className="p__opensans" onClick={()=>setToggleMenu(false)}>
              <a href="#awards">Awards</a>
            </li>
            <li className="p__opensans" onClick={()=>setToggleMenu(false)}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
