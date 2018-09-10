import React, { Component } from "react";
import Section from "../Section"
import aslLesson1 from '../../data/lesson1';

class PageLesson1 extends Component {
  render() {
    return (
      <Section section={aslLesson1()} />
    );
  }
}

export default PageLesson1;
