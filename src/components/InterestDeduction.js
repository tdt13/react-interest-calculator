import React from 'react'

// Component to handle the interest deduction from the account balance

const InterestDeduction = ({handleAddInterest, setInterest, interest}) => {

  return (
    <div className="mb-4">

        {/* Input for user to enter an interest % to deduct from the balance total */}
      <input
        type="number"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        placeholder="Enter interest rate (%)"
        className="border p-2 rounded w-full mb-2"
      />

      {/* Button to deduct interest value from the balance total; executes the handleAddInterest function passed
      from BankAppUi */}
      <button
        onClick={() => { handleAddInterest(parseFloat(interest)); setInterest(''); }}
        className=" bg-sky-400 text-white p-2 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        Deduct Interest
      </button>
    </div>
  )
}

export default InterestDeduction