import axios from 'axios'
import { useEffect, useState } from 'react'
// import Call from '../../components/table.js'
import StylingUser from '../../styling/user.js'



const User=()=>{

var tested;
var a=0;
const n=a++;
const[Usertable,setState]=useState({})
useEffect(()=>{
   
   const fetchuser=async()=>{
    const data= await axios.get('/api/v1/auth/fetchuser')
    console.log("product>>>>",data)
    tested=data;
    setState(data);
    console.log(Usertable)
   }
   fetchuser()
},[User()]);

const Call=()=>{
   console.log("start calling")
   
   { tested && tested?.data.map((value)=>{
    return <tr>
      <td>{n}</td>
      <td>{value.First_name}</td>
      {console.log(value.First_name)}
      <td>{value.Last_name}</td>
      {console.log(value.Last_name)}
      <td>{value.email}</td>
      {console.log(value.email)}
      <td>{value.designation}</td>
      {console.log(value.designation)}
      </tr> 
     })
}

console.log("end")
}

   return <StylingUser>
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
   
   <Call/>


{/* <tr>
<td>{n}</td>
<td>{value.First_name}</td>
<td>{value.Last_name}</td>
<td>{value.email}</td>
<td>{value.designation}</td>
</tr> */}
</tbody>
</table>
  
   </StylingUser>
}

export default User