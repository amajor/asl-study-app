import React, { Component } from "react";
import Section from "../Section"
import aslLesson10 from '../../data/lesson10';

class PageLesson10 extends Component {
  render() {
    return (
      <Section section={aslLesson10()} />
    );
  }
}

export default PageLesson10;
