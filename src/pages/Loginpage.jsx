import { useForm } from "react-hook-form";

import { Header, Footer, Input } from "../components";
import { PrimaryBtn } from "../components/Button";

function Loginpage() {

  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  function loginUser(data) {
    console.log("User Data:", data)
    reset()
  }

  return (
    <>
      <Header btnPath="/signup" btnText="Create New Account" />
      <main id="main" className="bg-zinc-100 py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-16">
        <section className="min-h-svh sm:max-w-2xl m-auto lg:min-h-fit lg:mb-28">
          <h1 className="text-5xl font-bold max-w-lg">Login</h1>
          <p className="my-6 max-w-lg">
            Welcome back! Log in to your account to track, categorize, and manage your expenses effortlessly.
          </p>
          <form 
            onSubmit={handleSubmit(loginUser)} 
            className="flex flex-col gap-5 sm:gap-7"
          >
            <Input 
              className="sm:px-4 sm:py:4" 
              type="email" 
              name="email" 
              placeholder="Enter Your Email Here ...*" 
              register={register('email', { required: 'Email is required' })}
              errTxt={errors.email?.message}
            />
            <Input 
              className="sm:px-4 sm:py:4" 
              type="password" 
              name="password" 
              placeholder="Enter Your Password Here ...*" 
              register={register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters long' },
              })}
              errTxt={errors.password?.message}
            />
            <PrimaryBtn className="py-3 sm:py-4 sm:text-xl" type="submit" text="Login Now" />
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Loginpage;