import React from 'react'

const List = () => {
  const items=["item1","item2","item3","item4","item5"];

  return (
    
    
    
<ul>
{items.map((item,index)=>{
   return <li>{item}</li>


})}

</ul>

    
  )
}

export default List