import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import HistoryBgImage from '../assets/history-bg.png';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import BackpackMan from '../assets/backpack-slide-img.png';
import MountainClouds from '../assets/mountain-clouds-slide-img.png';

const Histrory = () => {
  const splideOptions = {
    type: 'loop',
    autoWidth: true,
    autoHeight: true,
    gap: '0.5rem',
    arrows: false,
  };
  return (
    <Flex
      backgroundImage={HistoryBgImage}
      height="900px"
      backgroundSize="cover"
      justifyContent="center"
    >
      <VStack justifyContent="space-between">
        <VStack gap={0} alignItems="left">
          <HStack position="relative">
            <Text
              fontFamily="Bebas Neue, sans-serif"
              color="rgba(65, 79, 107, 0.502)"
              fontSize="6rem"
              fontWeight="bold"
            >
              01.
            </Text>

            <Text
              fontFamily="Bebas Neue, sans-serif"
              fontWeight="bold"
              color="#414f6b"
              fontSize="1.5rem"
              position="absolute"
              left="77px"
              top="57px"
            >
              HISTORY
            </Text>
          </HStack>

          <Text fontFamily="Lato" fontStyle="italic" width="60vw" paddingLeft="2.5rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aperiam ratione
            tempore voluptatum atque earum facere et quos hic distinctio quam cumque dolores
            praesentium ad illum in maiores vel error architecto repellendus itaque, sed nulla. Ea
            non voluptatibus aspernatur quasi veniam deleniti pariatur laboriosam consectetur
            adipisci!
          </Text>
        </VStack>

        <Flex
          backgroundColor="rgba(65, 79, 107, 0.7)"
          height="12rem"
          width="100vw"
          justifyContent="center"
        >
          <Box width="60%" marginTop="1.5rem">
            <Splide hasTrack={true} aria-label="History Carousel" options={splideOptions}>
              <SplideSlide>
                <Image src={BackpackMan} alt="man with a backpack" />
              </SplideSlide>
              <SplideSlide>
                <Image src={MountainClouds} alt="man with a backpack" />
              </SplideSlide>
              <SplideSlide>
                <Image src={BackpackMan} alt="man with a backpack" />
              </SplideSlide>
              <SplideSlide>
                <Image src={MountainClouds} alt="man with a backpack" />
              </SplideSlide>
            </Splide>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Histrory;
