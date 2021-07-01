import CategoryProvider from "./CategoryContext";
import ProductsProvider from "./ProductsContext";
import PreferenceProvider from "./PreferenceContext";
import CartProvider from "./CartContext";

const ContextBundle = ({ children }) => {
  return (
    <>
      <CategoryProvider>
        <ProductsProvider>
          <PreferenceProvider>
            <CartProvider>
                {children}
            </CartProvider>
          </PreferenceProvider>
        </ProductsProvider>
      </CategoryProvider>
    </>
  );
};

export default ContextBundle;
