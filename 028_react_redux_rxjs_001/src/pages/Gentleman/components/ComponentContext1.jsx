// import {  useGentlemanContext } from '../context/gentleman.context'
import {  useGentlemanContext } from '../context/useGentlemanContext.context'

function ComponentContext1() {
  const {setGentlemanContextValue}  = useGentlemanContext()
  
  const handleClick = () => {
    setGentlemanContextValue('Hola desde componentContext1')
  }

  return (
    <div><button onClick={handleClick}>Enviar información por un context</button></div>
  )
}

export default ComponentContext1