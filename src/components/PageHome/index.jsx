import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class PageHome extends Component {
  render() {
    return (
      <div className="container" style={{ padding: "20px" }}>
        <div className="row">
          <div className="col-sm">
            <h1>What do you want to study?</h1>
            <p>Select a section below.</p>
            <p>
              <NavLink to="/all">
                <button type="button" class="btn btn-outline-success btn-lg">
                  All Terms
                </button>
              </NavLink>
            </p>
            <p>
              <NavLink to="/alphabet">
                <button type="button" class="btn btn-outline-success btn-lg">
                  Alphabet
                </button>
              </NavLink>
            </p>
            <p>
              <NavLink to="/numbers">
                <button type="button" class="btn btn-outline-success btn-lg">
                  Numbers 0 to 100
                </button>
              </NavLink>
            </p>
            <p>
              <NavLink to="/colors">
                <button type="button" class="btn btn-outline-success btn-lg">
                  Colors
                </button>
              </NavLink>
            </p>
            <p>
              <NavLink to="/lesson1">
                <button type="button" class="btn btn-outline-success btn-lg">
                  Lesson 1
                </button>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
