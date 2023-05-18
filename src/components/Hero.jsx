import { Box, Image } from '@chakra-ui/react';
import HeroImage from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <Box>
      <Image src={HeroImage} alt="Hero background image" />
    </Box>
  );
};

export default Hero;
