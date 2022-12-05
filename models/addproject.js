import mongoose from "mongoose";

const Project=mongoose.Schema({

    title:{
        type:String,
        required:[true,'please provide a Title'],
        minlength:1,
        maxlength:20,
        trim:true
    },

    Description:{
        type:String,
        required:[true,'please provide a Description'],
        minlength:1,
        maxlength:10,
        trim:true
    },

    TLeader:{
        type:String,
        required:[true,'please provide a Team leader'],
        minlength:1,
        maxlength:10,
        trim:true
    },
    
    Members:{
        type:[String],
        required:[true,'please provide a Members'],
        trim:true
    },

    files:{
        type:[String],
        require:[true,'please provide a files'],
        trim:true
    }



})

export default mongoose.model('AddProject',Project);