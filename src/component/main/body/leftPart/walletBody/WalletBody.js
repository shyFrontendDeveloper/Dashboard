import React from 'react'
import WalletBotton from '../../../../buttons/WalletBotton'
import WalletDetails from '../WalletDetails'
import WalletBodyHead from './WalletBodyHead'

const WalletBody = ({title1, title3}) => {
  return (
    <div style={WrapperwalletBody}>
      <div style={walletBodyStyle}>
        <WalletBodyHead head="$30,000.00" priceTitle="manage wallet" />
        <WalletBotton btn1="fund account" btn2="transfer" btn3="withdraw"/>
      </div>
      <WalletDetails description="your wallet & account number" number="066830909" bank="city bank"  />
      
    </div>
  )
}

export default WalletBody


const WrapperwalletBody = {
  display: "flex",
  flexDirection: "row"
}


const walletBodyStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F4F5F9",
    width:370,
    padding: "20px 20px 20px",
    borderTop: "1px solid #838181",
}