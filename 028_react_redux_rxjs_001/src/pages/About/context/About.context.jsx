import { createContext, useState } from "react";

export const AboutContext = createContext()

export const AboutContextProvider = ({ children }) => {
  const [aboutM, setAboutM] = useState('inicial')
  return(
    <AboutContext.Provider value={{aboutM, setAboutM}}>
      { children }
    </AboutContext.Provider>
  )
}