import React from 'react'
import budgetbuddy from '../assets/budgetBuddy.png'
import eatzzy from '../assets/eatzzy.png'
import skycast from '../assets/skycast.png'
import goldenMelano from '../assets/goldenMelano.png'
import porsche from '../assets/porscheClone.png'
import Microsoft from '../assets/microsoftClone.png'
import Triivana from '../assets/Triivana.png'



import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>

{/* projects */}
 

<div className='d-flex justify-content-end gap-2 me-5 mt-2'>

            <a href="https://github.com/nahada701" className='links'>Github</a> /
            <a href="https://vercel.com/nahada701s-projects" className='links'>Vercel</a>


        </div>
<div className='container'>
  <div className="row  d-flex align-items-center flex-column">
  
  <div className="col-md-8 mb-5 mb-5">
     <a href=''> <img src={Triivana} className='project-img' alt="" /></a>
      <div className='d-flex  my-3 justify-content-between align-items-center flex-wrap '>
        <h4 className=''>
        Triivana
        </h4>
        <p className='m-0 p-0'>Ongoing</p>
        <p className='m-0 p-0'> Hotel Booking / Full-Stack Development / MERN</p>
      </div>
  
    </div>
  
    <div className="col-md-8 mb-5 mb-5">
     <a href='https://budget-buddy-aa9l.vercel.app'> <img src={budgetbuddy} className='project-img' alt="" /></a>
      <div className='d-flex  my-3 justify-content-between align-items-center flex-wrap  '>
        <h4 className=''>
          Budget Buddy
        </h4>
        <p className='m-0 p-0'>Sep 2024</p>
        <p className='m-0 p-0'>Finance Management / UI Design / Web App</p>
      </div>
  
    </div>
    
    <div className="col-md-8 mb-5 mb-5">
     <a href='https://eatzzy.vercel.app/'> <img src={eatzzy} className='project-img' alt="" /></a>
      <div className='d-flex  my-3 justify-content-between align-items-center flex-wrap '>
        <h4 className=''>
        Eatzzy
        </h4>
        <p className='m-0 p-0'>Jan 2025</p>
        <p className='m-0 p-0'>Food Delivery / REST APIs / Redux</p>
      </div>
  
    </div>
  
    <div className="col-md-8 mb-5 mb-5">
     <a href='https://weather-nepgqfiwc-nahada701s-projects.vercel.app/'> <img src={skycast} className='project-img' alt="" /></a>
      <div className='d-flex  my-3 justify-content-between align-items-center flex-wrap '>
        <h4 className=''>
        Skycast
        </h4>
        <p className='m-0 p-0'>May 2024</p>
        <p className='m-0 p-0'>Weather Forecast / API Integration / JavaScript</p>
      </div>
  
    </div>
  
    <div className="col-md-8 mb-5 mb-5">
     <a href='https://goldenmelano.store/'> <img src={goldenMelano} className='project-img' alt="" /></a>
      <div className='d-flex  my-3 justify-content-between align-items-center flex-wrap '>
        <h4 className=''>
        Golden Melano
        </h4>
        <p className='m-0 p-0'>Aug 2024</p>
        <p className='m-0 p-0'>Customer Engagement / Form Integration / HTML & CSS</p>
      </div>
  
    </div>
  
    <div className="col-md-8 mb-5 mb-5">
     <a href=''> <img src={porsche} className='project-img' alt="" /></a>
      <div className='d-flex  my-3 justify-content-between align-items-center flex-wrap '>
        <h4 className=''>
        Porsche Clone
        </h4>
        <p className='m-0 p-0'>Aug 2024</p>
        <p className='m-0 p-0'>Customer Engagement / Form Integration / HTML & CSS</p>
      </div>
  
    </div>
    <div className="col-md-8 mb-5 mb-5">
     <a href=''> <img src={Microsoft} className='project-img' alt="" /></a>
      <div className='d-flex  my-3 justify-content-between align-items-center flex-wrap '>
        <h4 className=''>
        Microsoft Clone
        </h4>
        <p className='m-0 p-0'>Aug 2024</p>
        <p className='m-0 p-0'>Customer Engagement / Form Integration / HTML & CSS</p>
      </div>
  
    </div>
  
    
  
    
  
  </div>
</div>





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

export default Projects