import React from 'react'
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const LeftContent = () => {
  return (
    <div style={leftStyle}>
      <SystemSecurityUpdateGoodOutlinedIcon />
      <p style={{textDecoration: "underline", textTransform: "capitalize"}}>lagos mainland</p>
      <p style={{backgroundColor: "#FECF8D", padding: "0 5px", marginLeft: 5}}>HQ</p>
      <ExpandMoreOutlinedIcon />
    </div>
  )
}

export default LeftContent


const leftStyle = {
    display: "flex",
}