import React from 'react'
import img from '../images'




const SideBtn = () => {
  return (
    <div>
      <button style={sideBtnStyle}></button>
    </div>
  )
}

export default SideBtn


const sideBtnStyle = {
    borderRadius: "100px",
    border: ".5px solid grey",
    width: "25px",
    height: "25px",
    margin: "7px 0"
}
