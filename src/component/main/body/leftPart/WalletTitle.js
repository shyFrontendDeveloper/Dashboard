import React from 'react'

const WalletTitle = ({title, title2}) => {
  return (
    <div style={walletStyle}>
      <p style={firstTitle}>{title}</p>
      <span>|</span>
      <p style={secondTitle}>{title2}</p>
    </div>
  )
}

export default WalletTitle


const walletStyle = {
    textTransform: "uppercase",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 40,
    fontSize: 12,
    marginBottom: 10
}

const firstTitle = {
  paddingRight: 70
}

const secondTitle = {
  paddingLeft: 70
}