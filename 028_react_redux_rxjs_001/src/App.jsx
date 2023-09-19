import './App.css'
import Component1 from './components/RxJS/Component1'
import Component2 from './components/RxJS/Component2'
import Gentleman from './pages/Gentleman/Gentleman'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <div className='flex'>
        <div className='para_rxjs'>
          <h2>RxJS</h2>
          <Component1/>
          <Component2/>
        </div>
        <div className='para_context'>
          <h2>Context</h2>
          <Gentleman/>
        </div>
      </div>
    </>
  )
}

export default App
