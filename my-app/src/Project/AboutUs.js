import React from 'react'
import About from "../Media/About.jpg"

export default function AboutUs() {
  return (
    <div>
        <div style={{textAlign:"center", fontWeight:"bold", marginTop:"100px", fontFamily:"cursive"}}>
          
            <h1>AarogyaPrakash</h1>
            <h4>Neuro Care for Active Healing</h4>
            <br></br>
        </div>

        <div className="card " style={{maxWidth: "100%",padding:"40px", border:"none"}}>
            <div className="row g-0">
            <div className="col-md-4" >
               <img src={About} className="img-fluid rounded-start" alt="..." style={{width:"550px"}} />
            </div>           
              <div className="col-md-8" style={{paddingLeft:'50px'}}>
                  <div className="card-body">
                      {/* <h2 className="card-title">Course</h2> */}
                      <p className="card-text">
                      AarogyaPrakash is India’s fastest growing Delivery Network for Neurotherapy & Chiropractors services. At AarogyaPrakash Physiotherapy, we are committed to increase access to quality neuro care through ultra-modern clinics and high-skilled practitioners. Our integrated / multi-therapy approach helps keep a strong focus on patient needs and deliver the highest level of patient centric care with better outcomes.
                      </p>
                      
                      <p>
                      We serve a wide range of patients offering treatment at clinic as well as at the comfort of their homes. We make sure that our clinics provide clean, energetic and uplifting atmospheres for better healing. For Home Care, our well-established processes ensure delivery of high-quality treatment with superior patient service.
                      </p>
                      
                      <p>
                      Rather than transactional engagement with patients, we are committed to partner with our patients in their journey of healing.
                      </p>
                      
                      <p>
                      We work with you through your healing from start to finish providing a robust program involving combination of multiple therapies / modalities. Also, after treatment is over, we provide support / guidance to prevent injury from repeating / pain from returning. The happiness on our patient’s faces is what keeps us going.
                      </p>
                      {/* <a href="#" className="btn btn-primary">Learn More</a> */}
                  </div>
              </div>
                            
            </div>
        </div>
    </div>
  )
}
