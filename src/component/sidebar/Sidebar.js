import React from 'react'
import SideBtn from '../buttons/SideBtn'


const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <div>
        <SideBtn img="/brand drive logo mark-main-01.svg" />
        <SideBtn />
        <SideBtn />
        <SideBtn />
        <SideBtn />
      </div>
      <div style={buttonBtn}>
        <SideBtn />
        <SideBtn />
        <SideBtn />
        <SideBtn />
      </div>
    </div>
  )
}

export default Sidebar



const sidebarStyle = {
    backgroundColor: "#F4F5F9",
    position: "fixed",
    height: "100%",
    padding: "0 10px",
    display: "flex",
}


const buttonBtn = {
    position: "absolute",
    bottom: "0",
    paddingBottom: "20px"
}
