import React, { Component } from "react";
import Section from "../Section"
import aslAlphabet from '../../data/alphabet';
import aslNumbers from '../../data/numbers';
import aslClassifiers from '../../data/classifiers';
import aslLesson1 from '../../data/lesson1';
import aslLesson2 from '../../data/lesson2';
import aslLesson3 from '../../data/lesson3';
import aslLesson4 from '../../data/lesson4';
import aslLesson5 from '../../data/lesson5';
import aslLesson6 from '../../data/lesson6';

class PageAllTerms extends Component {
  render() {
    const alphabetArray = aslAlphabet().vocabulary;
    const numberArray = aslNumbers().vocabulary;
    const classifierArray = aslClassifiers().vocabulary;
    const lessonOneArray = aslLesson1().vocabulary;
    const lessonTwoArray = aslLesson2().vocabulary;
    const lessonThreeArray = aslLesson3().vocabulary;
    const lessonFourArray = aslLesson4().vocabulary;
    const lessonFiveArray = aslLesson5().vocabulary;
    const lessonSixArray = aslLesson6().vocabulary;

    const allTermsArray = alphabetArray.concat(numberArray)
      .concat(classifierArray)
      .concat(lessonOneArray)
      .concat(lessonTwoArray)
      .concat(lessonThreeArray)
      .concat(lessonFourArray)
      .concat(lessonFiveArray)
      .concat(lessonSixArray);

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
