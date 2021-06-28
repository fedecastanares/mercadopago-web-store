import { useContext } from 'react'
import { PreferenceContext } from '../context/PreferenceContext'

const usePreference = () => {

    const { preference, setPreference } = useContext(PreferenceContext);


    return ( 
        {
            preference,
            setPreference
        }
     );
}
 
export default usePreference;