import './App.css';
import Navbar from './component/navBar';
import Hero from './component/hero';
import Feature from './component/feature';
import About from './component/block/about';
import AboutImage from './component/images/download.png';
import AboutImage1 from './component/images/about.png';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <About image={AboutImage} title='Know us more and work daily with us!' buttons='launch page' />
      <About image={AboutImage1} title='Know us more and work daily with us!' buttons='launch page' />
    </>
  );
}

export default App;
