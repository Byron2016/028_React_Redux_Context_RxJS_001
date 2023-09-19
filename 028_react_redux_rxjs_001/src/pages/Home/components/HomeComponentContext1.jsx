import { useHomeContext } from "../context/useHomeContext.context"

function HomeComponentContext1() {
  const { setWellcomeMessage } = useHomeContext();

  const handleClick = () => {
    setWellcomeMessage("Bienvenido a la página principal");
  }

  return (
    <div><button onClick={handleClick}>Dar mensaje bienvenida</button></div>
  )
}

export default HomeComponentContext1