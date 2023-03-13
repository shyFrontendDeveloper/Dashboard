import React from 'react'
import rightImage from '../../../../ALL LANDING PAGES/Mobile App Ad@2x.png'

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