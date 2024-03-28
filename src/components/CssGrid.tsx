import React, { useState, useEffect } from 'react';

const Typewriter: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100); // Typing speed
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index];
      setText(isDeleting ? currentText.substring(0, text.length - 1) : currentText.substring(0, text.length + 1));
      
      // Set typing speed
      setSpeed(isDeleting ? 100 : 100);

      // Check if text is fully typed or deleted
      if (!isDeleting && text === currentText) {
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((index + 1) % texts.length); // Move to the next text
        setLoopCount(loopCount + 1);
      }
    };

    const typingInterval = setInterval(handleTyping, speed);

    return () => clearInterval(typingInterval);
  }, [index, text, isDeleting, texts, speed, loopCount]);

  return <span>{text}<span className="animate-blink">|</span></span>;
};

const CssGrid: React.FC = () => {
  const boxStyle =
    'border-2 rounded-xl p-4 flex flex-col items-center justify-center';

  const texts = ["Hello", "How are you"]; // Customize your texts here

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 my-10 auto-rows-[100px] mt-24'>
      {/* First Compartment */}
      <div className={`${boxStyle} md:col-span-2 lg:col-span-4 lg:row-span-5 shadow-xl`} style={{ backgroundSize: '40px 40px', backgroundImage: 'radial-gradient(circle, #BBBBBB 1px, rgba(0, 0, 0, 0) 1px)' }}>
          <Typewriter texts={texts} />
      </div>

      {/* Second Compartment */}
      <div className={`${boxStyle} md:col-span-1 lg:col-span-2 lg:row-span-5 shadow-xl`}>
        <img src="/path/to/image.jpg" alt="Image" className="h-full w-full object-cover" />
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
