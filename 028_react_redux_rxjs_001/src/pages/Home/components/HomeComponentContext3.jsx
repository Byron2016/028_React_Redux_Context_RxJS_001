import { useHomeContext } from "../context/useHomeContext.context"

function HomeComponentContext3() {
  const { setWellcomeMessage } = useHomeContext();

  const handleClick = () => {
    setWellcomeMessage(prevWellcomeMessage => {
        // console.log(prevWellcomeMessage)
        // return 'press the button to receive a greeting'
        return ''
    });
  }

  return (
    <div><button onClick={handleClick}>🗑</button></div>
  )
}

export default HomeComponentContext3
