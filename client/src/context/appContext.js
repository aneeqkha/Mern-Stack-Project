import React,{ useContext,useReducer } from "react"
import axios from "axios"
import reducer from "./reducers"
import { DISPLAY_ALERT,
         CLEAR_ALERT,
         SETUP_User_Begin,
         SETUP_User_Scucces,
         SETUP_User_Errors,
         PROJECT_Begin,
         PROJECT_Scucces,
         PROJECT_Errors } from "./action"

const token=localStorage.getItem('token')
const user=localStorage.getItem('user')

const initialstate={
    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:'',
    user:user ? JSON.parse(user):null,
    token:token,
}

const AppContext=React.createContext()

const AppProvider=({children})=>{

   const [states,dispatch]=useReducer(reducer,initialstate)
   
   const displayAlert=()=>{
    dispatch({type:DISPLAY_ALERT})
    Clear()
   }
   
   const Clear=()=>{
    setTimeout(() => {
        dispatch({type:CLEAR_ALERT})
    }, 3000);
   }

const savelocalstorage=({user,token})=>{
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('token',token)
}

const removelocalstorage=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}


 const SetUser=async ({currentUser,axiospath,alert})=>{

    dispatch({type:SETUP_User_Begin})
    try {
    const userresponse=await axios.post(`/api/v1/auth/${axiospath}`,currentUser)
    const{user,token}=userresponse.data
    console.log(user)
    dispatch({
        type:SETUP_User_Scucces,
        payload:{user,token,alert}
    })    
    savelocalstorage({user,token})
    Clear()
    } catch (error) {
        console.log(error)
       dispatch({
        type:SETUP_User_Errors,
        payload:{msg:error.response.data.msg}
       })
    Clear()
    }
 }


const AddProject=async({AddMembers})=>{
   dispatch({type:PROJECT_Begin})
   try {
    await axios.post('/api/v1/auth/members',AddMembers)
    dispatch({type:PROJECT_Scucces})
   } catch (error) {
    console.log(error)
     dispatch({type:PROJECT_Errors})
   }

}

    return<AppContext.Provider value={{...states,displayAlert,
    SetUser,removelocalstorage,AddProject}}>
   {children}
    </AppContext.Provider>
}

const useAppContext=()=>{

    return useContext(AppContext)
}

export{useAppContext,AppProvider,initialstate}