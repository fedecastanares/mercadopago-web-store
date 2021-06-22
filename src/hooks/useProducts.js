import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext"
import { CategoryContext } from "../context/CategoryContext"

import MercadoLibre from '../services/MercadoLibre'

const useProducts = () => {

    const { products, setProducts} = useContext(ProductsContext);
    const { selectedCategory } = useContext(CategoryContext);

    useEffect(() => {
        const getProducts = async () => {
            const _mercadoLibre = new MercadoLibre();
            const response = await _mercadoLibre.getProducts(selectedCategory[selectedCategory.length - 1].id);
            setProducts(response);
        }
        
        getProducts()
    }, [selectedCategory, setProducts])

    return ( 
        {
            products, 
            setProducts
        }
     );
}
 
export default useProducts;