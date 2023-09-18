import {sharingInformationService} from "../../services/sharing-information.service"

function Component1() {
  const handleClick = () => {
    sharingInformationService.setSubject(true)
  }

  return (
    <div>
      <button onClick={handleClick}>
        Enviar información
      </button>
    </div>
  )
}

export default Component1