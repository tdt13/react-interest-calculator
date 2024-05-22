import React, { useState, useEffect } from 'react';
import BalanceDisplay from './BalanceDisplay';
import DepositWithdraw from './DepositWithdraw';
import InterestDeduction from './InterestDeduction';

// This is the main component to pass down the state of the app to other components
const BankAppUI = () => {

    // the users balance state is here
    const [balance, setBalance] = useState(0);

    // the amount of the deposit or withdraw is tracked in state here
    const[amount, setAmount] = useState('')

    // state to track the inputed value of interest by the user
    const [interest, setInterest] = useState("")

    // this useEffect hook alerts the user when their balance goes below
    // zero
    useEffect(() => {
        if (balance < 0) {
          alert('You are overdrawn!');
        }
      }, [balance]);

    //   handle deposit function to increment the balance based on the input amount
  const handleDeposit = (amount) => {
    if (!isNaN(amount) && amount > 0) {
      setBalance(balance + amount);
    }
  };
  //   handle withdraw function to decrement the balance based on the input amount
  const handleWithdraw = (amount) => {
      setBalance(balance - amount);
  };
  //   handle interest function to decrement the balance based on the input interest
  const handleAddInterest = (interestRate) => {
    if (!isNaN(interestRate) && interestRate > 0 && balance > 0) {
      const interestAmount = balance * (interestRate / 100);
      setBalance(balance - interestAmount);
    }else{
        alert("Cannot deduct interest rate. You are overdrawn. ")
    }
  };


// the BankAppUI acts as a wrapper component for the other components
  return (
    <div className="container mx-auto p-4 max-w-md">
        <div className='border-indigo-100 border-2 border-solid rounded-2xl p-10 bg-indigo-50'>
    <h1 className="text-2xl font-bold mb-4 text-slate-600">Banking App</h1>
    <BalanceDisplay balance={balance} />
    <DepositWithdraw handleDeposit={handleDeposit} handleWithdraw={handleWithdraw} amount={amount} setAmount={setAmount} />
    <InterestDeduction handleAddInterest={handleAddInterest} interest={interest} setInterest={setInterest} />
        </div>
  </div>


  )
}

export default BankAppUI