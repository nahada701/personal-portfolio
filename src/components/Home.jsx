import React from 'react'
import bgvideo from "../assets/background.mp4";
import resume from '../assets/nahada_chulliyil_resume.pdf'
import budgetbuddy from '../assets/budgetBuddy.png'
import eatzzy from '../assets/Eatzzy.png'
import skycast from '../assets/skycast.png'
import { Link } from 'react-router-dom';
import Triivana from '../assets/Triivana.png'



function Home() {
  return (
    <div>
        <video src={bgvideo} autoPlay loop muted width={"100%"}></video>
        <div className=''>
            <div style={{position:"absolute",top:"140px",width:"100%"}}>
             <div className='d-flex justify-content-between' style={{position:"relative"}}>
                    <a className='ms-3  ' href='#about' style={{color:"white",textDecoration:"none"}} >Scroll <i class="fa-solid fa-arrow-down fa-xl" ></i></a>
                    <a href={resume}   download="Nahada_Resume.pdf" className='resume me-3'>Download my resume</a>
             </div>
             <div className='row  '>
                <div className="col-md-6"> 
                <h1 className='d-flex justify-content-center align-items-center'><h1 style={{fontSize:"6vw"}}>MERN STACK <br /> <span className='ms-5 ps-5'>DEVELOPER</span></h1></h1>

                </div>
                <div className="col-md-6"> 
                    <p className='d-none d-md-flex justify-content-end align-items-center w-75' style={{marginTop:"150px"}} >
                    Fueled by creativity and curiosity, I blend technology and design to craft innovative solutions,  turning challenges into opportunities for growth.</p>
                </div>
             </div>
             <div className='d-flex justify-content-center ' style={{marginTop:"50px"}}>
                <a href="">
             <a href="#about" className=' arrow-btn p-5 remove-arrow'><i className='fa-solid fa-arrow-down'></i></a>

                </a>

             </div>
             
            </div>
        </div>
        <hr />
        <div className='d-flex justify-content-end gap-2 me-5 mt-2'>
            <a href="https://linkedin.com/in/nahada-c" className='links'>Linkedin</a> /
            <a href="https://github.com/nahada701" className='links'>Github</a> /
            <a href="https://vercel.com/nahada701s-projects" className='links'>Vercel</a>/
            <a href="https://leetcode.com/u/nahada701/ " className='links'>Leetcode</a>


        </div>
        {/* about */}
       <section id='about'>
            <div className='container' >
                <div className='row mt-5 py-5'>
                    <div className="col-md-6 d-flex justify-content-center">
                    <p>Hello, my name's Nahada. I'm a full-stack developer specialized in MERN, with a focus on creating dynamic and responsive websites. I have experience in both frontend and backend development, building seamless and efficient web applications.</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                    <Link to={'/about'}>
                 <button className=' arrow-btn'>learn more</button>
    
                    </Link>
                    </div>
                 
                </div>
               
            </div>
       </section>
        {/* projects */}
        <div>
            <h6 className='text-center my-5 pt-5 '> PROJECTS</h6>
            <div className='container mb-4'>
                <div className="row my-5 py-5">
                    <div className="col-md-2">
                    <div className="col-md-6 d-flex mb-4 justify-content-center">
               <Link to={'/projects'}>
             <button className=' arrow-btn'>View all projects</button>

                </Link>
                </div>
                    </div>
    <div className="col-md-1"></div>

                    <div className="col-md-9 mb-4">
                        <h3>
Here are some select projects that showcase my passion for creating user-friendly web solutions.</h3>
                    </div>
                </div>
            </div>

            <div className="cards my-5 container">
            <div className="row">
    {[
        { img: Triivana, name: "Triivana", tags: "Hotel Booking / Full-Stack Development / MERN", link: "https://triivana.vercel.app/" },
        { img: budgetbuddy, name: "BudgetBuddy", tags: "Finance Management / UI Design / Web App", link: "https://budget-buddy-aa9l.vercel.app/" },
        { img: eatzzy, name: "Eatzzy", tags: "Food Delivery / REST APIs / Redux", link: "https://eatzzy.vercel.app/" }
    ].map((project, index) => (
        <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className='d-flex justify-content-center'>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.img} className='project-card-img' alt={`${project.name} App Screenshot`} />
                </a>
            </div>
            <h6 className='text-center mt-3'>{project.name}</h6>
            <p className='text-center text-muted small'>{project.tags}</p>
        </div>
    ))}
</div>

</div>

        </div>

        <hr />

        {/* connect */}

   <div className='connect'>
            <div className="div my-5">
                <h5 className='text-center py-5'>GOT A PROJECT IN MIND?</h5>
                <h1 className='text-center pb-5 ' style={{fontWeight:"1000",fontSize:"70px"}}>LET'S CONNECT</h1>
            </div>
            <div className="d-flex justify-content-center">
        <a href="https://wa.me/8301012701" target="_blank" rel="noopener noreferrer">
            <button className="arrow-btn">Write a message</button>
        </a>
    </div>
    <div className='d-flex px-5 justify-content-between my-5'>
        <p>FEEL FREE TO CONNECT WITH ME ON SOCIAL</p>
        <div className='d-flex gap-3'>
        <a href="https://linkedin.com/in/nahada-c" className='links'>Linkedin</a> 
        <a href="https://instagram.com/_nahadaa_" className='links'>Instagram</a> 
        </div>
    
    </div>
   </div>



    </div>
  )
}

export default Home