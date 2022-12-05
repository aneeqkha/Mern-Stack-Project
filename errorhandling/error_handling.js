import {StatusCodes} from 'http-status-codes'

const errorhandling=(err,req,res,next)=>{
    console.log(err)  
    
    const defaulterror={
       statuscode:err.statuscode||StatusCodes.INTERNAL_SERVER_ERROR,
       msg:err.message ||'Somthing went wrong please try again later'
    } 

    if(err.name==='ValidationError'){
         defaulterror.statuscode=StatusCodes.BAD_REQUEST
         defaulterror.msg=Object.values(err.errors)
                                .map((items)=>items.message)
                                .join(',')
    }

    if(err.code && err.code===11000){
         defaulterror.statuscode=StatusCodes.BAD_REQUEST
         defaulterror.msg=`${Object.keys(err.keyValue)} to be unique`
    }

    res.status(defaulterror.statuscode).json({msg:defaulterror.msg})
}

export default errorhandling