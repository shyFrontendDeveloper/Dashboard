import React from 'react'
import Divider from './sidebar/divider/Divider'
import Sidebar from './sidebar/Sidebar'
import Header from './main/header/Header'
import Body from './main/body/Body'

const Dashboard = () => {
  return (
    <div style={dashboardStyle}>
      <Sidebar />
      <Divider />
      <Header />
      <Body />
    </div>
  )
}

export default Dashboard


const dashboardStyle = {
    width: "100%",
    // height: "100%",
    // backgroundColor: "blue",
    display: "grid",
    gridTemplateColumn: "30px 300px 1fr",
}