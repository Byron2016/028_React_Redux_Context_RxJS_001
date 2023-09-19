import { UseAboutContext } from '../context/UseAboutContext.context'


function AboutCompContext2() {
  const {aboutM} = UseAboutContext();
  return (
    <div>{aboutM}</div>
  )
}

export default AboutCompContext2