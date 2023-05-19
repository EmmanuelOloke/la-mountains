import { Box, Image } from '@chakra-ui/react';
import HeroImage from '../assets/hero-bg.png';
import HeroImageMobile from '../assets/Hero-Image.png';

const Hero = () => {
  return (
    <>
      <Box>
        <Image
          display={{ base: 'flex', lg: 'none' }}
          src={HeroImageMobile}
          alt="Hero background image"
        />
        <Image display={{ base: 'none', lg: 'flex' }} src={HeroImage} alt="Hero background image" />
      </Box>
    </>
  );
};

export default Hero;
