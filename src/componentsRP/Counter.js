import React, { useState } from 'react'

export default function Counter(prop) {
const [count, setCount]=useState(0);
const handleCount=()=>{
    setCount(count + 1);
}
  return (
    <>{prop.render(handleCount, count)}</>
  )
}
