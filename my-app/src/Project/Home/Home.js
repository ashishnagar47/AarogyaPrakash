import  React, {useState,useEffect} from 'react'
import '../Home/Home.css'
import Pic from "../../Media/W1.jpg"
import S1 from '../../Media/S1.jpeg'
import S2 from '../../Media/S2.jpeg'
import S3 from '../../Media/S3.jpg'
import C1 from "../../Media/Course.png"
import M4 from "../../Media/m4.png"

// import Navbar from './Navbar';
// import { NavLink } from 'react-router-dom';

const Home=()=>{
    const [data,setData]=useState([])
  useEffect(()=>{
    // console.log(r.body)
    fetch('/allBlog')
    .then(res=>res.json())
    .then(result=>{
      console.log(result.Blog)
      setData(result.Blog)
    })
  },[])
  return(
        <>
            <div className='Container' style={{paddingTop:"60px"}}>
                <div className="card mb-1" >
                    <div className="row g-0 ">
                        <div className="col-md-3">
                        <img src={Pic} className="pic1 img-fluid rounded-start" style={{height:"200px", width:"320px"}}/>
                        </div>
                        <div className="col-md-4 rowT">
                        <div className="card-body ">
                            <div>
                                <div  style={{marginLeft:"0px",paddingTop:'40px', wordWrap:"break-word"}}>     
                                    <h6 style={{fontWeight:"bold"}}>
                                        <span style={{fontSize:"30px"}}> 🏠</span>
                                        Shree Amaranath Barfani Ashram C-Block Dilshad Garden opposite IHBAS Hospital Delhi:95
                                        </h6>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-2 rowT">
                        <div className="card-body">
                            <div>
                                <div  style={{paddingLeft:"0px",paddingTop:'40px', fontWeight:"600"}}>
                                    
                                    <span style={{fontSize:"30px"}}> 📱</span>
                                     +91-9810943171
                                    </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 rowT">
                        <div className="card-body ">
                            <div>
                                <div  style={{paddingTop:"40px", fontWeight:"600"}}>
                                    
                                    <span style={{fontSize:"30px"}}> 📧</span>
                                     aarogyaprakash1@gmail.com
                                    </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <span style={{width:"10px", marginTop:"200px"}} >
          
            <Button color="primary" >
              <AddIcon />
            </Button>
            <Button color="secondary" >
              <EditIcon />
            </Button>
            <Button variant="extended">
              <NavigationIcon sx={{ mr: 1 }} />
              Navigate
            </Button>
            <Button>
              <FavoriteIcon />
            </Button>
          </span> */}

             <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{height:"500px"}}>
                    <div className="carousel-item  active" style={{textAlign:"center"}}>
                    <img src={S1} className="d-block w-100" style={{height:"700px"}}  />
                    <div className="carousel-caption  d-md-block" style={{top:"10%", color:"black"}}>
                        <div style={{fontWeight:"bolder", fontSize:"50px"}}>
                            Benefits of Neurotherapy</div>
                        <h5>Benefits of LMNT. It sets root cause of the...</h5>
                            {/* <button type="button" className="btn btn-primary btn-sm" style={{marginRight:"10px"}}>Get Started!</button>
                            <button type="button" className="btn btn-secondary btn-sm">View More</button> */}
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={S2} className="d-block w-100" style={{height:"700px"}}  />
                    <div className="carousel-caption  d-md-block" style={{top:"10%", color:"black"}}>
                        <div style={{fontWeight:"bolder", fontSize:"50px"}}>
                            Neurotherapy Principles</div>
                        <h5>Neurotherapy has been found to stimulate glands and the internal...</h5>
                            {/* <button type="button" className="btn btn-primary btn-sm" style={{marginRight:"10px"}}>Get Started!</button> */}
                            {/* <button type="button" className="btn btn-secondary btn-sm">View More</button> */}
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={S3} className="d-block w-100" style={{height:"700px"}}  />
                    <div className="carousel-caption  d-md-block" style={{top:"10%", color:"black"}}>
                        <div style={{fontWeight:"bolder", fontSize:"50px"}}>
                            Neurotherapy Technique</div>
                        <h5>Diagnosis and treatment techniques by experience over the years...</h5>
                            {/* <button type="button" className="btn btn-primary btn-sm" style={{marginRight:"10px"}}>Get Started!</button>
                            <button type="button" className="btn btn-secondary btn-sm">View More</button> */}
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                
            </div>


            {/* Container */}
            <div className='Container1  d-flex justify-content-center' style={{backgroundColor:"rgba(113, 108, 114, 0.119"}} >
                <div className="row d-flex justify-content-center" style={{ justifyContent:"center"}}>
                    <div className="col-sm-3" style={{width:"280px",  marginTop:"50px" }} >
                        <div className="card border-success">
                        <div className="card-body">
                        <div >
                        <i className='fas fa-plus-square' style={{fontSize:'50px', marginLeft:"70px"}}></i>
                        </div>
                        <br></br>
                        <h6 style={{fontWeight:"bold"}}>Dr. Lajpatrai Mehra's Neurotherapy</h6>
                        <br></br>
                        <p style={{textAlign:"left"}}>Neurotherapy is an alternative way of healing; it has shown some very good results in...</p>
                        <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3" style={{width:"280px",  marginTop:"50px" }}>
                        <div className="card border-success">
                        <div className="card-body">
                        <div  >
                            <i className='fas fa-user-md' style={{fontSize:'50px', marginLeft:"70px"}}></i>
                        </div>
                        <br></br>
                        <h6 style={{fontWeight:"bold"}}>Neurotherapy Doctor</h6>
                        <br></br>
                        <p style={{textAlign:"left"}}>
                            Mr. Prakash Sharma Founder & President of the Aarogya Prakash a qualified Neurotherapist from Mumbai...
                        </p>
                        <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                        </div> 
                    </div>

                    <div className="col-sm-3" style={{width:"280px", marginTop:"50px"}}>
                        <div className="card border-success">
                        <div className="card-body">
                        <div  >
                            <i className='fas fa-hospital' style={{fontSize:'50px', marginLeft:"70px"}}></i>
                        </div>
                        <br></br>
                        <h6 style={{fontWeight:"bold"}}>Service Facilities</h6>
                        <br></br>
                        <p style={{textAlign:"left"}}>
                            Clinic Facility, Morning: Dilshad Garden, Evening: Bhajanpura, Home visit facility, online consultant facility...
                        </p>
                        <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                        </div>
                    </div>

                    <div className="col-sm-3" style={{width:"280px", marginTop:"50px", marginBottom:"50px"  }}>
                        <div className="card border-success">
                        <div className="card-body">
                        <div  >
                            <i className='fas fa-ambulance' style={{fontSize:'50px', marginLeft:"70px"}}></i>
                        </div>
                        <br></br>
                        <h6 style={{fontWeight:"bold"}}>How to Judge</h6>
                        <br></br>
                        <p style={{textAlign:"left"}}>
                           How to Judge The Efficiency of LMNT Treatment, before we start the treatment we check patients...
                        </p>
                        <a href="#" className="btn btn-primary">Read More</a>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>

                

                    {/* COURSE */}

                    <div className="card " style={{maxWidth: "100%",padding:"40px"}}>
                        <div className="row g-0">
                            
                            <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">Course</h2>
                                <p className="card-text">Basic Course 3 months Advance Course 6 months Diploma Course 12 months Offline Course & Online Course available</p>
                                <a href="/Course" className="btn btn-primary">Learn More</a>
                            </div>
                            </div>
                            <div className="col-md-3" style={{padding:"0px",paddingLeft:"0px"}}>
                                <img src={C1} className="img-fluid rounded-start" alt="..." />
                            </div>
                        </div>
                    </div>

                    {/* HOME SERVICE */}

                    <div className="card  hServ" style={{ maxWidth: "100%", padding:"50px"}}>
                        <div className="row g-0">
                            <div className="col-md-6">
                            <div className="card-body">
                                <h2 className="card-title">
                                <span style={{fontSize:"30px"}}> 🏠</span>
                                Home Service
                                </h2>
                                <p className="card-text">Home services available Delhi Ncr. Neurotherapy Expert</p>
                                <a href="https://wa.me/message/G4GOFEHUCX5RB1" className="btn btn-primary">Know More</a>
                            </div>
                            </div>
                            <div className="col-md-3" style={{paddingTop:"0px",paddingLeft:"0px"}}>
                                <img src={M4} className="img-fluid rounded-start" alt="..." />
                            </div>
                        </div>
                    </div>


                    {/* Recent Post */}
                    <div style={{textAlign:"center", padding:"20px"}}>
                        <h4>Recent Post</h4>
                        <p>Check our latest news and updates from this section.</p>
                    </div>
                    
                     {/* <div className="card-group">
                        
                        <div className="card" style={{maxWidth:"345px", marginLeft:"20px", marginRight:"20px"}}>
                            <img src={C1} className="img-fluid " style={{height:"auto"}} alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                             </div>
                        </div>
                        <div className="card" style={{maxWidth:"345px", marginLeft:"20px", marginRight:"20px"}}>
                            <img src={C1} className="img-fluid " style={{height:"auto"}} alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                             </div>
                        </div>
                        <div className="card" style={{maxWidth:"345px", marginLeft:"20px", marginRight:"20px"}} >
                            <img src={M4} className="image-fluid " style={{height:"auto"}} alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                             </div>
                        </div>
                        <div className="card" style={{maxWidth:"345px", marginLeft:"20px", marginRight:"20px"}} >
                            <img src={Pic} className="image-fluid" style={{height:"auto"}} alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                             </div>
                        </div> 
                </div> */}
                    
            {/* </div> */}
            {/* {/* <div className='row'> */}
             {/* <Card  sx={{ maxWidth: 345 }} >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    heigth="140px"
                    image={M4}
                /> 
                 <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card> */}

               {/* <Card className="col md-6" sx={{ maxWidth: 345 }}>
                <CardMedia
                    alt="green iguana"
                    width="50px"
                    image={M4}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card> */}

                {/* </div> */}
                
                <div className='card-group '>
                        { 
                            data.slice(-4).reverse().map(item=>{
                            return(
                            <div className="card d-flex justify-content-center " style={{maxWidth:"345px", marginLeft:"20px", marginRight:"20px"}}  key={item._id}>
                            {/* <div className="" style={{maxWidth:"345px"}}  key={item._id}> */}
                                <img src={item.picture}  className="img-fluid " style={{height:"auto"}}  alt="..." />
                                <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                {/* <p className="card-text" style={{overflow: "hidden",textOverflow: "ellipsis",display: "-webkit-box",WebkitLineClamp: "3",WebkitBoxOrient: "vertical",}}>{item.body}</p> */}

                                <p className="card-text" style={{overflow: "hidden",textOverflow: "ellipsis",display: "-webkit-box",WebkitLineClamp: "3",WebkitBoxOrient: "vertical",}} >{item.body}</p>

                                <a href={"bl/"+item._id} className="card-link">Read More</a>
                                </div>
                            {/* </div> */}
                              </div>
                            )
                            }) 
                        }

                </div>
                
        </>

  )
}

export default Home;