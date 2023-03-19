import React, { useState } from 'react'
import User from './User'


const App = () => {
 const [data,setdata]=useState(0)

 function updateData(){
  setdata(data+1)
 }
console.warn("__________")

  // let data="rohitmakwana"
  // function apple(){
  //   data="peter"
  //   alert(data)
  //   console.warn("-----------------")
  // }
  return (
   <>
   <User/>
    <div>
      <h1>{data}
      </h1>
      <button onClick={updateData}>click me</button>
    </div></>

  )
}

export default App
