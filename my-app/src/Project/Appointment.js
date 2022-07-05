import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'




const Appointment=() =>{
    const history=useNavigate()
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [date,setDate]=useState("")
    const [address,setAddress]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [fabe,setFabe]=useState("")
    
    useEffect(()=>{
        // console.log(url)
        if(fabe){
            fetch("/Appointment",{
                method:"post",
                    headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    name,
                    age,
                    phone,
                    address,
                    date,
                    email
                })
            }).then(
                res=>res.json(),
                console.log(name, date, phone))
            .then(data=>{
                if(data.error){
                    console.log("kuch nahi h")
                    console.log(data.error)
                    // M.toast({html:data.error,classes:"#d32f2f red darken-2"})
                }
                else{
                    console.log("123")
                    history('/')
                    // M.toast({html:"Post Created Successfully",classes:"#4caf50 green"})
                    // history.push('/')
                }
            })
            .catch(err=>console.log(err))
        }
    },[fabe])

    const postDetails=()=>{
        const data=new FormData()
        setFabe("73")
        
    
    }



  return (
    <>
    <div style={{marginTop:"100px", textAlign:"center"}}>
            <h2  style={{fontFamily:"cursive",fontSize:"50px",color:"black",underline:"none"}}>
                Make an Appointment
            </h2>
        </div>
        
        <div  style={{marginTop:"0px",
        margin:"0px auto",
        maxWidth:"850px",
        padding:"0px"}}>
            <div className="mb-3" style={{marginTop:"00px", padding:"20px 0 0 00px"}}>
                
                <label htmlFor="exampleInputEmail1"  style={{textAlign:"left"}}>Name</label>
                
                <input type="text" placeholder="Your Name" className="form-control" id="exampleInputEmail1" value={name} onChange={(e)=>setName(e.target.value)}   />
            </div>
            <div className="mb-3" style={{marginTop:"00px", padding:"0px 0 0 00px"}}>
                
                <label htmlFor="exampleInputEmail1"  style={{textAlign:"left"}}>Email</label>
                
                <input type="email" placeholder="Your Email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e)=>setEmail(e.target.value)}   />
            </div>
            <div className="mb-3" style={{marginTop:"00px", padding:"0px 0 0 00px"}}>
                
                <label htmlFor="exampleInputEmail1"  style={{textAlign:"left"}}>Phone Number</label>
                
                <input type="number" placeholder="Phone" className="form-control" id="exampleInputEmail1" value={phone} onChange={(e)=>setPhone(e.target.value)}   />
            </div>
            <div className="mb-3" style={{marginTop:"00px", padding:"00px 00px 00px 00px"}}>
                <label htmlFor="formFileMultiple" className="form-label">Appointment Date</label>
                <input className="form-control" type="date" id="formFileMultiple" value={date} onChange={(e)=>setDate(e.target.value)}  />
            </div>
            <div className="mb-3" style={{marginTop:"00px", padding:"0px 0 0 00px"}}>
                
                <label htmlFor="exampleInputEmail1"  style={{textAlign:"left"}}>Age</label>
                
                <input type="number" className="form-control" placeholder="Age" id="exampleInputEmail1"  value={age} onChange={(e)=>setAge(e.target.value)}  />
            </div>
            <div className="mb-3 " style={{marginTop:"00px", padding:"00px 00px 00px 00px"}}>
                <label htmlFor="floatingTextarea">Address</label>
                <textarea className="form-control" placeholder="Address" id="floatingTextarea" value={address} onChange={(e)=>setAddress(e.target.value)} ></textarea>   
            </div>

            
            
            
            <div style={{marginTop:"00px", padding:"00px 00px 00px 00px" , textAlign:"center"}}>
            <button   className="btn btn-primary" onClick={()=>postDetails()}  >Submit</button>
            </div>

            </div>



            
            </>
  )
}


export default Appointment
