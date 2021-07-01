import { useHistory } from 'react-router-dom'

const Success = () => {

    const history = useHistory();
    console.log(history.location.search);

    return ( 
        <>
        <h1>Pago completado</h1>
        </>
     );
}
 
export default Success;