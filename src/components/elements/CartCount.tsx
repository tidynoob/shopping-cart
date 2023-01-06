import { Circle, Box, SquareProps } from "@chakra-ui/react";

const CartCount = (props: SquareProps) => (
  <Box position={"relative"} top="-4" left="-6" h="0" w="0">
    <Circle
      fontSize="sm"
      fontWeight="semibold"
      centerContent
      position="absolute"
      bg="primary.400"
      color="white"
      width="5"
      height="5"
      {...props}
    />
  </Box>
);

export default CartCount;
