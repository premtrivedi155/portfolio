import CssGrid from './components/CssGrid';
import FloatingNav from './components/Navbar';


function App() {

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];

  return (
    <div>
      
      <FloatingNav navItems={navItems} />
        <div className='max-w-7xl mx-auto'>
          <CssGrid />
        </div>
        
    </div>
  );
}

export default App;
