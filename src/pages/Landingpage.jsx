import { Header, Footer } from "../components";
import { PrimaryBtn } from "../components/Button";

import heroImg from "../assets/hero.png"

function Landingpage() {
  return (
    <>
      <Header btnPath="/signup" btnText="Get Started" />
      <main id="main" className="bg-zinc-100 py-4 px-6 min-h-screen sm:py-6 sm:px-8 md:py-8 md:px-16">
        <section className="flex flex-col ">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-5xl text-center font-bold max-w-3xl">Track, Categorize, and Manage Your Expenses</h1>
            <p className="my-6 text-center max-w-3xl">
              Our expense tracking application helps you stay on top of your finances 
              by providing a simple and efficient way to monitor your spending. Easily 
              categorize your expenses, manage your budget, and gain valuable insights 
              into your financial habits.
            </p>
            <PrimaryBtn to="/signup" className="w-fit" text="Track Your Expenses" />
          </div>
          <img className="m-8" src={heroImg} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Landingpage;
