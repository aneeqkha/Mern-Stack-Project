import User from "../models/user.js"
import {StatusCodes} from 'http-status-codes'
import {BadRequestError,Unauthorized} from "../errors/index.js"
import AddProject from "../models/addproject.js"
import user from "../models/user.js"




const signup=async(req,res)=>{

  const {First_name,Last_name,email,designation,password}=req.body

    if(!First_name || !Last_name|| !email||!designation||!password){
        throw new BadRequestError("please provide all values")
    }

  const emailAlreadyuse=await User.findOne({email})

    if(emailAlreadyuse){
        throw new BadRequestError("email is already in use")
    }
       
  const user=await User.create({First_name,Last_name,email,designation,password})
  const token=user.createJWT();
  res.status(StatusCodes.OK).json({user:{
  First_name:user.First_name,
  Last_name:user.Last_name,
  email:user.email,
  designation:user.designation
  },token})
   
}

const login=async(req,res)=>{
   const{email,password}=req.body

   if(!email,!password){
    throw new Unauthorized("provide all values")
   }
  
 const user=await User.findOne({email}).select("+password")
 console.log(user)
   if(!user){
      throw new Unauthorized("Invalid Email")
   }
 const isPassword=await user.comparePassword(password)
 if(!isPassword){
 throw new Unauthorized("invalid password")
 }

 const token=user.createJWT()
 user.password=undefined
 res.status(StatusCodes.OK).json({user,token})
}

const Member=async(req,res)=>{
  const {title,Description,TLeader,Members,files}=req.body
  console.log(title,Description,TLeader,Members,files)
  if(!title||!Description||!TLeader||!Members||!files){
    throw new BadRequestError("provide all values")
  }
 
  const add=await AddProject.create({title,Description,TLeader,Members,files})
  
  res.status(StatusCodes.OK).json({add})

}

const fetchdata=(req,res)=>{
  AddProject.find((err,data)=>{
    if(err){
      res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      console.log(err)
    }
    else{
      res.status(StatusCodes.OK).send(data)
    }
  })
}

const userfetch=(req,res)=>{
   user.find((err,data)=>{
    if(err){
      res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      console.log(err)
    }else{
     res.status(StatusCodes.OK).send(data)
    }
   })
  
}

export{
    signup,
    login,
    Member,
    fetchdata,
    userfetch 
}



