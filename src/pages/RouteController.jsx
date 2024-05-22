import { useState } from "react"

import Homepage from "./Homepage"
import Landingpage from "./Landingpage"

function RouteController() {

    const authStatus = useState(false)

  return authStatus ? <Landingpage /> : <Homepage />
}

export default RouteController;