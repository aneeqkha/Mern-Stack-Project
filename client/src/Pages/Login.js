import 'normalize.css'
import Styling from '../styling/Login_S.js'
import main from '../images/208934.svg'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {ForRow,
        Alert,
        Admin,
        Team_lead,
        Senior_Software_Engineer,
        Software_Engineer,
        Junior_Software_Engineer} from '../components'
import { useAppContext } from '../context/appContext.js'

const initalstate={
   First_name:'',
   Last_name:'',
   email:'',
   designation:'',
   password:'',
   isMember:true,
   showAlert:false,    
  }

const Login=()=>{
   const navigate=useNavigate();

   const [state,setstate]=useState(initalstate)

   const {user,isLoading,showAlert,displayAlert,SetUser}=useAppContext()
   
   
   const togelmember=()=>{
    setstate({...state,isMember:!state.isMember})
  }

   const handleChange=(e)=>{
    setstate({...state,[e.target.name]:e.target.value})
   }

   const admin=(e)=>{
      state.designation=Admin
      console.log(state.designation)
   }

   const Team=()=>{
      state.designation=Team_lead
      console.log(state.designation)
   }

   const Senior=()=>{
      state.designation=Senior_Software_Engineer
      console.log(state.designation)
   }

   const Software=()=>{
      state.designation=Software_Engineer
      console.log(state.designation)
   }

   const Junior=()=>{
      state.designation=Junior_Software_Engineer
      console.log(state.designation)
   }
   const onSubmit=(e)=>{
     e.preventDefault()
    
    const {  First_name,Last_name,email,designation,password,isMember}=state
     if(!password||!email||(!isMember && !First_name)||(!isMember && !Last_name) ||(!isMember && !designation)){
      displayAlert()
      console.log({state})
      return
     }
    const currentUser={ First_name,Last_name,email,designation,password,isMember}
    
    if(isMember){
      SetUser({
               currentUser,
               axiospath:'login',
               alert:'Signin successful'
            })
    }else{
      SetUser({
               currentUser,
               axiospath:'login',
               alert:'Signup successful'
      })
    }
    

    console.log(password,email,First_name,designation)
   }
   
   useEffect(()=>{
     
      if(user){
         setTimeout(()=>{
            navigate('/Dashboard')
         },3000)
      }
    },[user,navigate])

    return<Styling>
    <div className="main">
       
       {/* header div */}
        <div className="header">
         <img src={main} alt='img' className='header-img'/>
         <h1>ebryx</h1>
        </div>
       
        {/* form div */}
        <div className='Login'>
           <form className='Form' onSubmit={onSubmit}>
             {showAlert && <Alert/>}   

             <label className='label'>Please sign in </label>
           
             {/* Enter First Name */}
          {!state.isMember&&<ForRow 
              type='name' 
              name='First_name'
              value={state.First_name}
              handleChange={handleChange}
              placeholder='First Name'
              />}
             
          {!state.isMember && <ForRow 
              type='name' 
              name='Last_name'
              value={state.Last_name}
              handleChange={handleChange}
              placeholder='Second name'
              />}

              {/* email input  */}
          <ForRow 
              type='email' 
              name='email'
              value={state.email}
              handleChange={handleChange}
              placeholder='Email'
              />
           
              {/* select the value */}
           {!state.isMember && 
              <select id='select' name="designation"  size="5">
              <option onClick={admin}>   {Admin}                    </option>
              <option onClick={Team}>    {Team_lead}                </option>
              <option onClick={Junior}>  {Junior_Software_Engineer} </option>
              <option onClick={Software}>{Software_Engineer}        </option>
              <option onClick={Senior}>  {Senior_Software_Engineer} </option>
            </select>
           }

              {/* password input  */}
            <ForRow 
              type='password' 
              name='password'
              value={state.password}
              handleChange={handleChange}
              placeholder='Password'
              />
              
             {<button type='submit'  className='btn btn-block' disabled={isLoading} >
                Submit
              </button>}<br/><br/>
              <p>
              {state.isMember?"is not member :":"is member :"}
             <button className="member-btn" type="button" onClick={togelmember}>
             {state.isMember?"Signup":"Signin"}
             </button>
             </p>

           </form>
           
        </div>
    </div>
    </Styling>
}

export default Login