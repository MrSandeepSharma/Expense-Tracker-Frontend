import { useSelector } from "react-redux"

import Homepage from "./Homepage"
import Landingpage from "./Landingpage"

function RouteController() {

  const authStatus = useSelector(state => state.auth.status)

  return authStatus ? <Homepage /> : <Landingpage />
}

export default RouteController;