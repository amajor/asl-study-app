import React, { Component } from "react";
import Section from "../Section"
import aslColors from '../../data/colors';

class Colors extends Component {
  render() {
    return (
      <Section section={aslColors()} />
    );
  }
}

export default Colors;
