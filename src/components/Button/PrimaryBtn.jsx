import Button from './Button';

function PrimaryBtn({ type="link", icon="", path="", text="", className="", ...rest }) {
  return (
    <Button 
        type={type} 
        icon={icon} 
        path={path} 
        text={text} 
        className={`py-2 px-4 rounded bg-rose-700 text-zinc-100 hover:bg-rose-900
            sm:py-3 sm:px-8
        ${className}`} 
        {...rest} 
    />
  )
}

export default PrimaryBtn
