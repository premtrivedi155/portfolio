import React, { useState, useEffect } from 'react';
import Typewriter from './TypeWriter';


const CssGrid: React.FC = () => {
  const boxStyle =
    'border-2 rounded-xl p-4 flex flex-col items-center justify-center';

  const texts = ["Hello", "How are you"]; 

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 my-10 auto-rows-[100px] mt-24'>
      {/* First Compartment */}
      <div className={`${boxStyle} md:col-span-2 lg:col-span-4 lg:row-span-5 shadow-xl`} style={{ backgroundSize: '70px 70px', backgroundImage: 'radial-gradient(circle, #BBBBBB 1px, rgba(0, 0, 0, 0) 1px)' }}>
          <Typewriter texts={texts} />
      </div>

      {/* Second Compartment */}
      <div className={`${boxStyle} md:col-span-1 lg:col-span-2 lg:row-span-5 shadow-xl`}>
        <img src="../../public/hello.png" alt="Image" className="h-full w-full object-cover" />
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-6 lg:row-span-1 shadow-xl`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-6 shadow-xl`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-6 shadow-xl`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-6 lg:row-span-1 shadow-xl`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-1 lg:col-span-2 lg:row-span-4 shadow-xl`}>
        <img src="/path/to/image.jpg" alt="Image" className="h-full w-full object-cover" />
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-4 lg:row-span-4 shadow-xl`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
};

export default CssGrid;
