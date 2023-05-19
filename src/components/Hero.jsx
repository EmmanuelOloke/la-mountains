import { Box, Flex } from '@chakra-ui/react';
import HeroImage from '../assets/hero-bg.png';
import HeroImageMobile from '../assets/Hero-Image.png';

const Hero = () => {
  return (
    <>
      <Box>
        <Flex
          display={{ base: 'flex', lg: 'none' }}
          backgroundImage={HeroImageMobile}
          height="900px"
          backgroundSize="cover"
          backgroundPosition="center"
          justifyContent="center"
        />

        <Flex
          display={{ base: 'none', lg: 'flex' }}
          backgroundImage={HeroImage}
          height="900px"
          backgroundSize="cover"
          backgroundPosition="center"
          justifyContent="center"
        />
      </Box>
    </>
  );
};

export default Hero;
