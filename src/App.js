import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import PageHome from './components/PageHome';
import PageAllTerms from './components/PageAllTerms';
import PageAlphabet from './components/PageAlphabet';
import PageNumbers from './components/PageNumbers';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container" style={{ padding: "20px" }}>
          <div className="row">
            <div className="col-sm">
              <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/all">All Terms</NavLink></li>
                <li><NavLink to="/alphabet">Alphabet</NavLink></li>
                <li><NavLink to="/numbers">Numbers</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <Route exact path="/" component={PageHome}/>
              <Route path="/all" component={PageAllTerms}/>
              <Route path="/alphabet" component={PageAlphabet}/>
              <Route path="/numbers" component={PageNumbers}/>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
