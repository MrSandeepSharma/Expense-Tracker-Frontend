import { Header, Footer } from "../components";

function Landingpage() {
  return (
    <>
      <Header btnPath="/signup" btnText="Get Started" />
      <main id="main">
        <h1>Landing Page</h1>
      </main>
      <Footer />
    </>
  )
}

export default Landingpage;