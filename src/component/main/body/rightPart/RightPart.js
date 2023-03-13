import React from 'react'
import RightImage from './LeftImage'

const RightPart = () => {
  return (
    <div style={rightPartStyle}>
      <RightImage />
    </div>
  )
}

export default RightPart

const rightPartStyle = {
  diplay: "grid",
  gridTemplateRows: "1fr 300px 1fr",
  // flexDirection: "column",
  marginLeft: "20px"
}