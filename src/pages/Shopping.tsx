import { Box, Container } from "@chakra-ui/react";
import ProductCardList from "../components/elements/ProductCardList";
import products, { Product } from "../data/products";

function Shopping() {
  const handleProductClick = (product: Product) => {
    console.log(product);
  };

  return (
    <Box>
      <Container maxW="container.lg" py="16" px="4">
        <ProductCardList
          products={products}
          handleProductClick={handleProductClick}
        />
      </Container>
    </Box>
  );
}

export default Shopping;
