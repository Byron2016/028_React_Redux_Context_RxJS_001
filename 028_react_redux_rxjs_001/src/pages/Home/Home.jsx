import HomeComponentContext1 from "./components/HomeComponentContext1"
import HomeComponentContext2 from "./components/HomeComponentContext2"
import HomeComponentContext3 from "./components/HomeComponentContext3"
import { HomeProvider } from "./context/Home.context"

function Home() {
  return (
    <div>
      <HomeProvider>
        <HomeComponentContext2/>
        <div className="flex">
          <HomeComponentContext1/>
          <HomeComponentContext3/>
        </div>
      </HomeProvider>
    </div>
  )
}

export default Home