import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LAMountains from './components/LAMountains';
import Histrory from './components/History';
import Climb from './components/Climb';
import Footer from './components/Footer';

import './assets/splide-custom.css';

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <LAMountains />
      <Histrory />
      <Climb />
      <Footer />
    </Box>
  );
}

export default App;
