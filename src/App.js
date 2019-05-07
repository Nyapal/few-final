import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import About from './About'
import Home from './Home'
import Nav from './Nav/Nav'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
