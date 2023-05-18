import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Box } from '@chakra-ui/react';
import Histrory from './components/History';

import './assets/splide-cutom.css';

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Histrory />
    </Box>
  );
}

export default App;
