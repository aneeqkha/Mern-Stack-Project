import mongoose from "mongoose";
import validator from "validator";
import bycrpt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema=mongoose.Schema({
    First_name:{
        type:String,
        required:[true,'please provide First Name'],
        minlength:3,
        maxlength:10,
        trim:true,
    },
    Last_name:{
        type:String,
        required:[true,'please provide Last Name'],
        minlength:3,
        maxlength:10,
        trim:true,
    },
    email:{
        type:String,
        required:[true,'please provide email'],
        validate:{
            validator:validator.isEmail,
            message:'please provide a valid email'
        },
        unique:true,
    },
    designation:{
        type:String,
        enum:['Admin',
              'Team lead',
              'Junior Software Engineer',
              'Software Engineer',
              'Senior Software Engineer']
    },


    password:{
        type:String,
        required:[true,'please provide password'],
        minlength:6,
        select:false,
    }
})

userSchema.pre('save',async function(){
const salt=await bycrpt.genSalt(10)
this.password=await bycrpt.hash(this.password,salt)
})

userSchema.methods.createJWT=function(){
    return jwt.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})
}

userSchema.methods.comparePassword=async function(canidatepassword){
   const isMatch=await bycrpt.compare(canidatepassword,this.password)
   return isMatch  
}
export default mongoose.model('User',userSchema)