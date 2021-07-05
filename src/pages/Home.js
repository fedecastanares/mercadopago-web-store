import Aside from "../components/Aside";
import Products from "../components/ProductsList";
import { Helmet } from "react-helmet";

import { Grid } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <Helmet>

      </Helmet>
      <Grid container>
        <Grid item xs={12} md={3} bg={2}>
          <Aside />
        </Grid>
        <Grid item xs={12} md={9} bg={10}>
          <Products />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
