const express=require('express')
const route=express();
const mongoose=require('mongoose');
const router = require('./auth');
// const reqLogin=require('../middlewares/reqLogin');
const Appointment =mongoose.model("Appointment")

route.post('/Appointment',(req,res)=>{
    console.log(req.body)
    const {name,age,phone,date,address,email}=req.body
    if(!name || !age || !phone || !date || !address){
        console.log(req.body)
        return res.json({error:"Please add all the fields"})
    }
    console.log(name,age,phone,date,address)
    // req.user.password=undefined
    const appointment=new Appointment({
        name,
        age,
        phone,
        address,
        date,
        email
        // postedBy:req.user
    })

    appointment.save()
    .then(result=>{
        // res.send("OK")
        // next()
        res.json({appointment:result})
    })
    .catch(err=>{
        console.log(err)
    })

})

route.get('/allAppointment',(req,res)=>{
    
    Appointment.find()
    // .populate("postedBy","name")
    // 
    // .populate("comments.postedBy","_id name")
    .then(Appointment=>{
        res.json({Appointment})
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports=route