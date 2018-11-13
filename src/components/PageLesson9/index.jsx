import React, { Component } from "react";
import Section from "../Section"
import aslLesson9 from '../../data/lesson9';

class PageLesson9 extends Component {
  render() {
    return (
      <Section section={aslLesson9()} />
    );
  }
}

export default PageLesson9;
