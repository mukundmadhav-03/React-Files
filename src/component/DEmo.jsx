import React, { useState } from 'react'

const DEmo = () => {
    const [count, setCount] = useState()
    handelClick=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <button onClick={handelClick}>Increament</button>
    </div>
  )
}

export default DEmo