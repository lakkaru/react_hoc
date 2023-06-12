import React, { useState } from 'react'

export default function HoverComponent() {
    const [count, setCount]=useState(0);
    const handleCount= ()=>{
        setCount(count +1)
    }
  return (
    <div style={{
        backgroundColor:'teal',
        width: '250px',
        height:'150px',
        marginLeft:'auto',
        marginRight:'auto',
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
       color:'white'
    }} onMouseOver={handleCount}>HoverComponent {count}</div>
  )
}
