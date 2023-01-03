import { Circle, Box, SquareProps } from "@chakra-ui/react";

const CartCount = (props: SquareProps) => (
  <Box position={"relative"} top="-4" left="-6" h="0" w="0">
    <Circle
      fontSize="sm"
      fontWeight="semibold"
      centerContent
      position="absolute"
      //   top="-2"
      //   left="-8"
      bg="primary.400"
      color="white"
      // bg={mode("blue.500", "blue.300")}
      // color={mode("white", "gray.800")}
      width="5"
      height="5"
      {...props}
    />
  </Box>
);

export default CartCount;
