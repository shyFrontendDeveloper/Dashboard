import React from 'react'
import LeftContent from '../../header/headerContent/LeftContent'
import WalletTitle from '../leftPart/WalletTitle'
import WalletBody from './walletBody/WalletBody'
import { Button } from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


const LeftPart = () => {
  return (
    <div className='leftMain'>
        <div style={leftPartStyle}>
            <WalletTitle title="ngn wallet" title2="usd wallet" />
            <WalletBody />
        </div>
        <div style={leftPartStyle2}>
            <LeftContent />
            <Button variant='outlined' endIcon={<ExpandMoreOutlinedIcon style={{color: "#000"}} />} style={{textTransform: 'capitalize', backgroundColor: "#F4F5F9", border: "none"}}>
            <p style={{color: "#000"}}>last 30 days</p>
            </Button>
        </div>
    </div>
  )
}

export default LeftPart


const leftPartStyle = {
    display: "flex",
    flexDirection: "column",
    marginTop: 20
}

const leftPartStyle2 = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20
}