const mongoose=require('mongoose')
// const {ObjectId}=mongoose.Schema.Types

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        // required:true
    },
    // postedBy:{
    //     type:ObjectId,
    //     ref:"User"
    // }
})

mongoose.model("Blog",blogSchema)