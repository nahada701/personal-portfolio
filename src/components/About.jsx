import React from 'react'

function About() {
  return (
    <div>
      <div className="mt-5">
        <div className="container  pb-5 my-5">
          <h1 className='my-5' style={{fontSize:"50px",fontWeight:"700"}}>ABOUT ME</h1>

          <p>
Hey there! I'm Nahada, a MERN Stack Developer who found my true passion in web development after completing my B.Tech in Civil Engineering from NIT Calicut (CGPA: 8.63). Though I started in a completely different field, my love for building things led me to make the big switch—and I haven’t looked back since!  
<br />
<br />


Right now, I’m doing an internship at Luminar Technolab, where I get to work hands-on with React, Node.js, Express, and MongoDB. I enjoy crafting meaningful websites that are not just functional but also provide a great user experience.  
<br />
<br />

My main areas of interest are React and Node.js. I love the power and flexibility they bring to web development. Whether it’s creating dynamic UIs or building efficient backend systems, I’m always excited to learn and improve.  
<br />
<br />

When I'm not coding, you’ll probably find me working on side projects, exploring new tech, or fine-tuning my skills. I’m always up for new challenges and opportunities to grow in this ever-evolving field!  


          </p>

        </div>
        <hr />
        <div className="container py-5 d-flex justify-content-between align-items-center skills my-5">

          <div className='col-2'>Skills</div>
          <div className='col-2'></div>
          <div className='col-6 ' style={{letterSpacing:"1.2px",lineHeight:"2px"}} > <h5>  MERN STACK • REACT.JS • NODE.JS • EXPRESS.JS • MONGODB • REST API • GIT & GITHUB • UI/UX • RESPONSIVE DESIGN • BOOTSTRAP • TAILWIND CSS • PROBLEM-SOLVING • WEB PERFORMANCE • DEPLOYMENT (VERCEL, NETLIFY, RENDER)</h5></div>
         
      
        </div>
        <hr />
   <div >
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
    </div>
  )
}

export default About