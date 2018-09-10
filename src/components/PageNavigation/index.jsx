import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class PageNavigation extends Component {
  render() {
    const navLinkStyle = {
      textDecoration: 'none',
      color: '#ffffff',
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand" >
          <NavLink to="/" style={navLinkStyle}>
            ASL
          </NavLink>
        </span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/all" style={navLinkStyle}>
                  All Terms
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/alphabet" style={navLinkStyle}>
                  Alphabet
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/numbers" style={navLinkStyle}>
                  Numbers
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/colors" style={navLinkStyle}>
                  Colors
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/classifiers" style={navLinkStyle}>
                  Classifiers
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/lesson1" style={navLinkStyle}>
                  Lesson 1
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/lesson2" style={navLinkStyle}>
                  Lesson 2
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/lesson3" style={navLinkStyle}>
                  Lesson 3
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/lesson4" style={navLinkStyle}>
                  Lesson 4
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/lesson5" style={navLinkStyle}>
                  Lesson 5
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/lesson6" style={navLinkStyle}>
                  Lesson 6
                </NavLink>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default PageNavigation;
