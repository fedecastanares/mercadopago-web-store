import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button, Card } from "@material-ui/core";

import useCart from "../hooks/useCart";


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    padding: 10,
  },
  img: {
    maxWidth: 240,
    height: 240,
    objectFit: "contain",
  },
  title: {
    height: "5rem",
  },
}));

const Prices = ({ prices }) => {
  return (
    <>
      <Grid
        container
        alignItems="flex-end"
        spacing={2}
        style={{ marginBottom: 10 }}
      >
        <Grid item>
          <Typography variant="h5">
            $ {prices[prices.length - 1].amount}
          </Typography>
        </Grid>
        <Grid item>
          {prices.length > 1 && (
            <Typography variant="body2">
              Antes $ {prices[prices.length - 2].amount}
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
};

const Product = ({ product }) => {
  const classes = useStyles();
  const { cart, setCart } = useCart();

  const onBuyButton = () => {
    setCart([
      ...cart,
      {
        title: product.title,
        description: product.title,
        picture_url: product.thumbnail,
        // category_id: product.category_id,
        unit_price: product.price,
        //currency_id: product.currency_id,
        quantity: 1,
        // id: product.id
      }
    ]);
  };

  //5031 7557 3453 0604	

  return (
    <Card className={classes.root}>
      <img
        className={classes.img}
        src={product.thumbnail}
        alt={product.title}
      />
      {product.prices.prices && <Prices prices={product.prices.prices} />}
      <Typography className={classes.title} variant="body1">
        {product.title}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={onBuyButton}
      >
        Agregar al carrito
      </Button>
    </Card>
  );
};

export default Product;
