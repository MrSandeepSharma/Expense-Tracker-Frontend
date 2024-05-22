import { useState } from "react";
import { useDispatch } from "react-redux";

import { Header, Footer, Loader } from "../components";
import { auth } from "../auth"
import { logout } from "../store/authSlice" 

function Homepage() {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  async function logoutCurrentUser() {
    setLoading(true)
    const res = await auth.logoutUser()
    if (res) {
      dispatch(logout())
      setLoading(false)
    }
  }

  return (
    <>
      <Header btnType="button" btnText="Logout" onClick={logoutCurrentUser} />
      <main id="main" className="bg-zinc-100 py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-16">
        {
          loading && <Loader />
        }
        <h1>Home Page</h1>
      </main>
      <Footer />
    </>
  )
}

export default Homepage;