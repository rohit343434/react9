import React from 'react'
import Reuser from './reuser'

const Reuse = () => {
    const user=[
        {name:"rohit",city:"amd",state:"gujarat"},
        {name:"rohit",city:"amd",state:"gujarat"},
        {name:"rohit",city:"amd",state:"gujarat"}
    ]
  return (
    <div>
      <h1>reuse components list</h1>
      
      {
        user.map((iteam,i)=>
        <Reuser data={iteam}/>
        
        )
      }
      
    </div>
  )
}

export default Reuse
