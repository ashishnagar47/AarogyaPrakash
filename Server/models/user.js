const mongoose=require('mongoose')
const {ObjectId} =mongoose.Schema.Types

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/ashishnagar47/image/upload/v1594881942/no-image_itiacr.jpg"
    },
    
})

mongoose.model("User",userSchema);