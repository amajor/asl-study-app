import React, { Component } from "react";
import Section from "../Section"
import aslNumbers from '../../data/numbers';

class PageNumbers extends Component {
  render() {
    return (
      <Section section={aslNumbers()} />
    );
  }
}

export default PageNumbers;
