import { Grid, Typography } from "@material-ui/core";

import useProducts from "../hooks/useProducts";
import Product from "./Product";

const Products = () => {
  const { products } = useProducts();

  return (
    <>
      <Typography variant="h3" component="h3" align="center">
        Productos
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6} md={3} bg={2}>
          <Product product={{
              title: "Samsung S20",
              description: "Dispositivo móvil de Tienda e-commerce",
              thumbnail: 'https://d391ci4kxgasl8.cloudfront.net/fit-in/524x480/filters:fill(FFFFFF):quality(90):format(webp)/_img_productos/samsung-galaxy-s20fe-preventa-fit2-foto-lavanda2.jpg',
              // category_id: product.category_id,
              price: 45000,
              //currency_id: product.currency_id,
              quantity: 1,
              id: 1234,
              prices: {
                prices: [{
                  amount: 45000
                }]
              }
            }}
          />
        </Grid>
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
