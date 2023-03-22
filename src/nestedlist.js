import React from 'react'

const Nestedlist = () => {
    const users=[
        {name:"rohit",sr:"makwana",address:[
            {hn:10,state:"guj",city:"amd"},
            {hn:10,state:"guj",city:"amd"},
            {hn:10,state:"guj",city:"amd"},
            {hn:10,state:"guj",city:"amd"}
        ]},
        {name:"rohit34",sr:"ana",address:[
            {hn:10,state:"guj",city:"amd"},
            {hn:10,state:"guj",city:"amd"},
            {hn:10,state:"guj",city:"amd"},
            {hn:10,state:"guj",city:"amd"}
        ]},
        {name:"rohit3445",sr:"makwa",address:[
            {hn:10,state:"guj",city:"amd"},
            {hn:10,state:"guj",city:"amd"},
            {hn:10,state:"guj",city:"amd"},
            {hn:10,state:"guj",city:"amd"}
        ]}
    ]
  return (
    <div>
        
            {/* {
               users.map((iteam)=>
<h1>{iteam.name}</h1>
// {/* <h1>{iteam.state}</h1>
// <h1>{iteam.city}</h1> */} 

               {/* )
            } */}
       
      
    </div>
  )
}

export default Nestedlist
