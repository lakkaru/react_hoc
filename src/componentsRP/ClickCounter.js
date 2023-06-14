import React from 'react'

export default function ClickCounter({handleCount, count}) {
  return (
    <button onClick={handleCount}>Click Me {count}</button>
  )
}
