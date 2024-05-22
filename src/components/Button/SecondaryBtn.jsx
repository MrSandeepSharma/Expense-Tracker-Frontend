import Button from './Button';

function SecondaryBtn({ type="link", icon="", path="", text="", className="", ...rest }) {
  return (
    <Button 
        type={type} 
        icon={icon} 
        path={path} 
        text={text} 
        className={`py-2 px-4 rounded border-2 border-rose-700 text-rose-700 
            hover:bg-rose-700 hover:text-zinc-100
            sm:py-3 sm:px-8
        ${className}`} 
        {...rest} 
    />
  )
}

export default SecondaryBtn;