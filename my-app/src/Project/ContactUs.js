import React from 'react'
import phone from '../Media/phone-call.png'
import cal from '../Media/cal.png'
import bg from '../Media/bg.jpg'

export default function ContactUs() {
  return (
                <div className="card  hServ"  >
                        <div className="row ms-5 mt-5" style={{paddingTop:"50px"}}>
                            {/* <div className="col d-flex justify-content-center"> */}
                            <div className="card-body" style={{ maxWidth: "100%",  alignContent:"center"}}>
                                <h1 className="card-title text-center" style={{alignItem:"center"}}>
                                    BOOK PHYSIO IN DELHI NCR
                                </h1>
                                <h5 className="card-text text-center">We make sure that booking appointment for physiotherapy service in Gurgaon is as easy as possible. Connect with us over WhatsApp / Call & leave the rest to us.</h5>
                                {/* <a href="#" className="btn btn-primary">Know More</a> */}
                            </div>
                          {/* </div> */}
                            
                        </div>

                        <div className="row " style={{ justifyContent:"center"}}>
                    <div className="col-sm-3" style={{width:"380px" }} >
                        <div className="card border-success">
                        <div className="card-body">
                        <div >
                          <img src={phone} className="rounded mx-auto d-block" style={{width:'100px', alignItems:"center"}}/>
                        {/* <i className='fas fa-plus-square' style={{fontSize:'36px', justifyContent:"center"}}></i> */}
                        </div>
                        <br></br>
                        <h3 style={{fontWeight:"bold"}}>CONTACT US</h3>
                        <br></br>
                        <p style={{textAlign:"left"}}>Call / WhatsApp your location & treatment requirements.</p>
                        {/* <a href="#" className="btn btn-primary">Read More</a> */}
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3" style={{width:"380px" }}>
                        <div className="card border-success">
                        <div className="card-body">
                        <div className='rounded mx-auto d-block' style={{alignItems:"center"}}  >
                            <i className='fas fa-user-md  rounded mx-auto d-block' style={{fontSize:'100px', paddingLeft:"100px"}}></i>
                        </div>
                        <br></br>
                        <h3 style={{fontWeight:"bold"}}>PHYSIO CONNECT</h3>
                        <br></br>
                        <p style={{textAlign:"left"}}>
                        Best suited Physio / Chiropractor connects with you .
                        </p>
                        {/* <a href="#" className="btn btn-primary">Read More</a> */}
                        </div>
                        </div> 
                    </div>
                    {/* <div className='rounded mx-auto d-block' style={{alignItems:"center"}}  >
                            <i className='fi fi-rr-arrow-circle-right  rounded mx-auto d-block' style={{fontSize:'100px', paddingLeft:"100px"}}></i>
                        </div> */}

                    {/* <div>
                    <i class="fi fi-rr-arrow-circle-right"></i>
                    </div> */}

                    <div className="col-sm-3" style={{width:"380px", marginBottom:"50px" }}>
                        <div className="card border-success">
                        <div className="card-body">
                        {/* <div  >
                            <i className='fas fa-hospital' style={{fontSize:'100px', justifyContent:"c"}}></i>
                        </div> */}
                        <div >
                          <img src={cal} className="rounded mx-auto d-block" style={{width:'100px', alignItems:"center"}}/>
                        {/* <i className='fas fa-plus-square' style={{fontSize:'36px', justifyContent:"center"}}></i> */}
                        </div>
                        <br></br>
                        <h3 style={{fontWeight:"bold"}}>CONFIRM</h3>
                        <br></br>
                        <p style={{textAlign:"left"}}>
                        Your appointment for clinic visit or home services is confirmed
                        </p>
                        {/* <a href="#" className="btn btn-primary">Read More</a> */}
                        </div>
                        </div>
                    </div>

                    
                    </div>
                    </div>

  )
}
