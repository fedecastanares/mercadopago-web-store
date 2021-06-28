import React, {createContext, useState} from "react";

export const PreferenceContext = createContext();

const PreferenceProvider = ({children}) => {

    const [ preference, setPreference ] = useState(false);

    return(
        <PreferenceContext.Provider value={{preference, setPreference}}>
            {children}
        </PreferenceContext.Provider>
        );
}

export default PreferenceProvider;