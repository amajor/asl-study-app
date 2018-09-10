import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import PageNavigation from './components/PageNavigation';
import PageHome from './components/PageHome';
import PageAllTerms from './components/PageAllTerms';
import PageAlphabet from './components/PageAlphabet';
import PageNumbers from './components/PageNumbers';
import PageColors from './components/PageColors';
import PageClassifiers from './components/PageClassifiers';
import PageLesson1 from './components/PageLesson1';
import PageLesson2 from './components/PageLesson2';
import PageLesson3 from './components/PageLesson3';
import PageLesson4 from './components/PageLesson4';
import PageLesson5 from './components/PageLesson5';
import PageLesson6 from './components/PageLesson6';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <PageNavigation />

          <div className="container" style={{ padding: "20px" }}>
            <div className="row">
              <div className="col-sm">
                <Route exact path="/" component={PageHome}/>
                <Route path="/all" component={PageAllTerms}/>
                <Route path="/alphabet" component={PageAlphabet}/>
                <Route path="/numbers" component={PageNumbers}/>
                <Route path="/colors" component={PageColors}/>
                <Route path="/classifiers" component={PageClassifiers}/>
                <Route path="/lesson1" component={PageLesson1}/>
                <Route path="/lesson2" component={PageLesson2}/>
                <Route path="/lesson3" component={PageLesson3}/>
                <Route path="/lesson4" component={PageLesson4}/>
                <Route path="/lesson5" component={PageLesson5}/>
                <Route path="/lesson6" component={PageLesson6}/>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
