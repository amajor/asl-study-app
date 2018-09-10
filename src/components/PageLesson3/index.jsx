import React, { Component } from "react";
import Section from "../Section"
import aslLesson3 from '../../data/lesson3';

class PageLesson3 extends Component {
  render() {
    return (
      <Section section={aslLesson3()} />
    );
  }
}

export default PageLesson3;
