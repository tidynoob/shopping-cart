import { Grid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { Product } from "../../data/products";

type ProductCardList = {
  products: Product[];
  handleProductClick: (product: Product) => void;
};

function ProductCardList(props: ProductCardList) {
  const { products, handleProductClick } = props;
  return (
    <Grid
      gap="4"
      p="4"
      justifyContent="center"
      templateColumns="repeat(auto-fit, 300px)"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleProductClick={handleProductClick}
        />
      ))}
    </Grid>
  );
}

export default ProductCardList;
