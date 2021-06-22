import CategoryProvider from './CategoryContext'
import ProductsProvider from './ProductsContext'

const ContextBundle = ({children}) => {
    return ( 
        <>
        <CategoryProvider>
            <ProductsProvider>
                {children}
            </ProductsProvider>
        </CategoryProvider>
        </>
     );
}
 
export default ContextBundle;