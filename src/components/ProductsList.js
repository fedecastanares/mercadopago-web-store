import { Grid, Typography } from "@material-ui/core";

import useProducts from "../hooks/useProducts";
import Product from './Product'

const Products = () => {
  const { products } = useProducts();

  return (
    <>
      <Typography variant="h3" component="h3" align='center'>Productos</Typography>
      <Grid container >
        {products &&
          products.products.results.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3} bg={2}>
              <Product product={product} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Products;
