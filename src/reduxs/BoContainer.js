import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import purchase from './BoAction'

const BoContainer = () => {

   const noOfBooks =  useSelector(state => state.NoOfBooks)
  const dispatch =  useDispatch()
  return (
    <div>
      <h1>No of Books {noOfBooks} </h1>
      <button onClick={()=>(dispatch(purchase(3)))}>Buy</button>
    </div>
  )
}

export default BoContainer
