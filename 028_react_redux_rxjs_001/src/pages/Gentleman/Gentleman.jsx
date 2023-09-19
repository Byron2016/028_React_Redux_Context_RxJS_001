import ComponentContext1 from "./components/ComponentContext1"
import ComponentContext2 from "./components/ComponentContext2"
import { GentlemanProvider } from "./context/gentleman.context";

function Gentleman() {
  return (
    <div>
      <GentlemanProvider>
        <ComponentContext1/>
        <ComponentContext2/>
      </GentlemanProvider>
    </div>
  )
}

export default Gentleman