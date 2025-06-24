import React, { useState, useEffect, useRef, useContext } from "react";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";
import { themeContext } from "../../Context";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Common props for each Link
  const linkProps = {
    spy: true,
    smooth: true,
    onClick: () => setMenuOpen(false),
    activeClass: "active",
  };

  return (
    <div 
      className="n-wrapper" 
      id="Navbar"
      style={{ 
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black"
      }}
    >
      {/* Left side */}
      <div className="n-left">
        <div 
          className="n-name"
          style={{ color: darkMode ? "white" : "black" }}
        >
          Ghouse
        </div>
        <Toggle />
      </div>

      {/* Hamburger / Close Icon */}
      <div
        style={{ color: darkMode ? "white" : "black" }}
        className="n-hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </div>

      {/* Slide-out Menu */}
      <nav 
        className={`n-right ${menuOpen ? "open" : ""}`} 
        ref={menuRef}
        style={{ 
          backgroundColor: darkMode ? "black" : "white",
          color: darkMode ? "white" : "black"
        }}
      >
        <ul className="n-list">
          <li>
            <Link 
              to="Navbar" 
              {...linkProps}
              style={{ color: darkMode ? "white" : "black" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="services" 
              {...linkProps}
              style={{ color: darkMode ? "white" : "black" }}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="works" 
              {...linkProps}
              style={{ color: darkMode ? "white" : "black" }}
            >
              Projects
            </Link>
          </li>
        </ul>

        <Link to="contact" {...linkProps}>
          <button 
            className="button n-button"
          >
            Contact
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;