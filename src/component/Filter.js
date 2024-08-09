import React from 'react';
import { useSearchParams } from 'react-router-dom';


const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const age = searchParams.get('age');
    const city = searchParams.get('city')

  return (
    <div>
      <h1>Filter page</h1>
      <h3>{age}</h3>
      <h2>{city}</h2>
      <input type="text" onChange={(e)=>setSearchParams({text:e.target.value})} />
      <button  onClick={(e)=>setSearchParams({age:20})}>click</button>
    </div>
  )
}

export default Filter
