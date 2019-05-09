import React from 'react';
import {Link} from 'react-router-dom'
import './Plant.css'

const Plant = props => {
  return (
    <div className="childPlant">
      <img className="plantImg" alt={props.name} src={props.img} />
      <Link to={`plant/${props.id}`} className="nav-link"> 
        {props.name}
      </Link>
      <h3> {props.desc} </h3>
    </div>
  )
}

export default Plant