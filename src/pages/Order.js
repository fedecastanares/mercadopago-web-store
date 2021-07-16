import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Helmet } from "react-helmet";

import { Typography, Grid } from "@material-ui/core";

import usePreference from "../hooks/usePreference";
import OrderProduct from "../components/OrderProduct";

const Order = () => {
  const history = useHistory();
  const { preference } = usePreference();

  useEffect(() => {
    if (!preference) {
      history.push("/");
    }
  }, [history, preference]);


  return (
    <>
      <Helmet>
        
      </Helmet>
      <Grid
        container
        justify="space-evenly"
        alignItems="center"
        style={{ minHeight: "100vh", width: "100vw", overflow: "hidden" }}
      >
        <Grid item>
          <Typography variant='h4' component='h2'>Detalle de la compra</Typography>
          {preference.items && preference.items.map(product => <OrderProduct key={product.id} product={product} />)}
          <br/>
          <a href={preference.init_point}>
            <Typography variant='body1'>Pagar la compra</Typography>
            <img src='https://play-lh.googleusercontent.com/PaPilQswVaCcvWdZ9PACv6TGu6cVPqHjdl6AtSwOJ3x_gNg5QTvu5j5cic6t9mSCuVE' alt='mercadopago' style={{borderRadius: 15, height: 200, width: 'auto'}} />
          </a>
        </Grid>
      </Grid>
    </>
  );
};

export default Order;
