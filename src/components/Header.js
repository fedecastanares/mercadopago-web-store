import { Grid, Typography, IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Link, useHistory } from "react-router-dom";

import useCart from '../hooks/useCart'
import usePreference from "../hooks/usePreference";
import MercadoLibre from "../services/MercadoLibre";

const Header = ({ children }) => {

  const history = useHistory();
  const { cart } = useCart();
  const { setPreference } = usePreference();

  console.log(process.env.REACT_APP_BASE_URL);

  const handleClick = () => {
    
    const _mercadoLibre = new MercadoLibre();
    const payer = {
      id: 47204441,
      name: "Lalo",
      surname: "Landa",
      email: "fedevpe@testuser.com",
      phone: {
        area_code: '11',
        number: 22223333
      }
    }
    const makeTheOrder = async () => {
      const response = await _mercadoLibre.createPreference({items: cart, payer});
      setPreference(response);
      history.push("/order");
    }
    makeTheOrder();
    
  };

  return (
    <>
      <Grid container justify="space-between" style={{ padding: 15, position: 'fixed', backgroundColor: '#fff', zIndex: 900 }}>
        <Grid item>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography variant="h5">OUTFIT</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Grid container>
            <Link to="/order" underline="none" style={{ color: "black" }}>
              <IconButton color="inherit" size="medium" onClick={handleClick}>
                <Badge color="secondary" badgeContent={cart.length}>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justify="space-evenly"
        alignItems="center"
        style={{ minHeight: "100vh", minWidth: "100vw", overflow: "hidden" }}
      >
      {children}
      </Grid>
    </>
  );
};

export default Header;
