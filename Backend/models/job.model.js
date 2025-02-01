import { application } from "express";
import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:true
    },  
    requirements:{
        type:String,
     
    },  
    salary:{
        type:Number,
        require:true
    },
    location:{
        type:String,
        require:true,
    },
    
    jobType:{
        type:String,
        require:true,
    },
    position:{
        type:Number,
        require:true,
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        require:true,
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true,
    },
    application:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Application',
      
    }
},{timestamps:true});

const Job=mongoose.model("Job", jobSchema);
export default Job;