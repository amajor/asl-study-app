import React, { Component } from "react";
import Section from "../Section"
import aslClassifiers from '../../data/classifiers';

class PageClassifiers extends Component {
  render() {
    return (
      <Section section={aslClassifiers()} />
    );
  }
}

export default PageClassifiers;
