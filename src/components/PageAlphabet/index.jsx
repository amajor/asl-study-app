import React, { Component } from "react";
import Section from "../Section"
import aslAlphabet from '../../data/alphabet';

class Alphabet extends Component {
  render() {
    return (
      <Section section={aslAlphabet()} />
    );
  }
}

export default Alphabet;
