import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class PageNavigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand" >
          <NavLink to="/">
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
                <NavLink to="/all">
                  All Terms
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/alphabet">
                  Alphabet
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <NavLink to="/numbers">
                  Numbers
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
