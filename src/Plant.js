import React from 'react';
import './Plant.css'

const Plant = props => {
  return (
    <div>
      <img className="plantImg" alt={props.name} src={props.img} />
      <h3> {props.name} </h3>
      <h3> {props.desc} </h3>
    </div>
  )
}

export default Plant