import { Link } from "react-router-dom";

import Logo from "./Logo";
import { SecondaryBtn } from "./Button";

function Header({ className="", btnType="link", btnPath="", btnText="", ...rest }) {
  return (
    <header className={`bg-zinc-100 py-4 px-6 flex justify-between items-center
        sm:py-6 sm:px-8 md:py-8 md:px-16
        ${className}`} 
    >
        <Link 
            className="absolute py-2 px-4 -left-1/2 z-10 bg-cyan-950 text-zinc-100 
            opacity-0 transition-all duration-75 ease-in-out focus:opacity-100 
            focus:left-0 outline-dashed" 
            path="#" 
            onClick={() => window.location.replace("#main")}>
                Skip to main content
        </Link>
        <Link to="/" className="focus:outline-dashed">
            <Logo />
        </Link>
        <SecondaryBtn type={btnType} to={btnPath} text={btnText} {...rest} />
    </header>
  )
}

export default Header;