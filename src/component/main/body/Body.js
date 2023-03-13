import React from 'react'
import LeftPart from './leftPart/LeftPart'
import RightPart from './rightPart/RightPart'

const Body = () => {
  return (
    <div style={bodyStyle}>
      <LeftPart /> 
      <RightPart />
    </div>
  )
}

export default Body


const bodyStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 350px",
    marginLeft: 240,
    padding: "20px",
}