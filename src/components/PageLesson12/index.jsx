import React, { Component } from "react";
import Section from "../Section"
import aslLesson12 from '../../data/lesson12';

class PageLesson12 extends Component {
  render() {
    return (
      <Section section={aslLesson12()} />
    );
  }
}

export default PageLesson12;
