import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{
        type: [{
            type: String,default: "VIEWER",
            enum: ["CREATOR", "VIEWER", "VIEW_ALL"],
          }],
    }
})

const userModel=mongoose.model("user",userSchema);
module.exports={userModel}