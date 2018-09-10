import React, { Component } from "react";
import Section from "../Section"
import aslLesson4 from '../../data/lesson4';

class PageLesson4 extends Component {
  render() {
    return (
      <Section section={aslLesson4()} />
    );
  }
}

export default PageLesson4;
