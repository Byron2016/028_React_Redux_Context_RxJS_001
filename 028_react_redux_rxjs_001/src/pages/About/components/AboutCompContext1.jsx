import { UseAboutContext } from '../context/UseAboutContext.context'

function AboutCompContext1() {
  const {setAboutM} = UseAboutContext();

  const handleClick = () => {
    setAboutM('mensaje 1')
  }

  return (
    <div><button onClick={handleClick}>Press me</button></div>
  )
}

export default AboutCompContext1