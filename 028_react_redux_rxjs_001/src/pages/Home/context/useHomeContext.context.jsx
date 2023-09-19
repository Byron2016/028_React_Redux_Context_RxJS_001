import { useContext } from "react"
import { HomeContext } from "./Home.context"

export const useHomeContext = () => {
    const context = useContext(HomeContext);

    if(context === undefined){
        throw new Error('HomeContext must be used within a HomeProvider')
    }

    return context;
}