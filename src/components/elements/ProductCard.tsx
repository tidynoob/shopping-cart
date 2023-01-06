import {
  Box,
  Button,
  VStack,
  Image,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Product } from "../../data/products";

interface ProductCard {
  product: Product;
  handleProductClick: (product: Product) => void;
}

function ProductCard(props: ProductCard) {
  const { product, handleProductClick } = props;

  return (
    <Flex justify="center" w="full">
      <Box bg="white" p="4" borderRadius={"md"} shadow="base" w="full">
        <VStack spacing={"4"}>
          <Image
            src={product.imageUrl}
            h="250px"
            w={"full"}
            objectFit={"cover"}
            borderRadius={"md"}
          />
          <Heading size={"md"}>{product.name}</Heading>
          <Text>${product.price}</Text>
          <Button
            colorScheme={"primary"}
            w={"full"}
            onClick={() => handleProductClick(product)}
          >
            Add to cart
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}

export default ProductCard;
