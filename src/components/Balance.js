//this component will be used to display the balance
import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
    const amount=useSelector(state=>state.amount)
    return (    
    <h3>Balance is {amount.balance}</h3>
  )
}

export default Balance