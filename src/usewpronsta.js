import React, { useEffect,useState } from "react";


const Usewpronsta = (props) => {
   
  useEffect(()=>{
    console.log("use effect called")

  })
 
  return (
    <div className="App">

<h1>count props:{props.count}</h1>
    {/* <button onClick={()=>setCount(count+1)}>Update count</button> */}
    <h1>data props:{props.data}</h1>
    {/* <button onClick={()=>setData(data+1)}>Update count</button> */}

      
    </div>
  )
}

export default Usewpronsta
