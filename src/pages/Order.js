import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Typography } from '@material-ui/core'

import usePreference from '../hooks/usePreference'


const Order = () => {
    const history = useHistory();
    const { preference } = usePreference();

    useEffect(() => {
        if (!preference) {
            history.push("/");
        }
    },[ history, preference ]);

    console.log(preference);

    return ( 
        <>
        <div style={{height: '100vh', width: '100vw', overflow: 'hidden'}}>
            <Typography>Detalle de la comprra</Typography>
            <a href={preference.init_point}>Pagar con mercadopago</a>
        </div>
        </>
     );
}
 
export default Order;