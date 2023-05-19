import {
  Box,
  HStack,
  Image,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import Logo from '../assets/Logo.png';
import { useRef } from 'react';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navRef = useRef(null);

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
              href="#history"
              _hover={{ textDecoration: 'none' }}
              fontFamily="Lato"
              fontStyle="italic"
              fontWeight="bold"
              color="#FFF"
              borderBottom="1.5px solid #FFF"
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
              color="#FFF"
              borderBottom="1.5px solid #FFF"
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

            <Box
              ref={navRef}
              onClick={onOpen}
              display={{
                base: 'flex',
                sm: 'flex',
                md: 'flex',
                lg: 'none',
                xl: 'none',
                '2xl': 'none',
              }}
            >
              <HamburgerIcon boxSize={8} />
            </Box>
          </HStack>
        </Box>
      </HStack>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        initialFocusRef={navRef}
        size="full"
      >
        <DrawerOverlay />

        <DrawerContent>
          <Box>
            <DrawerHeader>
              <Image src={Logo} alt="LA Mountain Logo" />
            </DrawerHeader>

            <DrawerCloseButton
              fontSize="1.2rem"
              marginTop={2.5}
              color="#292F2E"
              fontWeight="bold"
            />
          </Box>

          <DrawerBody display="flex" justifyContent="center" alignItems="center">
            <VStack gap="3rem">
              <Link
                href="#history"
                _hover={{ textDecoration: 'none' }}
                fontFamily="Lato"
                fontStyle="italic"
                fontWeight="bold"
                color="#000"
                borderBottom="1.5px solid #000"
              >
                01. HISTORY
              </Link>

              <Link
                href="#climb"
                _hover={{ textDecoration: 'none' }}
                fontFamily="Lato"
                fontStyle="italic"
                fontWeight="bold"
                color="#000"
                borderBottom="1.5px solid #000"
              >
                02. TEAM
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
