import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Image,
  Stack,
  Flex,
  Button,
} from "@chakra-ui/react";
import kittens from "../assets/basket-cats.png";

const Home = () => {
  return (
    <Box>
      <Container maxW="container.lg" py={"16"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justify={"center"}
          p="4"
          gap={"8"}
        >
          <VStack spacing={"6"} flex=".5 1 0">
            <Heading
              as="h1"
              size="lg"
              fontWeight="bold"
              maxW="container.md"
              textAlign="center"
            >
              Welcome to{" "}
              <Text
                bgGradient={"linear(to-l, red.400, orange.600)"}
                bgClip="text"
              >
                Fur-ever Friends
              </Text>
            </Heading>
            <Text as="p" fontSize="xl" fontWeight="medium" textAlign={"center"}>
              We'll find you the purr-fect companion!
            </Text>
            <Button size={"lg"} colorScheme={"primary"}>
              Adopt Now
            </Button>
          </VStack>
          <Box position={"relative"} flex=".5 1 0">
            <Image
              src={kittens}
              objectFit="contain"
              maxW={"100%"}
              borderRadius={"md"}
              shadow={"sm"}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
