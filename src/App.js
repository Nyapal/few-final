import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import About from './About'
import Home from './Home'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Link to="/" className="nav-link"> Home </Link>
          <Link to="/about" className="nav-link"> About </Link>
        </div>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
