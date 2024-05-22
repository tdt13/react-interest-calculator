import React from 'react'

// Component to show the users current balance saved in the state balance

const BalanceDisplay = ({balance}) => {
  return (
    <div className="mb-4">
      <p className="text-xl text-slate-600">Current Balance: £{balance.toFixed(2)}</p>
    </div>
  )
}

export default BalanceDisplay