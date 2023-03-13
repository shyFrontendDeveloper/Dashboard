import React from 'react'

const WalletBotton = ({btn1, btn2, btn3}) => {
  return (
    <div>
      <button className='btn btn-active'>{btn1}</button>
      <button className='btn'>{btn2}</button>
      <button className='btn'>{btn3}</button>
    </div>
  )
}

export default WalletBotton
