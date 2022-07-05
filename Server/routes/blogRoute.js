const express=require('express')
const route=express();
const mongoose=require('mongoose');
const router = require('./auth');
// const reqLogin=require('../middlewares/reqLogin');
const Blog =mongoose.model("Blog")

route.post('/CreateBlog',(req,res)=>{
    console.log(req.body)
    const {title,body,pic}=req.body
    if(!title || !body || !pic){
        console.log(req.body)
        return res.json({error:"Please add all the fields"})
    }
    console.log(title,body,pic)
    // req.user.password=undefined
    const blog=new Blog({
        title,
        body,
        picture:pic,
        // postedBy:req.user
    })

    blog.save()
    .then(result=>{
        // res.send("OK")
        // next()
        res.json({blog:result})
    })
    .catch(err=>{
        console.log(err)
    })

})

route.get('/allBlog',(req,res)=>{
    
    Blog.find()
    // .populate("postedBy","name")
    // 
    // .populate("comments.postedBy","_id name")
    .then(Blog=>{
        res.json({Blog})
    })
    .catch((err)=>{
        console.log(err)
    })
})

route.get('/bl/:id',(req, res)=> {
    const id = req.params.id;
    console.log(id)
    Blog.findOne({_id:id})
    .then((Blog)=>{
    if(!Blog){
       return res.json("not Found")
    }
    res.json(Blog)
    // const {title,body,picture}=Blog
    console.log(Blog)
})
})


// route.get('/Blog',(req, res)=> {
//     const blog = req.query.blog;
//     console.log('blog:'+blog);
//     // res.writeHead(200, {'Content-Type': 'text/html'})
//     console.log(blog)
//     Blog.findOne({title:blog})
//     .then((Blog)=>{
//         if(!Blog){
//             res.json("not Found")
//         }
//         const {title,body}=Blog
//         // console.log(title,body)
//         res.json(Blog)
//     })
// })

// route.get('/Blog/')



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