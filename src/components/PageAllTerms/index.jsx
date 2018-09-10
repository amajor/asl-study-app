import React, { Component } from "react";
import Section from "../Section"
import aslAlphabet from '../../data/alphabet';
import aslNumbers from '../../data/numbers';
import aslLesson1 from '../../data/lesson1';

class PageAllTerms extends Component {
  render() {
    const alphabetArray = aslAlphabet().vocabulary;
    const numberArray = aslNumbers().vocabulary;
    const lessonOneArray = aslLesson1().vocabulary;
    const allTermsArray = alphabetArray.concat(numberArray)
      .concat(lessonOneArray);

    const allTermsSection = {
      name: "All Vocabulary Terms",
      description: "A combination of all vocabulary terms available.",
      vocabulary: allTermsArray,
    }

    return (
      <Section section={allTermsSection} />
    );
  }
}

export default PageAllTerms;
