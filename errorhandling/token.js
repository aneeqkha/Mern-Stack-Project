import { Unauthorized } from "../errors/index.js"

const auth=(req,next,res)=>{
   
    const authHeader=req.headers.authorization
  if(!authHeader){
    throw new Unauthorized("user unauthorized")
  }
    next()
}

export default auth