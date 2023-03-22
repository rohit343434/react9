import React from 'react'

const Mapping = () => {
    // const students=['rohit','makwana','kunj'];
    const students=
    [{name:'rohit',email:'rohit@fbdshf',contact:3634},
    {name:'rdohjjit',email:'rggohit@fbdshf',contact:364534},
    {name:'rohitfgdhg',email:'rohit@fbd565shf',contact:363654}





]
    // map looping
    // students.map((iteam)=>{
    //     console.log(iteam)
    // })

    // for(let i=0;i<students.length;i++){
    //     console.warn(students[i])
    // }
  return (
    <div>
       <h1>handle array</h1>
       <table>
       {
        students.map((data)=>
          <tr>
            <td>
                
                    {data.name}
                
            </td>
            <td>
                
                    {data.email}
                
            </td>
            <td>
                
                    {data.contact}
                
            </td>
          </tr>
       

        )

       }
       </table>
       
      
    </div>
  )
}

export default Mapping
