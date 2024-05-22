import { Link } from "react-router-dom"

import Logo from "./Logo"

import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

function Footer({ className="", ...rest }) {
  return (
    <footer className={`py-4 px-6 flex items-center justify-between bg-rose-700
        sm:py-6 sm:px-8 md:py-8 md:px-16
        ${className}`} 
        {...rest}
    >
        <Link to="/" className="focus:outline-dashed">
            <Logo color="red" />
        </Link>
        <ul role="list" className="flex items-center justify-between gap-6">
            <li>
                <Link to="https://github.com/MrSandeepSharma" aria-label="Github" className="focus:outline-dashed">
                    <FiGithub style={{width:"30px", height:"30px", color:"#f3f2f1"}}/>
                </Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com/in/sandipsharma2445/" aria-label="linkedin" className="focus:outline-dashed">
                    <FaLinkedinIn style={{width:"35px", height:"35px", color:"#f3f2f1"}} />
                </Link>
            </li>
        </ul>
    </footer>
  )
}

export default Footer;