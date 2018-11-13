import React, { Component } from "react";
import Section from "../Section"
import aslLesson11 from '../../data/lesson11';

class PageLesson11 extends Component {
  render() {
    return (
      <Section section={aslLesson11()} />
    );
  }
}

export default PageLesson11;
