
import AboutCompContext1 from './components/AboutCompContext1'
import AboutCompContext2 from './components/AboutCompContext2'
import { AboutContextProvider } from './context/About.context'

function About() {
  return (
    <div>
      <AboutContextProvider>
        <AboutCompContext1/>
        <AboutCompContext2/>
      </AboutContextProvider>

    </div>
  )
}

export default About