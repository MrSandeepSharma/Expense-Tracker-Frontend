import { Header, Footer } from "../components";

function Loginpage() {
  return (
    <>
      <Header btnPath="/signup" btnText="Create New Account" />
      <main id="main">
        <h1>Login Page</h1>
      </main>
      <Footer />
    </>
  )
}

export default Loginpage;