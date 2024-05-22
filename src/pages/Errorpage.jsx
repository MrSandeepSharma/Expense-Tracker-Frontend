import { PrimaryBtn } from "../components/Button";

import { FaChevronLeft } from "react-icons/fa";

function Errorpage() {
  return (
    <div className="px-6 flex flex-col justify-center items-center gap-8 min-h-screen">
      <h1 className="text-6xl">404</h1>
      <p className="max-w-sm text-center sm:text-xl">
        Oops! The page you're looking for isn't here. Why not head back to our 
        homepage and explore from there?
      </p>
      <PrimaryBtn icon={<FaChevronLeft />} path="/" text="Go to Homepage" />
    </div>
  )
}

export default Errorpage;