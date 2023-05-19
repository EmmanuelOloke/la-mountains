import { Box, HStack, Image, Link } from '@chakra-ui/react';

import Logo2 from '../assets/Logo2.png';

const LAMountains = () => {
  return (
    <Box width="100vw" display="flex" justifyContent="center">
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
        <Image src={Logo2} alt="LA Mountain" />

        <HStack gap="3rem">
          <Link
            href="#history"
            _hover={{ textDecoration: 'none' }}
            fontFamily="Lato"
            fontStyle="italic"
            fontWeight="bold"
            color="#414f6b"
            borderBottom="1.5px solid #414f6b"
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
          >
            01. HISTORY
          </Link>

          <Link
            href="#climb"
            _hover={{ textDecoration: 'none' }}
            fontFamily="Lato"
            fontStyle="italic"
            fontWeight="bold"
            color="#414f6b"
            borderBottom="1.5px solid #414f6b"
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
          >
            02. TEAM
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default LAMountains;
