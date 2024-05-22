import { Header, Footer } from "../components";

function Homepage() {
  return (
    <>
      <Header btnType="button" btnText="Logout" />
      <main id="main">
        <h1>Home Page</h1>
      </main>
      <Footer />
    </>
  )
}

export default Homepage;