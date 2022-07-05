import React from 'react'
import C1 from "../Media/Course.png"
import M4 from "../Media/m4.png"

export default function Course() {
  return (
    <div>
          <div style={{marginTop:"100px", textAlign:"center"}}>
            <h2  style={{fontFamily:"",fontSize:"50px",color:"black",underline:"none"}}>
                Neurotherapy Courses
            </h2>
            <p>
            Neurotherapy (NT) is an alternate therapy. It presupposes that if any gland or organ is not working properly, the 
            </p>
            <p>
            required chemicals will not be produced in proper quantity and the body will be in disease condition.
            </p>
        </div>

            <div className="card  hServ" style={{ maxWidth: "100%", padding:"50px"}}>
                        <div className="row g-0">
                            <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">
                                {/* <span style={{fontSize:"30px"}}> 🏠</span> */}
                                3 Months - Neurotherapy Basic Course + 1 Months Internship
                                </h2>
                                <br></br>
                                <p className="card-text"><b>Course Syllabus :- </b>Neurotherapy points, formulas & Neurotherapy practical & theory</p>
                                {/* <a href="#" className="btn btn-primary">Know More</a> */}
                            </div>
                            </div>
                            <div className="col-md-4" style={{paddingTop:"50px",paddingLeft:"0px", textAlign:"center"}}>
                                <h4>Fees: 25,000rs </h4>
                            </div>
                        </div>
                    </div>

                    <div className="card " style={{ maxWidth: "100%", padding:"50px"}}>
                        <div className="row g-0">
                            <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">
                                {/* <span style={{fontSize:"30px"}}> 🏠</span> */}
                                6 Months - Neurotherapy Basic Course + 3 Months Internship
                                </h2>
                                <br></br>
                                <p className="card-text"><b>Course Syllabus :- </b>Neurotherapy points, formulas & complete study of Anatomy & Neurotherapy</p>
                                {/* <a href="#" className="btn btn-primary">Know More</a> */}
                            </div>
                            </div>
                            <div className="col-md-4" style={{paddingTop:"50px",paddingLeft:"0px", textAlign:"center"}}>
                                <h4>Fees: 40,000rs </h4>
                            </div>
                        </div>
                    </div>

                    <div className="card  hServ" style={{ maxWidth: "100%", padding:"50px"}}>
                        <div className="row g-0">
                            <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">
                                {/* <span style={{fontSize:"30px"}}> 🏠</span> */}
                                12 Months - Neurotherapy Basic Course + 6 Months Internship
                                </h2>
                                <br></br>
                                <p className="card-text"><b>Course Syllabus :- </b>Neurotherapy points, formulas & complete study of Anatomy & Neurotherapy. The different Neurotherapy. Formulas for treating the different types of Ailments.</p>
                                {/* <a href="#" className="btn btn-primary">Know More</a> */}
                            </div>
                            </div>
                            <div className="col-md-4" style={{paddingTop:"50px",paddingLeft:"0px", textAlign:"center"}}>
                                <h4>Fees: 60,000rs </h4>
                            </div>
                        </div>
                    </div>





    </div>
  )
}
