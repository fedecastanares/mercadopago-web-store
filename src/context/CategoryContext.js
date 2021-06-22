import React, {createContext, useState} from "react";


export const CategoryContext = createContext();

const CategoryProvider = ({children}) => {

    const [selectedCategory, setSelectedCategory] = useState([{id:'MLU1430', name:'Inicio'}]);
    const [categoryInfo, setCategoryInfo] = useState(false);
    

    return(
        <CategoryContext.Provider value={{
            selectedCategory,
            categoryInfo,
            setSelectedCategory,
            setCategoryInfo
            }}>
            {children}
        </CategoryContext.Provider>
        );
}

export default CategoryProvider;