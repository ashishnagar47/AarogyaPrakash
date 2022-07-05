import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'



  const Find_Blog=()=>{
    const [data,setData]=useState([])
    const {id}=useParams()
    console.log(id)

    useEffect(()=>{
        fetch(`/bl/${id}`)
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result)
        })
    },[])
    


  
  return (
    
         <>
            {data?
                <div className="col d-flex justify-content-center" key={data._id}>
                <div className="card" style={{maxWidth:"600px", marginTop:"100px"}}>
                  <img src={data.picture} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    {/* <p className="card-text" style={{overflow: "hidden",textOverflow: "ellipsis",display: "-webkit-box",WebkitLineClamp: "3",WebkitBoxOrient: "vertical",}}>{data.body}</p> */}
      
                    <p className="card-text" >{data.body}</p>
      
                    {/* <a href={"treat/"+data._id} className="card-link">Read More</a> */}
                  </div>
                </div>
                </div>
            
            :<h2>loading....</h2>}
          
          </>
          )
        }
  
  

export default Find_Blog