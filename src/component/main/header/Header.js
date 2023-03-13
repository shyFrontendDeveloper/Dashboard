import React from 'react'
import LeftContent from './headerContent/LeftContent'
import RightContent from './headerContent/RightContent'

const Header = () => {
  return (
    <div style={headerStyle}>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Header


const headerStyle = {
    // width: "100%",
    height: "50px",
    backgroundColor: "f4f5f9",
    marginLeft: 240,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px 20px",
}