import { Link,Outlet} from "react-router-dom"
import Styling_home from "../../styling/home.js"
import { useState,useEffect } from "react";
import axios from "axios";
import main from '../../images/open-eye.png'


const Home=()=>{

const [projectdata,setdata]=useState('')
const [addtask,setadd]=useState({add:true})



useEffect(()=>{

  const fetchproject=async()=>{
   const data=await axios.get('/api/v1/auth/fetchdata')
   console.log('projects>>>',data)
   setdata(data)
  }
   fetchproject()
   
},[])

const changed=()=>{
    const x= document.getElementById("btn_add")
      if (x.style.display === "none") {
         x.style.display = "block";
      } else {
         x.style.display = "none";
      }
   
  }

const task=()=>{
setadd({...addtask, add:!addtask.add})
changed()
}


return<Styling_home>
  
<div className="main">
  <div className="btn_add" id="btn_add">
  <h1>Project</h1>   
   <Link onClick={changed} className="link_add" to='add'><p>{addtask.add?"Add new Project":"Add new Task"}</p></Link>
      
  <div className="table1"> 
    <table >
<thead>
  <tr>
    <th>#</th>
    <th>Name</th>
    <th>Description</th>
    <th>Documents</th>
    <th>Team lead</th>
    <th>Member</th>
    <th> </th>
  </tr>
</thead>
<tbody>
{projectdata && projectdata?.data.map((value)=>(
  <tr>
    <td>{1}</td>
    <td>{value.title}</td>
    <td>{value.Description}</td>
    <td>{value.files.map((value)=>`${value},`)}</td>
    <td>{value.TLeader}</td>
    <td>{value.Members.map((value)=>`${value},`)}</td>
    <td><Link to='task' onClick={task}><p><img src={main} alt='img' className='table_img' /></p></Link> </td>
  </tr>
  ))} 
</tbody>
</table>
</div>
</div>
<Outlet/>
</div>
   </Styling_home>
   
}

export default Home