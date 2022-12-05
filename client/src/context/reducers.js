import { CLEAR_ALERT, 
        DISPLAY_ALERT,
        SETUP_User_Begin,
        SETUP_User_Scucces,
        SETUP_User_Errors,
        PROJECT_Begin,
        PROJECT_Scucces,
        PROJECT_Errors
    } from "./action"

const reducer=(states,action)=>{

    if(action.type===DISPLAY_ALERT){    
        
     return{
        ...states,
        showAlert:true,
        alertType:'danger',
        alertText:'Please Provide all values'
        
    }
    }
    if(action.type===CLEAR_ALERT){    
       
     return{
        ...states,
        showAlert:false,
        alertType:'',
        alertText:''
        
    }
    }

   

    if(action.type===SETUP_User_Begin){

        return{
            ...states,
            isLoading:true,
        }
    }
 
    if(action.type===SETUP_User_Scucces){
        return{
            ...states,
            isLoading:false,
            user:action.payload.user,
            token:action.payload.token,
            showAlert:true,
            alertType:"success",
            alertText:action.payload.alert
        }
    }
    if(action.type===SETUP_User_Errors){
        return{
            ...states,
            isLoading:false,
            showAlert:true,
            alertType:"danger",
            alertText:action.payload.msg,
        }
    }

    if(action.type===PROJECT_Begin){

        return{
            ...states,
            isLoading:true,
        }
      }

      if(action.type===PROJECT_Scucces){
        return{
            ...states,
            isLoading:false,
            showAlert:true,
            alertType:"success",
            alertText:"add Project members Sucessfully"
        }
    }

    if(action.type===PROJECT_Errors){
        return{
            ...states,
            isLoading:false,
            showAlert:true,
            alertType:"danger",
            alertText:"failed to add ",
        }
    }

    throw new Error(`no such action:${action.type}`)
}

export default reducer