import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import About from './About'
import Home from './Home'
import LandingPage from './LandingPage';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
