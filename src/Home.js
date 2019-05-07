import React, { Component } from 'react'
import Plant from './Plant'
import './Home.css'
import directory from './directory'

class Home extends Component {
  render() {
    const plants = directory.map(plant => (
      <Plant 
        img={plant.img}
        name={plant.name}
      // desc={plant.desc}
      />
    ))
    return (
      <div>
        {plants}
      </div>
    )
  }
}

export default Home