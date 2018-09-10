import React, { Component } from "react";
import Section from "../Section"
import aslLesson2 from '../../data/lesson2';

class PageLesson2 extends Component {
  render() {
    return (
      <Section section={aslLesson2()} />
    );
  }
}

export default PageLesson2;
