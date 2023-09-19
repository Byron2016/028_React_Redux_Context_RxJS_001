import { createContext, useState } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
    //const [welcomeMessage, setWellcomeMessage] = useState('press the button to receive a greeting');
    const [welcomeMessage, setWellcomeMessage] = useState('');

    return(
        <HomeContext.Provider value={{welcomeMessage, setWellcomeMessage}}>
            { children }
        </HomeContext.Provider>
    )
}