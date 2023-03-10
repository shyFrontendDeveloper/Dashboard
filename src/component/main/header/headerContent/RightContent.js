import { Button } from '@mui/material'
import React from 'react'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';

const RightContent = () => {
  return (
    <div style={rightStyle}>
      <Button variant='contained' style={{textTransform: 'none', backgroundColor: "#B0F0B5"}} endIcon={<RocketLaunchOutlinedIcon color='secondary' />}>
        Upgrade Plan
      </Button>
      <SearchOutlinedIcon fontSize='large' />
      <WbSunnyOutlinedIcon fontSize='large' />
      <ToggleOffOutlinedIcon fontSize='large' color='primary' />
    </div>
  )
}

export default RightContent

const rightStyle = {
    display: "flex",
    justifyContent: "space-in-between"
}