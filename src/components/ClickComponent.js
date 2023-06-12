import React, { useState } from 'react'

export default function ClickComponent() {
    const [count, setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1)
    }
  return (
    <button onClick={handleClick}>Click Me {count}</button>
  )
}
