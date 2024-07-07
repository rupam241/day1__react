import React, { useState } from 'react'
import "./toggle.css"

const Toggle = () => {
  const[toggle,setToggle]=useState(false)
  return (
    <>
    <input type="checkBox" style={{width:"80px",height:"150px"}}  onChange={()=>{
      setToggle(!toggle)
    }}/>
    <p>{toggle?"on" :"off"}</p>
    </>
  )
}

export default Toggle