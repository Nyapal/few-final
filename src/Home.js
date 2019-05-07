import React, { Component } from 'react'
import directory from './directory'
import Plant from './Plant'

class Home extends Component {
  render() {
    const plants = directory.map(plant => (
      <Plant 
        name={plant.name}
        desc={plant.desc}
        img={plant.img}
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