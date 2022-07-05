const express=require('express')
const route=express();
const mongoose=require('mongoose');
const router = require('./auth');
// const reqLogin=require('../middlewares/reqLogin');
const Event =mongoose.model("Event")

route.post('/CreateEvent',(req,res)=>{
    console.log(req.body)
    const {title,body,pic}=req.body
    if(!title || !body || !pic){
        console.log(req.body)
        return res.json({error:"Please add all the fields"})
    }
    console.log(title,body,pic)
    // req.user.password=undefined
    const event=new Event({
        title,
        body,
        picture:pic,
        // postedBy:req.user
    })

    event.save()
    .then(result=>{
        // res.send("OK")
        res.json({event:result})
    })
    .catch(err=>{
        console.log(err)
    })

})

route.get('/allEvent',(req,res)=>{
    
    Event.find()
    .then(Event=>{
        console.log(Event)
        res.json({Event})
    })
    .catch((err)=>{
        console.log(err)
    })
})

route.get('/ev/:id',(req, res)=> {
    const id = req.params.id;
    console.log(id)
    Event.findOne({_id:id})
    .then((Event)=>{
    if(!Event){
       return res.json("not Found")
    }
    res.json(Event)
    // const {title,body,picture}=Event
    console.log(Event)
})
})

// route.get('/ev/:id',(req, res)=> {
//     const event = req.query.event;
//     console.log('event:'+event);
//     // res.writeHead(200, {'Content-Type': 'text/html'})
//     console.log(event)
//     Event.findOne({title:event})
//     .then((Event)=>{
//     if(!Event){
//         res.json("not Found")
//     }
//     const {title,body}=Event
//     console.log(title,body)
//     res.json(Event)
// })
// })

// route.get('/Event/')



// route.get('/myPost',reqLogin,(req,res)=>{
//     Post.find({postedBy:req.user._id})
//     .populate("postedBy","name pic")
//     .then(myPost=>{
//         res.json({myPost})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

module.exports=route