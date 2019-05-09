import React from 'react'
import directory from './directory'

const PlantDetail = ({match}) => {
  let plantId = [match.params.id]
  return (
    <div>
      <h1>{ directory[plantId].name }</h1>
      <img alt={directory[plantId].name} src={directory[plantId].img} className="plantDetailImg"/>
      <p> { directory[plantId].desc }</p>
    </div>
  )
}

export default PlantDetail