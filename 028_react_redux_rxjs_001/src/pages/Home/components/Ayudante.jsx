const Ayudante = (props) => {

    let mensaje;
  
    props.saludo == "" ? mensaje="-->😎<--" : mensaje=props.saludo
  
    return (
      <>
        <div  className="altoDefinido">
          { mensaje } 
          <br/>
        </div>
      </>
    )
  }

export default Ayudante