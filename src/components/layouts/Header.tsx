import {
  Box,
  Container,
  Flex,
  HStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import NavAction from "../elements/NavAction";
import CartCount from "../elements/CartCount";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineInfoCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="header">
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center" wrap="wrap" p="4">
          <Heading as="h1" size="md" fontFamily="test" letterSpacing={"wide"}>
            Fur-ever Friends
          </Heading>
          <HStack as="nav" spacing="2">
            <NavAction label="Home" icon={AiOutlineHome} to="/" />
            <NavAction
              label="Shopping"
              icon={AiOutlineShopping}
              to="/shopping"
            />
            <NavAction label="About" icon={AiOutlineInfoCircle} to="/about" />
            <HStack spacing="0">
              <NavAction label="Cart" icon={AiOutlineShoppingCart} />
              <CartCount>1</CartCount>
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
