import { Box, HStack, Image, Link } from '@chakra-ui/react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <Box
      width="100vw"
      display="flex"
      justifyContent="center"
      background="transparent"
      position="absolute"
      zIndex={100}
    >
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
        <Image src={Logo} alt="LA Mountain" />

        <Box>
          <HStack gap="3rem">
            <Link
              _hover={{ textDecoration: 'none' }}
              fontFamily="Lato"
              fontStyle="italic"
              fontWeight="bold"
              color="#FFF"
              borderBottom="1.5px solid #FFF"
            >
              01. HISTORY
            </Link>

            <Link
              _hover={{ textDecoration: 'none' }}
              fontFamily="Lato"
              fontStyle="italic"
              fontWeight="bold"
              color="#FFF"
              borderBottom="1.5px solid #FFF"
            >
              02. TEAM
            </Link>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar;
