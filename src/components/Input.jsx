import { useState } from "react";

function Input({ type = "text", className = "", errTxt = "", register, ...rest }) {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="relative">
        <input
            type={inputType}
            className={`w-full p-2 outline-none border-2 rounded text-cyan-950 text-lg ${
                errTxt ? "border-rose-900" : "border-cyan-950"
            } ${className}`}
            {...register}
            {...rest}
        />
        {type === "password" && (
            <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 font-bold text-lg"
                onClick={togglePasswordVisibility}
            >
                {showPassword ? "Hide" : "Show"}
            </button>
        )}
        {errTxt && <p className="absolute text-rose-900 font-bold text-xs md:text-base">{errTxt}</p>}
    </div>
  )
}

export default Input;