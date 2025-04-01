import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HtmlLearningModule from './Html'
import '../App.css';


const Description = () => {
  return (
    <div>
      <Header/>
      <div className='web'>

         <h1>Web Development</h1>
         <div>
       <h2>Introduction to Web Development</h2> 
Web development is the process of creating websites and web applications that run on the internet. It involves designing, building, and maintaining websites using a combination of programming languages, frameworks, and tools.

Web development is broadly divided into three main categories:

<h3>Frontend Development</h3>This focuses on the user interface and experience, using technologies like HTML, CSS, and JavaScript, along with frameworks such as React, Next.js, and Vue.js.
<h3>Backend Development </h3>This handles the server-side logic, databases, and APIs, using languages like Node.js, Python, PHP, and frameworks like Express.js, Django, and Laravel.
<h3>Full-Stack Development</h3> A combination of both frontend and backend development, enabling developers to build complete web applications.
With the growing demand for web-based solutions, web development continues to evolve, integrating modern technologies like cloud computing, artificial intelligence, and progressive web applications (PWAs) to create dynamic and scalable digital experiences.
         </div>
         
         <a href="/Html" class="btn btn-primary   web_btn" >
                HTML
              </a>
              <a href="/css" class="btn btn-primary  web_btn">
               CSS
              </a>
              <a href="/js" class="btn btn-primary  web_btn">
               JAVASCRIPT
              </a>
              <a href="/react" class="btn btn-primary  web_btn">
               REACT JS
              </a>
              <a href="/node" class="btn btn-primary  web_btn">
              NODE JS
              </a>


      </div>
      <Footer/>
    </div>
  )
}

export default Description
