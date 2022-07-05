import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './createPost.css'
import M from 'materialize-css'

const CreateTreatment=()=> {
    const history=useNavigate()
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [image,setImage]=useState("")
    const [url,setUrl]=useState("")

    useEffect(()=>{
        // console.log(url)
        if(url){
            
            fetch("/CreateTreatment",{
                method:"post",
                    headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    title,
                    body,
                    pic:url

                })
            }).then(
                res=>res.json(),
                console.log(title, body))
            .then(data=>{
                if(data.error){
                    console.log("imge nahi h")
                    console.log(data.error)
                    M.toast({html:data.error,classes:"#d32f2f red darken-2"})
                }
                else{
                    console.log("123")
                    M.toast({html:"Post Created Successfully",classes:"#4caf50 green"})
                    history('/')
                }
            })
            .catch(err=>console.log(err))
    }
    },[url])

    const postDetails=()=>{
        const data=new FormData()
        data.append("file",image)
        data.append("upload_preset","AarogyaPrakash")
        data.append("cloud_name","AarogyaPrakash")

        fetch("https://api.cloudinary.com/v1_1/AarogyaPrakash/image/upload",
        {
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>console.log(err))
    
        
    }

    return (
        <>
        <div style={{marginTop:"100px", textAlign:"center"}}>
            <h2  style={{fontFamily:"cursive",fontSize:"50px",color:"black",underline:"none"}}>
                Add New Treatment Here
            </h2>
        </div>
        
        <div style={{marginTop:"0px",
        margin:"30px auto",
        maxWidth:"850px",
        padding:"20px",
        textAlign:"center"}}>
            <div className="mb-3" style={{marginTop:"00px", padding:"50px 0 0 00px"}}>
                
                <label htmlFor="exampleInputEmail1"  style={{textAlign:"left"}}>Treatment Title</label>
                
                <input type="text" className="form-control" id="exampleInputEmail1" value={title} onChange={(e)=>setTitle(e.target.value)} />
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3 " style={{marginTop:"00px", padding:"00px 00px 00px 00px"}}>
                <label htmlFor="floatingTextarea">Treatment Body</label>
                <textarea className="form-control" placeholder="Add content for this treatment" id="floatingTextarea" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>   
            </div>

            <div className="mb-3" style={{marginTop:"00px", padding:"00px 00px 00px 00px"}}>
                <label htmlFor="formFileMultiple" className="form-label">Add Photo Here</label>
                <input className="form-control" type="file" id="formFileMultiple" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            
            
            <div style={{marginTop:"00px", padding:"00px 00px 00px 00px"}}>
            <button   className="btn btn-primary" onClick={()=>postDetails()}>Submit</button>
            </div>

            </div>


         {/* <div className="card input-field" 
            style={{
                marginTop:"100px",
                margin:"30px auto",
                maxWidth:"550px",
                padding:"20px",
                textAlign:"center"
            }}
        >
            <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <input type="text" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)}></input>
            <div className="file-field input-field">
                <div className="btn #42a5f5 blue darken">
                    <span>Upload Image</span>
                    <input type="file"  onChange={(e)=>setImage(e.target.files[0])}></input>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"></input>
                </div>
            </div>
                <button className="btn waves-effect waves-light #42a5f5 blue darken" onClick={()=>postDetails()}>
                        Submit Post
                </button>
        </div>  */}

        </>

            
    )
}

export default CreateTreatment