import React, { useState } from 'react'

const Profile = () => {

    const[login,setLogin]=useState(2)
  return(
      <>
      {login==1?<h1>welcome</h1>:login==2?<h1>rohit2</h1>:<h1>rohit3</h1>}
      
      
      </>



  )
}

export default Profile
