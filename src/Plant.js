import React from 'react';

const Plant = props => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h3> {props.desc} </h3>
      <img alt={props.name} src={props.img} />
    </div>
  )
}

export default Plant