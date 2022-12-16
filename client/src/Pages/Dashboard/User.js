import axios from 'axios'
import { useEffect, useState } from 'react'
// import Call from '../../components/table.js'
import StylingUser from '../../styling/user.js'



const User=()=>{

const[Usertable,setUser]=useState('')
const id='/api/v1/auth/fetchuser'
var n=0

const add=()=>{
   n++
   return n
}

useEffect(()=>{
   
   const fetchuser=async()=>{
    const data= await( axios.get(id) )
    console.log("User>>>>",data)
    setUser(data)
   }
   fetchuser() 
},[id]);

return <StylingUser>
<div className='mainuser'>      
<h1>USER</h1>

<table >
   <thead>
  <tr>
    <th>#</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Username</th>
    <th>Role</th>
  </tr>
  </thead>
  <tbody>
  {Usertable && Usertable?.data.map((value)=>(
<tr>
<td>{add()}</td>
<td>{value.First_name}</td>
<td>{value.Last_name}</td>
<td>{value.email}</td>
<td>{value.designation}</td>
</tr>
  ))} 
</tbody>
</table>
</div> 
   </StylingUser>
}

export default User