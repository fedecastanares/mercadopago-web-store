import React, {createContext, useState} from "react";


export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState(false);

    return(
        <ProductsContext.Provider value={{products,setProducts}}>
            {children}
        </ProductsContext.Provider>
        );
}

export default ProductsProvider;