import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { amountActions } from '../state/index'
const Shop = () => {
  const dispatch=useDispatch()  
  return (
    <Container>
        <Button variant="warning" onClick={()=>dispatch(amountActions.depositMoney(1000))}>deposit money</Button>{'   '}
        <Button variant="danger" onClick={()=>dispatch(amountActions.withdrawMoney(1000))}>withdraw money</Button>
    </Container>
  )
}

export default Shop