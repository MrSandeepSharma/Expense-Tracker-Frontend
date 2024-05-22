import logo from "../assets/logo.svg"
import logoWhite from "../assets/logo-white.svg"
import logoLarge from "../assets/logo-large.svg"
import logoLargeWhite from "../assets/logo-large-white.svg"

function Logo({ color="white" }) {
  return (
    <picture>
      <source media="(min-width: 600px)" srcSet={color != "white" ? logoLargeWhite : logoLarge} width="292.83" height="35.21" />
      <img src={color != "white" ? logoWhite : logo} alt="Expense Tracker" width="45.21" height="35" />
    </picture>
  )
}

export default Logo;