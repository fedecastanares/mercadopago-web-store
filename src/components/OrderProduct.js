import { Typography, Grid } from "@material-ui/core";

const OrderProduct = ({ product }) => {
  return (
    <div style={{ margin: 10, padding: 10, backgroundColor: "#f2f2f2", borderRadius: 15 }}>
      <Grid container alignItems='flex-end' spacing={2}>
        <Grid item>
          <img
            style={{ height: 100, width: "auto" }}
            src={product.picture_url}
            alt={product.title}
          />
        </Grid>
        <Grid item>
          <Typography variant="body1">$ {product.unit_price}</Typography>
          <Typography variant="body1">{product.title}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderProduct;
