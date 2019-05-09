import React, { Component } from 'react'
import Plant from './Plant'
import directory from './directory'
import './Plant.css'

class Home extends Component {
  render() {
    const plants = directory.map(plant => (
      <Plant key={plant.id}
        id={plant.id}
        img={plant.img}
        name={plant.name}
      />
    ))
    return (
        <div className="parentPlant">
          {plants}
        </div>
    )
  }
}

export default Home