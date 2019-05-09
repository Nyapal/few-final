import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import About from './About'
import Contact from './Contact'
import Home from './Home'
import PlantDetail from './PlantDetail'
import Nav from './Nav/Nav'

class App extends Component {
  render () {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="App">
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/plant/:id" component={PlantDetail} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
