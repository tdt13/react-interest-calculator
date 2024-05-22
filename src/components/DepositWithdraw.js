import React from 'react'

// Component to add functionality for adding and removing amounts from the balance total

const DepositWithdraw = ({handleDeposit, handleWithdraw, amount, setAmount}) => {

    

  return (
    <div className="mb-4">

        {/* User input for the deposit/withdraw amount
        this is updates amount through the setAmount function
        which is linked to the event value of the input onChange */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="border p-2 rounded w-full mb-2"
      />

      {/* Button which calls handleDeposit function passed from BankAppUi component
      this adds inputed amount to the balance and resets amount to an empty string */}
      <button
        onClick={() => { handleDeposit(parseFloat(amount)); setAmount(''); }}
        className= "bg-emerald-500 text-white p-2 rounded mr-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        Deposit
      </button>

      {/* Button which calls the handleWithdraw function passed from the BankAppUi component
      this removes the set amount from the balance and returns amount variable to an empty string */}
      <button
        onClick={() => { handleWithdraw(parseFloat(amount)); setAmount(''); }}
        className=" bg-rose-500 text-white p-2 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        Withdraw
      </button>
    </div>
  )
}

export default DepositWithdraw