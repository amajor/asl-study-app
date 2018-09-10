import React, { Component } from "react";
import Section from "../Section"
import aslAlphabet from '../../data/alphabet';
import aslNumbers from '../../data/numbers';

class PageAllTerms extends Component {
  render() {
    const alphabetArray = aslAlphabet().vocabulary;
    const numberArray = aslNumbers().vocabulary;
    const allTermsArray = alphabetArray.concat(numberArray);

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
