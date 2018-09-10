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
import PageLesson1 from './components/PageLesson1';

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
                <Route path="/lesson1" component={PageLesson1}/>
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
