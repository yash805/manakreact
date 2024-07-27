import React, { useState } from 'react'

const Counter = () => {
    const[shows,setShows] = useState(false)

    // function hide(){
    //     setShows(false)
    // }

    // function show(){
    //     setShows(true)
    // }

    function toggle(){
        setShows(!shows)
    }


  return (
    <div>
        {
            shows ?  <h1>hello world </h1> : null
        }
       
       {/* <button onClick={hide}>Hide</button>
       <button onClick={show}>Show</button> */}

       <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default Counter
