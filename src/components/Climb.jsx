import { Box, HStack, Text } from '@chakra-ui/react';

const Climb = () => {
  return (
    <Box id="climb" width="100vw" display="flex" justifyContent="center">
      <HStack
        w={{ base: '100%', sm: '100%', md: '100%', lg: '60%', xl: '58%', '2xl': '60%' }}
        gap="3rem"
      >
        <Box position="relative">
          <Text
            fontFamily="Bebas Neue, sans-serif"
            color="rgba(65, 79, 107, 0.502)"
            fontSize="6rem"
            fontWeight="bold"
          >
            02.
          </Text>
          <Text
            position="absolute"
            fontFamily="Bebas Neue, sans-serif"
            fontWeight="bold"
            color="#414f6b"
            fontSize="1.5rem"
            left="83px"
            top="57px"
          >
            CLIMB
          </Text>
        </Box>

        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis recusandae cum id sit
          minus fuga tempora ipsa magnam quam rerum nisi, omnis mollitia eum
        </Text>
      </HStack>
    </Box>
  );
};

export default Climb;
