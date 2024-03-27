import CssGrid from './components/CssGrid';
import Navbar from './components/Navbar';
  

function App() {
  return (
    <div>
      <Navbar/>
        <div className='max-w-7xl mx-auto'>
          <CssGrid />
        </div>
    </div>
  );
}

export default App;
