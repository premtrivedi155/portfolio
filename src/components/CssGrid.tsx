import React, { useState, useEffect } from 'react';
import Typewriter from './TypeWriter';
import '../index.css';
import NonClickableButton from './NonClickableButton';



const CssGrid: React.FC = () => {
  const boxStyle =
    'border-2 rounded-xl p-4 flex flex-col';



    const scrollToAbout = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

  const texts = ["HELLO!", "नमस्ते!","BONJOUR!"]; 

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 my-10 auto-rows-[100px] mt-24'>
      {/* First Compartment */}
      <div id= "home" className={`${boxStyle} md:col-span-2 lg:col-span-4 lg:row-span-5 shadow-xl relative lato-bold-text `}>
      <div className="padding-top-150"> 
          <Typewriter texts={texts} />
          </div>
          <p style={{ position: 'absolute', top: '275px', left: '20px',fontSize: '40px' }}>My name is <NonClickableButton text="PREM TRIVEDI" /></p>
          <p style={{ position: 'absolute', top: '350px', left: '20px', fontSize: '24px', opacity: '.5'  }}>I am a web developer paasionate about creating<br></br> 
            awesome user experiences and building innovative <br></br>
            digital solutions.</p>
            
      </div>

      {/* Second Compartment */}
      <div className={` rounded-xl  flex flex-col md:col-span-1 lg:col-span-2 lg:row-span-5 shadow-xl relative custom-bg-color`}>
        <div className="card-hello-right-content" style={{ transition: 'transform 450ms ease 0s', transform: 'translateY(80px)' }}>
          <div className="card-hello-right-circles">
            {[0, 1, 2, 3, 4].map((key) => (
              <div key={key} className="card-hello-right-circle"></div>
            ))}
          </div>
          <img src="./public/hello.png" alt="Your Image Alt Text" style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', zIndex: '4' }} />
        </div>
      </div>

       {/* third Compartment */}        
      

       {/* fourth Compartment */}        
      <div className={`rounded-xl flex flex-col md:col-span-2 lg:col-span-3 lg:row-span-6 shadow-xl relative custom-bg-color`}>
  <div className="card-hello-left" style={{ transition: 'transform 450ms ease 0s', transform: 'translateY(80px)', position: 'relative' }}>
    <div className="card-hello-left-circles">
      {[0, 1, 2, 3, 4].map((key) => (
        <div key={key} className="card-hello-left-circle"></div>
      ))}
    </div>
    <img src="./public/about.png" alt="Your Image Alt Text" style={{ position: 'absolute', bottom: '-335px', left: '360px', transform: 'translateX(-50%)', zIndex: '4' }} />
  </div>
</div>


       {/* fifth Compartment */}        
      <div id= "about" className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-6 shadow-xl flex flex-col items-center justify-center text-justify`}>
       
        <h2 className='text-xl font-semibold mb-2 pb-4' style={{fontSize:'24px'}}>About Me</h2>
       
        <p style={{fontSize:'18px', opacity: '.5',fontWeight: 'bold'}}>As a web developer, I'm passionate about crafting captivating digital experiences through innovative solutions. With a focus on clean, efficient code and a keen eye for detail, I create websites and applications that seamlessly blend form and function. Collaboration is central to my approach, as I believe in working closely with clients and colleagues to translate ideas into reality, delivering projects that exceed expectations.</p><br />
        <p style={{fontSize:'18px', opacity: '.5',fontWeight: 'bold'}}>Beyond coding, I'm committed to ongoing learning and growth within the industry. Whether attending conferences, engaging in online courses, or contributing to open-source projects, I actively seek opportunities to expand my skill set and stay abreast of the latest trends, ensuring I remain at the forefront of web development.</p><br />
        
        <p style={{fontSize:'18px', opacity: '.5',fontWeight: 'bold'}}>Let's connect and embark on an exciting journey of innovation and creativity together!</p>
      </div>

       {/* sixth Compartment */}        
      <div className={`${boxStyle} md:col-span-2 lg:col-span-6 lg:row-span-1 shadow-xl flex flex-col items-center justify-center`}>
        <h2 className='text-xl font-semibold mb-2'>My Work</h2>
        
      </div>

       {/* seventh Compartment */}        
      <div className={`rounded-xl p-4 flex flex-col md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl relative flex flex-col items-center justify-center custom-bg-color `} >
          <h2 className='text-xl font-semibold mb-2'>Coming Soon</h2>
          
          <div className= 'rounded-xl border-t border-gray-400 flex items-center justify-center 'style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', backgroundColor: 'white' }}>
            <p  style={{fontSize:'18px'}}>New Project</p>
            </div> 
      </div>


       {/* eight Compartment */}        
      <div className={`rounded-xl p-4 flex flex-col md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center relative custom-bg-color`}>
        <h2 className='text-xl font-semibold mb-2'>Coming Soon</h2>
        
        <div className= 'rounded-xl border-t border-gray-400 flex items-center justify-center 'style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', backgroundColor: 'white' }}>
            <p  style={{fontSize:'18px'}}>New Project</p>
            </div> 
      </div>

       {/* ninth Compartment */}        
      <div className={`rounded-xl p-4 flex flex-col md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center relative custom-bg-color`}>
        <h2 className='text-xl font-semibold mb-2'>Coming Soon</h2>
        
        <div className= 'rounded-xl border-t border-gray-400 flex items-center justify-center 'style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', backgroundColor: 'white' }}>
            <p  style={{fontSize:'18px'}}>New Project</p>
            </div> 
      </div>

       {/* tenth Compartment */}        
      <div className={`rounded-xl p-4 flex flex-col md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center relative custom-bg-color`}>
        <h2 className='text-xl font-semibold mb-2'>Coming Soon</h2>
        
        <div className= 'rounded-xl border-t border-gray-400 flex items-center justify-center 'style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', backgroundColor: 'white' }}>
            <p  style={{fontSize:'18px'}}>New Project</p>
            </div>       
      </div>

       {/* eleventh Compartment */}        
       <div id="contact" className={`border-2 p-4 rounded-xl flex flex-col md:col-span-1 lg:col-span-2 lg:row-span-4 shadow-xl flex flex-col  relative `} style={{ paddingTop: '90px' }}>
  {/* Add content or elements inside the contact div */}
  <p className="card-skills-subtitle">If you have any questions or inquiries,</p>
  <p className="card-skills-title">Let's connect.</p>
  <img src="connect.png" alt="" style={{ position: 'absolute', bottom: '0px', left: '50px', width: '250px', height: '250px' }} />
  <a href="https://example.com" target="_blank">
  <img src="/gmail.svg" alt="SVG 1" style={{ position: 'absolute', bottom: '20px', right: '20px', width: '60px', height: '60px' }} />
  </a>
  <a href="https://example.com" target="_blank">
  <img src="/linked.svg" alt="SVG 2" style={{ position: 'absolute', bottom: '90px', right: '20px', width: '60px', height: '60px' }} />
  </a>
  <a href="https://example.com" target="_blank">
  <img src="/github.svg" alt="SVG 3" style={{ position: 'absolute', bottom: '160px', right: '20px', width: '60px', height: '60px' }} />
  </a>
</div>

       {/* twelwth Compartment */}        
       <div className={`${boxStyle} md:col-span-2 lg:col-span-4 lg:row-span-4 shadow-xl flex  justify-center`}>
  {/* HTML structure for the twelfth compartment */}
  <div id="skills" className="card-skills card-skills-in-view flex " >
    <div className="flex-1 mr-10">
      <div className="card-skills-subtitle">I constantly try to improve myself</div>
      <div className="card-skills-title">Currently, I am learning React.</div>
      <div className="card-skills-description">I am also learning TypeScript via my open source repos. Other than that, I also constantly practice web design.</div>
    </div>
    <div className="image-container flex-1 ml-10 " >
      <div className="grid grid-cols-3 gap-4">
        <img src="./public/html.png" alt="HTML" width="75px" height="75px" />
        <img src="./public/css.png" alt="CSS" width="75px" height="75px" />
        <img src="./public/js.png" alt="Java Script" width="75px" height="75px" />
        <img src="./public/mysql.png" alt="My SQL" width="75px" height="75px" />
        <img src="./public/react.png" alt="React" width="75px" height="75px" />
        <img src="./public/tw.png" alt="Tailwind CSS" width="75px" height="75px" />
        <img src="./public/java.png" alt="Java" width="75px" height="75px" />
        <img src="./public/bootstrap.png" alt="Bootstrap" width="75px" height="75px" />
        <img src="./public/github.png" alt="Github" width="75px" height="75px" />
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default CssGrid;
