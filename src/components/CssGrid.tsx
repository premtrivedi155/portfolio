
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
          <img src="/hello.png" alt="Your Image Alt Text" style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', zIndex: '4' }} />
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
    <img src="/about.png" alt="Your Image Alt Text" style={{ position: 'absolute', bottom: '-335px', left: '360px', transform: 'translateX(-50%)', zIndex: '4' }} />
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
       <div className={`rounded-xl flex flex-col md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl relative  items-center justify-center custom-bg-color group `} >
       <img src="/d.png" alt="Description of image" className="rounded-xl w-full h-full object-contain" />
  
  {/* Overlay with custom gradient background */}
  <a href="https://premtrivedi155.github.io/sundown/">
  <div className="rounded-xl absolute inset-0 bg-gradient-to-b from-white/100 via-white/85 to-white/100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center items-center justify-center">
    <p className='font-bold pb-4 pt-36 text-xl'>Sundown Studio</p>
    <ul>
      <li className='text-lg'>•HTML, CSS, and JavaScript for front-end development.</li>
      <li className='text-lg'>•Locomotive Scroll and Swiper libraries for smooth <br /> scrolling and carousel functionality.</li>
      <li className='text-lg'>•Custom font integration to enhance typography styling.</li>
    </ul>
    
  </div>
  </a>

  
</div>



       {/* eight Compartment */}        
      <div className={`rounded-xl md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center relative custom-bg-color group`}>
      <img src="/a.jpg" alt="Description of image" className="rounded-xl w-full h-full object-contain" />
  
  {/* Overlay with custom gradient background */}
  <a href="https://premtrivedi155.github.io/magma/">
  <div className="rounded-xl absolute inset-0 bg-gradient-to-b from-white/100 via-white/85 to-white/100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center items-center justify-center">
    <p className='font-bold pb-4 pt-28 text-xl'>Magma</p>
    <ul>
      <li className='text-lg'>•Developed a responsive website, ensuring compatibility across devices using  HTML, CSS, and possibly JavaScript for interactivity.</li>
      <li className='text-lg'>•Implemented innovative features such as canvas animations and dynamic content layouts to elevate the website's aesthetic appeal and functionality.</li>
      <li className='text-lg'>•Integrated interactive elements like navigation bars, buttons, and video backgrounds to engage users and facilitate seamless navigation.</li>
    </ul>
    
  </div>
  </a>
      </div>

       {/* ninth Compartment */}        
      <div className={`rounded-xl p-4 flex flex-col md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center relative custom-bg-color`}>
        <h2 className='text-xl font-semibold mb-2'>Coming Soon</h2>
        
         
      </div>

       {/* tenth Compartment */}        
      <div className={`rounded-xl p-4 flex flex-col md:col-span-2 lg:col-span-3 lg:row-span-4 shadow-xl flex flex-col items-center justify-center relative custom-bg-color`}>
        <h2 className='text-xl font-semibold mb-2'>Coming Soon</h2>
        
              
      </div>

       {/* eleventh Compartment */}        
       <div id="contact" className={`border-2 p-4 rounded-xl flex flex-col md:col-span-1 lg:col-span-2 lg:row-span-4 shadow-xl flex flex-col  relative `} style={{ paddingTop: '90px' }}>
  {/* Add content or elements inside the contact div */}
  <p className="card-skills-subtitle">If you have any questions or inquiries,</p>
  <p className="card-skills-title">Let's connect.</p>
  <img src="connect.png" alt="" style={{ position: 'absolute', bottom: '0px', left: '50px', width: '250px', height: '250px' }} />
  <a href="mailto:premtrivedi1999@gmail.com" target="_blank">
  <img src="/gmail.svg" alt="SVG 1" style={{ position: 'absolute', bottom: '20px', right: '20px', width: '60px', height: '60px' }} />
  </a>
  <a href="https://www.linkedin.com/in/prem-piyushkumar-trivedi/" target="_blank">
  <img src="/linked.svg" alt="SVG 2" style={{ position: 'absolute', bottom: '90px', right: '20px', width: '60px', height: '60px' }} />
  </a>
  <a href="https://github.com/premtrivedi155" target="_blank">
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
        <img src="/html.png" alt="HTML" width="75px" height="75px" />
        <img src="/css.png" alt="CSS" width="75px" height="75px" />
        <img src="/js.png" alt="Java Script" width="75px" height="75px" />
        <img src="/mysql.png" alt="My SQL" width="75px" height="75px" />
        <img src="/react.png" alt="React" width="75px" height="75px" />
        <img src="/tw.png" alt="Tailwind CSS" width="75px" height="75px" />
        <img src="/java.png" alt="Java" width="75px" height="75px" />
        <img src="/bootstrap.png" alt="Bootstrap" width="75px" height="75px" />
        <img src="/github.png" alt="Github" width="75px" height="75px" />
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default CssGrid;
