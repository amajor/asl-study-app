import React, { Component } from "react";
import Section from "../Section"
import aslLesson6 from '../../data/lesson6';

class PageLesson6 extends Component {
  render() {
    return (
      <Section section={aslLesson6()} />
    );
  }
}

export default PageLesson6;
