import React from 'react'

const WalletDetails = ({description, number, bank}) => {
  return (
    <div className='details'>
      <p className='description'>{description}</p>
      <p className='number'>{number}</p>
      <p className='bank'>{bank}</p>
    </div>
  )
}

export default WalletDetails


