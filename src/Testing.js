import React from 'react'

// const {x1,y1} = props;

export default function Testing(props) {

let b= 10;
props.x = props.x + 10;
  return (
    <div>
        {props.x + 16} {b + 3}
    </div>
  )
}
