import './App.css';
import React from'react'
import Navbar from "./Project/Navbar/Navbar"
import Home from "./Project/Home/Home"
import Blog from "./Project/Blog/Blog"
import Event from "./Project/Event/Event"
import Course from "./Project/Course"
import Treatment from "./Project/Treatment/Treatment"
import ContactUs from "./Project/ContactUs"
import AboutUs from './Project/AboutUs';
import Footer from "./Project/Footer/Footer"
import CreateTreatment from './Project/createPosts/createTreatment';
import CreateEvent from './Project/createPosts/createEvent'
import CreateBlog from './Project/createPosts/createBlog'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Find_Treatment from './Project/Treatment/Find_Treatment';
import Find_Blog from './Project/Blog/Find_Blog';
import Find_Event from './Project/Event/Find_Event';
 import Appointment from './Project/Appointment';

const Routing=()=>{
  return (
    <div>
      <Navbar></Navbar>
      {/* <Sidebar></Sidebar> */}
      {/* <Footer></Footer> */}
      <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/AboutUS" element={<AboutUs />} />
          <Route path="/Treatment" element={<Treatment />}></Route>
          <Route path="/Event" element={<Event />}></Route>
          <Route path="/Course" element={<Course />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/CreateTreatment" element={<CreateTreatment />}></Route>
          <Route path="/CreateEvent" element={<CreateEvent />}></Route>
          <Route path="/CreateBlog" element={<CreateBlog />}></Route>
          <Route path="/treat/:id" element={<Find_Treatment />}></Route>
          <Route path="/bl/:id" element={<Find_Blog />}></Route>
          <Route path="/ev/:id" element={<Find_Event />}></Route>
          <Route path="/Appointment" element={<Appointment />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}
function App() {
  return(
    <BrowserRouter>
        <Routing>
            <Home exact path="/"></Home>
        </Routing>
    </BrowserRouter>
  );
}

export default App;
