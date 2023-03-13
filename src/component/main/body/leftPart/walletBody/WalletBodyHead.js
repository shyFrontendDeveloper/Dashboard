import React from 'react';


const WalletBodyHead = ({head, priceTitle}) => {
  return (
    <div>
      <span style={walletBodyHead}>{head}</span>
      <p style={priceTitleStyle}>{priceTitle}</p>
    </div>
  )
}

export default WalletBodyHead


const walletBodyHead = {
    fontSize: 25,
    fontWeight: "bolder",
    paddingBottom: 5,
    letterSpacing: 1.5,
}

const priceTitleStyle = {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "capitalize",
    textDecoration: "underline",
    color: "#FD6820",
    paddingBottom: 20
}