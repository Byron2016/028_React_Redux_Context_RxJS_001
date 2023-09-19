import {  useGentlemanContext } from '../context/useGentlemanContext.context'

function ComponentContext2() {
  const {gentlemanContextValue}  = useGentlemanContext()
  return (
    <div>El valor enviado desde ComponenteContext1 es : {gentlemanContextValue} </div>
  )
}

export default ComponentContext2