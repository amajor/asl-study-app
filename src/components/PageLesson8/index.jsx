import React, { Component } from "react";
import Section from "../Section"
import aslLesson8 from '../../data/lesson8';

class PageLesson8 extends Component {
  render() {
    return (
      <Section section={aslLesson8()} />
    );
  }
}

export default PageLesson8;
