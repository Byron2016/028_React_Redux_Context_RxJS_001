import {sharingInformationService} from "../../services/sharing-information.service"

function Component1() {
  const handleClick = () => {
    sharingInformationService.setSubject(true)
  }

  const handleClickNO = () => {
    sharingInformationService.setSubject(false)
  }

  return (
    <div>
      <button onClick={handleClick}>
        Enviar información
      </button>
      <button onClick={handleClickNO}>
        NO Enviar información
      </button>
    </div>
  )
}

export default Component1