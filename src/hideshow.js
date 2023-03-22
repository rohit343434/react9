import React, { useState } from 'react'

const Hideshow = () => {
    const [statuse,setstatuse]=useState(true)

  return (
    
        <>

{
 statuse? <h1>hello rohit</h1>
 :null
}


{/* <button onClick={()=>setstatuse(false)}>hide</button>
<button onClick={()=>setstatuse(true)}>show</button> */}
<button onClick={()=>setstatuse(!statuse)}>toggle</button>


 
 </>
   
  )
}

export default Hideshow
