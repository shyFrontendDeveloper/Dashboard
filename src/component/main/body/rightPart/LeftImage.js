import React from 'react'
import rightImage from '../../../MobileApp/APP UPLOAD REQUIREMENTS/7-Dark Mode.png'

const RightImage = () => {
  return (
    <div>
      <img style={rightImageStyle} src={rightImage} alt='ima'/>
    </div>
  )
}

export default RightImage

const rightImageStyle = {
    // minWidth: "250px",
    width: "320px",
    maxHeight: "250px",
    borderRadius: "10px",
    border: "none",
    
}