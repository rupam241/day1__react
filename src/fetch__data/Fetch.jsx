import React, { useState } from 'react'

const Fetch = () => {
    const[data,setData]=useState(null)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>response.json())
    .then(data=>(setData(data)))
  return (
  <>
  {data? <div>
    <h1>{data.title}</h1>
    <p>{data.userId}</p>
  </div>:"data loading"}
 
  
  </>
  )
}

export default Fetch