const express=require('express')
const route=express();
const mongoose=require('mongoose');
const router = require('./auth');
// const reqLogin=require('../middlewares/reqLogin');
const Treatment =mongoose.model("Treatment")

route.post('/CreateTreatment',(req,res)=>{
    console.log(req.body.title)
    const {title,body,pic}=req.body
    if(!title || !body || !pic){
        console.log(req.body)
        return res.json({error:"Please add all the fields"})
    }
    console.log(title,body,pic)
    // req.user.password=undefined
    const treatment=new Treatment({
        title,
        body,
        picture:pic
    })

    treatment.save()
    .then(result=>{
        // res.send("OK")
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })

})

route.get('/allTreatment',(req,res)=>{
    
    Treatment.find()
    .then(treatment=>{
        res.json({treatment})
    })
    .catch((err)=>{
        console.log(err)
    })
})

route.get('/treat/:id',(req, res)=> {
    const id = req.params.id;
    console.log(id)
    Treatment.findOne({_id:id})
    .then((treatment)=>{
    if(!treatment){
       return res.json("not Found")
    }
    res.json(treatment)
    // const {title,body,picture}=treatment
    console.log(treatment)
})
})

// route.get('/treatment/')



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