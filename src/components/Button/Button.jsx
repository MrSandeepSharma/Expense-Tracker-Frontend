import { Link } from "react-router-dom";

function Button({ type="link", icon="", path="", text="", className="", ...rest }) {
  return (
    type === "link" 
        ? <Link className={`flex justify-center items-center gap-x-4 focus:outline-dashed ${className}`} to={path} {...rest}>
            {icon}
            {text}
        </Link> 
        : <button className={`flex justify-center items-center gap-x-4 focus:outline-dashed ${className}`} {...rest}>
            {icon}
            {text}
        </button>
  )
}

export default Button;