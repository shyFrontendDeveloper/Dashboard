import React from 'react'
import SideBtn from '../buttons/SideBtn'
import Logo from '../brand drive logo mark-main-01.svg'
import Second from '../circle bg-small.svg'
import Third from '../../ALL LANDING PAGES/user.svg'
import Fouth from '../../ALL LANDING PAGES/Icon-Business ID.svg'
import Fifth from '../../ALL LANDING PAGES/Settings-user-profile.svg'
import Sixth from '../../ALL LANDING PAGES/add-plus-icon.svg'
import Seventh from '../../ALL LANDING PAGES/successful-illustration.svg'
import Eight from '../../ALL LANDING PAGES/More Information.svg'
import Nine from '../../ALL LANDING PAGES/More Details Info.svg'
import Ten from '../../ALL LANDING PAGES/biometric icon.svg'

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <div>
        <SideBtn avatar={Logo}/>
        <SideBtn avatar={Second}/>
        <SideBtn avatar={Third}/>
        <SideBtn avatar={Fouth}/>
        <SideBtn avatar={Fifth}/>
        <SideBtn avatar={Sixth}/>
      </div>
      <div style={buttonBtn}>
        <SideBtn avatar={Seventh}/>
        <SideBtn avatar={Eight}/>
        <SideBtn avatar={Nine}/>
        <SideBtn avatar={Ten} />
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
