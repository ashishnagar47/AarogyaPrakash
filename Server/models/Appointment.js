const mongoose=require('mongoose')
// const {ObjectId}=mongoose.Schema.Types

const appointmentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    age:{
        type:String
    },
    address:{
        type:String
    }

    // postedBy:{
    //     type:ObjectId,
    //     ref:"User"
    // }
})

mongoose.model("Appointment",appointmentSchema)