import { useContext } from "react"
import { AboutContext } from "./About.context"

export const UseAboutContext = () =>{
  const context = useContext(AboutContext)

  if(context === undefined){
    throw new Error('Erroror')
  }
  return context
}