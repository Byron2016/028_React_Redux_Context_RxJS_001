import { useEffect } from "react"
import {sharingInformationService} from "../../services/sharing-information.service"

function Component2() {
  const subscription$ = sharingInformationService.getSubject()

  useEffect(() => {
    subscription$.subscribe(data => {
      console.log(data);
    })
  })
  return (
    <div>Component2</div>
  )
}

export default Component2