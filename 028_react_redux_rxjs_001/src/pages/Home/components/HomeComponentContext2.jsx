import { useHomeContext } from "../context/useHomeContext.context"
import Ayudante from "./Ayudante";

// const Ayudante = (props) => {

//   let mensaje;

//   props.saludo == "" ? mensaje="-->😎<--" : mensaje=props.saludo

//   return (
//     <>
//       <div  className="altoDefinido">
//         { mensaje } 
//         <br/>
//       </div>
//     </>
//   )
// }

function HomeComponentContext2() {
  const { welcomeMessage } = useHomeContext();
  

  const paraSaludo = 1===1 ? '---> ' : '<--- '
  
  return (
    <>
      {/* <div  className="altoDefinido">
        <>{paraSaludo}</>
        { welcomeMessage } 
        <br/>
      </div> */}
      
      <Ayudante saludo = {welcomeMessage}/>
    </>
  )
}

export default HomeComponentContext2