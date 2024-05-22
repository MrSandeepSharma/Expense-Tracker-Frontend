import loaderAnim from "../assets/loader.gif"

function Loader() {
  return (
    <div 
        className="bg-zinc-100 absolute w-full min-h-screen left-0 top-0 flex justify-center items-center z-30"
    >
      <img src={loaderAnim} alt="loading" />
    </div>
  )
}

export default Loader;