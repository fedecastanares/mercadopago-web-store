import { useContext, useEffect } from "react";
import { CategoryContext } from "../context/CategoryContext"

import MercadoLibre from '../services/MercadoLibre'

const useCategory = () => {

    const {selectedCategory, setSelectedCategory, categoryInfo, setCategoryInfo} = useContext(CategoryContext);


    useEffect(() => {
        const getCategories = async () => {
            const _mercadoLibre = new MercadoLibre();
            const response = await _mercadoLibre.getCategory(selectedCategory[selectedCategory.length - 1].id);
            setCategoryInfo(response);
        }
        
        getCategories()
    }, [selectedCategory, setCategoryInfo])

    return ( 
        {
            categoryInfo,
            selectedCategory,
            setSelectedCategory
        }
     );
}
 
export default useCategory;