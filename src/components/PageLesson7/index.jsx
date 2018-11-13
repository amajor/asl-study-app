import React, { Component } from "react";
import Section from "../Section"
import aslLesson7 from '../../data/lesson7';

class PageLesson7 extends Component {
  render() {
    return (
      <Section section={aslLesson7()} />
    );
  }
}

export default PageLesson7;
