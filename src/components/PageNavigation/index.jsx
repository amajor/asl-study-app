import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class PageNavigation extends Component {
  render() {
    const navLinkStyle = {
      textDecoration: 'none',
      color: 'rgba(0,0,0,0.5)',
      cursor: 'pointer',
    };
    const navDropdownStyle = {
      textDecoration: 'none',
      color: '#212529',
    };

    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-cyan"
        style={{backgroundColor: "#e3f2fd"}}
      >
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
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                style={navLinkStyle}
              >
                Categories
              </a>
              <div class="dropdown-menu">
                <span className="nav-link">
                  <NavLink to="/alphabet" style={navDropdownStyle}>
                    Alphabet
                  </NavLink>
                </span>
                <span className="nav-link">
                  <NavLink to="/classifiers" style={navDropdownStyle}>
                    Classifiers
                  </NavLink>
                </span>
                <span className="nav-link">
                  <NavLink to="/colors" style={navDropdownStyle}>
                    Colors
                  </NavLink>
                </span>
                <span className="nav-link">
                  <NavLink to="/numbers" style={navDropdownStyle}>
                    Numbers
                  </NavLink>
                </span>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                style={navLinkStyle}
              >
                ASL 1
              </a>
              <div class="dropdown-menu">
                <span class="dropdown-item">
                  <NavLink to="/lesson1" style={navDropdownStyle}>
                    Lesson 1
                  </NavLink>
                </span>
                <span className="dropdown-item">
                  <NavLink to="/lesson2" style={navDropdownStyle}>
                    Lesson 2
                  </NavLink>
                </span>
                <span className="dropdown-item">
                  <NavLink to="/lesson3" style={navDropdownStyle}>
                    Lesson 3
                  </NavLink>
                </span>
                <span className="dropdown-item">
                  <NavLink to="/lesson4" style={navDropdownStyle}>
                    Lesson 4
                  </NavLink>
                </span>
                <span className="dropdown-item">
                  <NavLink to="/lesson5" style={navDropdownStyle}>
                    Lesson 5
                  </NavLink>
                </span>
                <span className="dropdown-item">
                  <NavLink to="/lesson6" style={navDropdownStyle}>
                    Lesson 6
                  </NavLink>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default PageNavigation;
