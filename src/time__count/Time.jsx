import React, { useEffect, useState } from 'react'

const Time = () => {
    const[time,setTime]=useState(5)

    useEffect(()=>{
        if(time>0){
            const timer=setInterval(()=>{

                setTime(time-1)

            },1000)
            return ()=>clearInterval(timer)
        }

    },[time])
  return (
    <>
<div>
    time left:{time} seconds
</div>

    </>
  )
}

export default Time