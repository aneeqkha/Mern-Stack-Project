import 'normalize.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Alert, ForRow } from "../components"
import { useAppContext } from '../context/appContext'
import Styling from '../styling/addProject.js'

const addPro={
    title:'',
    Description:'',
    TLeader:'',
    Members:[],
    files:[],
}


const AddProject=()=>{

const navigate=useNavigate()

const[addProjectValue,setProjvalue]=useState(addPro)

const{showAlert,displayAlert,AddProject}=useAppContext()

const handleChange=(e)=>{
setProjvalue({...addProjectValue,[e.target.name]:e.target.value})
}


const add=()=>{
   setProjvalue({...addProjectValue,Description:document.getElementById("Description").value})

}

const addmembers=()=>{
    var team=document.getElementById("Members").value;
    const arr=team.split("\n");
    if(arr.length==4){
    setProjvalue({...addProjectValue,Members: arr})
  
}
}
const file=()=>{
   
   var upload=document.getElementById("myfile").value
   addProjectValue.files[0]=upload
   var upload1=document.getElementById("myfile1").value
   addProjectValue.files[1]=upload1

}

const onSubmit=async(e)=>{
    e.preventDefault()
    
  
    const  {title,Description,TLeader,Members,files }=addProjectValue;
    console.log(title,Description,TLeader,Members,files)
    if(!title||!Description||!TLeader||(Members.length===0)||(files.length===0)){
        displayAlert()
        return
    }

   const AddMembers= {title,Description,TLeader,Members,files }
   console.log(AddMembers)
  const add=await AddProject({AddMembers})
  if(add){
  document.getElementById("btn_add").style.display="block"
  navigate(-1)}
    
}

const cancel=()=>{
    document.getElementById("btn_add").style.display="block"
    navigate(-1)
}

    
return <Styling> 
<div className='addProject'>
    <h1 className='heading'>Add Project</h1><br/>
    
 <form className='Form' onSubmit={onSubmit}>
             
    {/* This is label Title */}
    
    <br/><label className='label'>Title </label><br/><br/>
           
    {/* Enter Title Name */}
    
    {<ForRow 
        type='name' 
        name='title'
        value={addProjectValue.title}
        handleChange={handleChange} />}<br/>

    {/* label of Description */}
    
    <label className="label">Description</label><br/><br/>
        
    {/* enter the Description */}
    
    <textarea rows="3" cols="100" name="Description" id="Description" onChange={add}></textarea><br/><br/>

    {/* label of Team Lead */}
    
    <label className='label'>Team Lead</label><br/>
           
    {/* Enter Team Leader Name */}
    
    {<ForRow 
        type='name' 
        name='TLeader'
        value={addProjectValue.TLeader}
        handleChange={handleChange} />}    <br/>

    {/* label of Members */}
    
    <label className="label">Members</label><br/><br/>
         
    {/* enter the Members */}
         
    <textarea rows="4" cols="5" name="Members" id="Members" onChange={addmembers}></textarea><br/><br/>
    
    {/* add file label */}

    <label for="myfile">Document:</label><br/><br/>

    <input type="file" id="myfile" name="myfile" onChange={file} /><br/><br/>

    <input type="file" id="myfile1" name="myfile1" onChange={file} /><br/><br/>
    <div className='btns'>
        {showAlert && <Alert/>}
    <button className='btn1 btn' onClick={cancel} >Cancel</button>
    
    <button className="btn2 btn" type="submit">Submit</button>
    </div>
    
    
 </form>
            </div>
                    </Styling>
}
export default AddProject 