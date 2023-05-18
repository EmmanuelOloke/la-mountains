import { Box, HStack, Image, Text } from '@chakra-ui/react';

import FooterLogo from '../assets/footer-logo.png';

const Footer = () => {
  return (
    <Box width="100vw" display="flex" justifyContent="center" backgroundColor="#414f6b">
      <HStack
        w={{ base: '100%', sm: '100%', md: '100%', lg: '60%', xl: '60%', '2xl': '60%' }}
        padding={{
          base: '1rem 1rem',
          sm: '1rem 1rem',
          md: '1rem 1rem',
          lg: '1rem 0',
          xl: '1rem 0',
          '2xl': '1rem 0',
        }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src={FooterLogo} alt="LA Mountain" />

        <Text fontFamily="Lato" fontStyle="italic" color="rgb(99, 118, 157)" fontWeight="bold">
          COPYRIGHT 2016. ALL RIGHTS RESERVED
        </Text>
      </HStack>
    </Box>
  );
};

export default Footer;
