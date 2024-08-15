import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CounterSlice'

const Counter = () => {
  const count = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>inc</button>
      <button onClick={()=> dispatch(decrement())}>dec</button>

    </div>
  )
}

export default Counter
