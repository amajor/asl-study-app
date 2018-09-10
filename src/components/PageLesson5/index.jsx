import React, { Component } from "react";
import Section from "../Section"
import aslLesson5 from '../../data/lesson5';

class PageLesson5 extends Component {
  render() {
    return (
      <Section section={aslLesson5()} />
    );
  }
}

export default PageLesson5;
