import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Flex,
  VStack,
  HStack,
} from '@chakra-ui/react';

import Mountain1 from '../assets/mountain1.png';
import Mountain2 from '../assets/mountain2.png';

const MountainAccordion = () => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <AccordionButton _expanded={{ bg: '#414f6b', color: '#b0b4be' }}>
          <Box as="span" flex="1" textAlign="left">
            <Text fontFamily="Bebas Neue, sans-serif">MOUNTAIN 1</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel
          padding={0}
          backgroundImage={Mountain1}
          width="100%"
          height="500px"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          position="relative"
        >
          <Flex
            background="#FFF"
            w="22rem"
            h="14rem"
            opacity="0.8"
            position="absolute"
            top="80px"
            left={{ base: '30px', md: '310px' }}
            justifyContent="center"
            alignItems="center"
          >
            <VStack alignItems="flex-start">
              <Text fontFamily="Bebas Neue, sans-serif" fontWeight="bold" fontSize="2rem">
                SCHEDULE
              </Text>

              <VStack fontFamily="Lato">
                <HStack gap="2rem">
                  <Text>25 Nov 2016</Text>
                  <Text>Vestibulum viverra</Text>
                </HStack>
                <HStack gap="2rem">
                  <Text>28 Nov 2016</Text>
                  <Text>Vestibulum viverra</Text>
                </HStack>
                <HStack gap="2rem">
                  <Text>18 Dec 2016</Text>
                  <Text>Vestibulum viverra</Text>
                </HStack>
                <HStack gap="2rem">
                  <Text>7 Jan 2017</Text>
                  <Text>Vestibulum viverra</Text>
                </HStack>
              </VStack>
            </VStack>
          </Flex>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton _expanded={{ bg: '#414f6b', color: '#b0b4be' }}>
          <Box as="span" flex="1" textAlign="left">
            <Text fontFamily="Bebas Neue, sans-serif">MOUNTAIN 2</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel
          padding={0}
          backgroundImage={Mountain2}
          width="100%"
          height="500px"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          position="relative"
        >
          <Flex
            background="#FFF"
            w="22rem"
            h="14rem"
            opacity="0.8"
            position="absolute"
            top="80px"
            left={{ base: '30px', md: '310px' }}
            justifyContent="center"
            alignItems="center"
          >
            <VStack alignItems="flex-start">
              <Text fontFamily="Bebas Neue, sans-serif" fontWeight="bold" fontSize="2rem">
                SCHEDULE
              </Text>

              <VStack fontFamily="Lato">
                <HStack gap="2rem">
                  <Text>17 Nov 2016</Text>
                  <Text>Vestibulum viverra</Text>
                </HStack>
                <HStack gap="2rem">
                  <Text>13 Dec 2016</Text>
                  <Text>Vestibulum viverra</Text>
                </HStack>
                <HStack gap="2rem">
                  <Text>18 Dec 2016</Text>
                  <Text>Vestibulum viverra</Text>
                </HStack>
                <HStack gap="2rem">
                  <Text>7 Jan 2017</Text>
                  <Text>Vestibulum viverra</Text>
                </HStack>
              </VStack>
            </VStack>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default MountainAccordion;
