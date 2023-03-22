import React, { useState } from 'react'


const Form = () => {
  function getFormdata(e){
    console.log(name,tnc,interest)
    e.preventDefault()
  }

  const [name,setName]=useState("")
  const [tnc,setTnc]=useState(false)
  const [interest,setInterest]=useState("")
  
  return (
    <div className='ok'>

        <h1>Handle form in React</h1><br /><br />
      
      <form onSubmit={getFormdata}>
        <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)} /><br /><br />
        <select onChange={(e)=>setInterest(e.target.value)}>
            <option >select option</option>
            <option >marvell</option>
            <option >DC</option>
        </select><br /><br />
        <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)}/><span>accept termas and conditon</span><br /><br />
        <button type='submit'>submit</button>   
      </form>
    </div>
  )
}

export default Form
