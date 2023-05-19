import {
  Flex,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';

import Mountain1 from '../assets/mountain1.png';
import Mountain2 from '../assets/mountain2.png';

const MountainTabs = () => {
  return (
    <Tabs variant="unstyled">
      <TabList background="#414f6b" color="#b0b4be" paddingLeft="15rem">
        <Tab _selected={{ color: '#414f6b', bg: '#b0b4be' }}>
          <Text fontFamily="Bebas Neue, sans-serif" borderBottom="1px solid #414f6b">
            MOUNTAIN 1
          </Text>
        </Tab>
        <Tab _selected={{ color: '#414f6b', bg: '#b0b4be' }} fontFamily="Bebas Neue, sans-serif">
          <Text fontFamily="Bebas Neue, sans-serif" borderBottom="1px solid #414f6b">
            MOUNTAIN 2
          </Text>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel
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
            left="310px"
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
        </TabPanel>
        <TabPanel
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
            left="310px"
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
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MountainTabs;
