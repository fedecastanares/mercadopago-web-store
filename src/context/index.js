import CategoryProvider from './CategoryContext'
import ProductsProvider from './ProductsContext'
import PreferenceProvider from './PreferenceContext'

const ContextBundle = ({children}) => {
    return ( 
        <>
        <CategoryProvider>
            <ProductsProvider>
                <PreferenceProvider>
                    {children}
                </PreferenceProvider>
            </ProductsProvider>
        </CategoryProvider>
        </>
     );
}
 
export default ContextBundle;