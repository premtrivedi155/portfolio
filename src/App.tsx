
import CssGrid from './components/CssGrid';
import FloatingNav from './components/Navbar';
import './style.css';
import LavaLampBackground from './components/LavaLampBackground'; // Import LavaLampBackground component



function App() {
  

  return (
    
      <div>
         <LavaLampBackground />
        <FloatingNav />
       
        <div className='max-w-7xl mx-auto'>
          <CssGrid />
        </div>
      </div>
    
  );
}

export default App;
