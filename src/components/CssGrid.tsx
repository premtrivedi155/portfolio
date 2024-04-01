import React, { useState, useEffect } from 'react';
import Typewriter from './TypeWriter';
import '../index.css';


const CssGrid: React.FC = () => {
  const boxStyle =
    'border-2 rounded-xl p-4 flex flex-col';

  const texts = ["Hello!", "नमस्ते!","Bonjour!"]; 

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 my-10 auto-rows-[100px] mt-24'>
      {/* First Compartment */}
      <div className={`${boxStyle} md:col-span-2 lg:col-span-4 lg:row-span-5 shadow-xl relative `} style={{ backgroundSize: '70px 70px', backgroundImage: 'radial-gradient(circle, #BBBBBB 1px, rgba(0, 0, 0, 0) 1px)' }}>
      <div className="padding-top-200"> 
          <Typewriter texts={texts} />
          </div>
          <p style={{ position: 'absolute', top: '300px', left: '20px' }}>I am a web developer paasionate about creating<br></br> 
            awesome user experiences and building innovative <br></br>
            digital solutions.</p>
            
      </div>

      {/* Second Compartment */}
      <div className={`${boxStyle} md:col-span-1 lg:col-span-2 lg:row-span-5 shadow-xl `}>
        <img src="../../public/hello.png" alt="Image" className="h-full w-full object-cover" />
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-6 lg:row-span-1 shadow-xl flex flex-col items-center justify-center`}>
        <h2 className='text-xl font-semibold mb-2 '>About Me</h2>
        
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-6 shadow-xl flex flex-col items-center justify-center`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-6 shadow-xl flex flex-col items-center justify-center text-justify`}>
        <h2 className='text-xl font-semibold mb-2 pb-4'>About Me</h2>
        <p className='text-gray-600'>As a web developer, I'm dedicated to creating engaging digital experiences that captivate users. I thrive on problem-solving and enjoy pushing the boundaries of technology to deliver innovative solutions. With a keen eye for detail and a passion for clean, efficient code, I craft websites and applications that blend form and function seamlessly.</p><br />
        <p className='text-gray-600'>Collaboration is key to my approach. I believe in working closely with clients and colleagues to translate ideas into reality. By fostering open communication and embracing diverse perspectives, I strive to deliver projects that exceed expectations and leave a lasting impression.</p><br />
        <p className='text-gray-600'>Outside of coding, I'm an avid learner and stay up-to-date with the latest industry trends. I'm always eager to expand my skill set and explore new opportunities for growth. Whether it's attending conferences, participating in online courses, or contributing to open-source projects, I'm committed to continuous improvement.</p><br />
        <p className='text-gray-600'>Let's connect and embark on an exciting journey of innovation and creativity together!</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-6 lg:row-span-1 shadow-xl flex flex-col items-center justify-center`}>
        <h2 className='text-xl font-semibold mb-2'>My Work</h2>
        
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-1 lg:col-span-2 lg:row-span-4 shadow-xl flex flex-col items-center justify-center`}>
        <img src="/path/to/image.jpg" alt="Image" className="h-full w-full object-cover" />
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-4 lg:row-span-4 shadow-xl flex flex-col items-center justify-center`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
};

export default CssGrid;
