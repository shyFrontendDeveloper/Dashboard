import React from 'react'
import img from '../images'




const SideBtn = ({avatar}) => {
  return (
    <div>
      <button style={sideBtnStyle}>
        <img style={imgStyle} src={avatar} alt="avatar" />
      </button>
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

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
}