import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
   title:{
    type:String,required:true
   },
   creatorId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
   }
},{
    timestamps:true
})

const bookModel=mongoose.model("book",bookSchema);
module.exports={bookModel}