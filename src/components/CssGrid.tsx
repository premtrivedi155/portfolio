import React from 'react';

const CssGrid: React.FC = () => {
  const boxStyle =
    'border-2 rounded-xl p-4 flex flex-col items-center justify-center';

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 my-10 auto-rows-[100px]'>
      {/* First Compartment */}
      <div className={`${boxStyle} md:col-span-2 lg:col-span-4 lg:row-span-5`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      {/* Second Compartment */}
      <div className={`${boxStyle} md:col-span-1 lg:col-span-2 lg:row-span-5`}>
        <img src="/path/to/image.jpg" alt="Image" className="h-full w-full object-cover" />
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-6 lg:row-span-1`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-6`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-6`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-6 lg:row-span-1`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-3 lg:row-span-4`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={`${boxStyle} md:col-span-1 lg:col-span-2 lg:row-span-4`}>
        <img src="/path/to/image.jpg" alt="Image" className="h-full w-full object-cover" />
      </div>

      <div className={`${boxStyle} md:col-span-2 lg:col-span-4 lg:row-span-4`}>
        <h2 className='text-xl font-semibold mb-2'>About Me</h2>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
};

export default CssGrid;
