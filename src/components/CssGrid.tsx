import React, { useState, useEffect } from 'react';
import Typewriter from './TypeWriter';
import '../index.css';
import NonClickableButton from './NonClickableButton';



const CssGrid: React.FC = () => {
  const boxStyle =
    'border-2 rounded-xl p-4 flex flex-col';

  const texts = ["HELLO!", "नमस्ते!","BONJOUR!"]; 

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 my-10 auto-rows-[100px] mt-24'>
      {/* First Compartment */}
      <div className={`${boxStyle} md:col-span-2 lg:col-span-4 lg:row-span-5 shadow-xl relative lato-bold-text `}>
      <div className="padding-top-150"> 
          <Typewriter texts={texts} />
          </div>
          <p style={{ position: 'absolute', top: '275px', left: '20px',fontSize: '40px' }}>My name is <NonClickableButton text="PREM TRIVEDI" /></p>
          <p style={{ position: 'absolute', top: '350px', left: '20px', fontSize: '24px'  }}>I am a web developer paasionate about creating<br></br> 
            awesome user experiences and building innovative <br></br>
            digital solutions.</p>
            
      </div>

      {/* Second Compartment */}
      <div className={`border-2 rounded-xl  flex flex-col md:col-span-1 lg:col-span-2 lg:row-span-5 shadow-xl relative custom-bg-color`}>
        <div className="card-hello-right-content" style={{ transition: 'transform 450ms ease 0s', transform: 'translateY(80px)' }}>
          <div className="card-hello-right-circles">
            {[0, 1, 2, 3, 4].map((key) => (
              <div key={key} className="card-hello-right-circle"></div>
            ))}
          </div>
          
        </div>
      </div>

       {/* third Compartment */}        
      <div className={`${boxStyle} md:col-span-2 lg:col-span-6 lg:row-span-1 shadow-xl flex flex-col items-center justify-center`}>
        <h2 className='text-xl font-semibold mb-2 '>About Me</h2>
        
      </div>

       {/* fourth Compartment */}        
      <div className={`border-2 rounded-xl  flex flex-col md:col-span-2 lg:col-span-3 lg:row-span-6 shadow-xl relative bg-gray-200`}>
      <div className="card-hello-right-content" style={{ transition: 'transform 450ms ease 0s', transform: 'translateY(80px)' }}>
          <div className="card-hello-right-circles">
            {[0, 1, 2, 3, 4].map((key) => (
              <div key={key} className="card-hello-right-circle"></div>
            ))}
          </div>
          
        </div>
        
      </div>

       {/* fifth Compartment */}        
      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-6 shadow-xl flex flex-col items-center justify-center text-justify`}>
        <h2 className='text-xl font-semibold mb-2 pb-4' style={{fontSize:'24px'}}>About Me</h2>
        <p style={{fontSize:'18px'}}>As a web developer, I'm dedicated to creating engaging digital experiences that captivate users. I thrive on problem-solving and enjoy pushing the boundaries of technology to deliver innovative solutions. With a keen eye for detail and a passion for clean, efficient code, I craft websites and applications that blend form and function seamlessly.</p><br />
        <p style={{fontSize:'18px'}}>Collaboration is key to my approach. I believe in working closely with clients and colleagues to translate ideas into reality. By fostering open communication and embracing diverse perspectives, I strive to deliver projects that exceed expectations and leave a lasting impression.</p><br />
        <p style={{fontSize:'18px'}}>Outside of coding, I'm an avid learner and stay up-to-date with the latest industry trends. I'm always eager to expand my skill set and explore new opportunities for growth. Whether it's attending conferences, participating in online courses, or contributing to open-source projects, I'm committed to continuous improvement.</p><br />
        <p style={{fontSize:'18px'}}>Let's connect and embark on an exciting journey of innovation and creativity together!</p>
      </div>

       {/* sixth Compartment */}        
      <div className={`${boxStyle} md:col-span-2 lg:col-span-6 lg:row-span-1 shadow-xl flex flex-col items-center justify-center`}>
        <h2 className='text-xl font-semibold mb-2'>My Work</h2>
        
      </div>

       {/* seventh Compartment */}        
      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl relative flex flex-col items-center justify-center custom-bg-color `} >
          <h2 className='text-xl font-semibold mb-2'>Coming Soon</h2>
          
          <div className= 'rounded-xl border-t border-gray-400 flex items-center justify-center 'style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', backgroundColor: 'white' }}>
            <p  style={{fontSize:'18px'}}>New Project</p>
            </div> 
      </div>


       {/* eight Compartment */}        
      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center relative custom-bg-color`}>
        <h2 className='text-xl font-semibold mb-2'>Coming Soon</h2>
        
        <div className= 'rounded-xl border-t border-gray-400 flex items-center justify-center 'style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', backgroundColor: 'white' }}>
            <p  style={{fontSize:'18px'}}>New Project</p>
            </div> 
      </div>

       {/* ninth Compartment */}        
      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center relative custom-bg-color`}>
        <h2 className='text-xl font-semibold mb-2'>Coming Soon</h2>
        
        <div className= 'rounded-xl border-t border-gray-400 flex items-center justify-center 'style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', backgroundColor: 'white' }}>
            <p  style={{fontSize:'18px'}}>New Project</p>
            </div> 
      </div>

       {/* tenth Compartment */}        
      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center relative custom-bg-color`}>
        <h2 className='text-xl font-semibold mb-2'>Coming Soon</h2>
        
        <div className= 'rounded-xl border-t border-gray-400 flex items-center justify-center 'style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', backgroundColor: 'white' }}>
            <p  style={{fontSize:'18px'}}>New Project</p>
            </div>       
      </div>

       {/* eleventh Compartment */}        
      <div className={`${boxStyle} md:col-span-1 lg:col-span-2 lg:row-span-4 shadow-xl flex flex-col items-center justify-center`}>
        <img src="/path/to/image.jpg" alt="Image" className="h-full w-full object-cover" />
      </div>

       {/* twelwth Compartment */}        
      <div className={`${boxStyle} md:col-span-2 lg:col-span-4 lg:row-span-4 shadow-xl flex flex-col items-center justify-center`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
};

export default CssGrid;
