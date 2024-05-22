import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Header, Footer, Input, Toastmsg, Loader } from "../components";
import { PrimaryBtn } from "../components/Button";
import { auth } from "../auth"

function Signuppage() {

  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();
  const [Loading, setLoading] = useState(false)

  async function createUser(data) {
    const email = data.email;
    const username = data.username;
    const password = data.password;

    setLoading(true)
    try {
      const newUser = await auth.registerUser(username, email, password)

      if(typeof newUser != "object") {
        setError('email', { type: 'manual', message: newUser });
        toast.error(newUser)
        setLoading(false)
        return;
      }

      console.log(newUser)
      toast.success("User Created Successfully!")
      reset()
      setLoading(false)
    } catch (error) {
      toast.error("Please check your Inputs again!")
      setLoading(false)
    }
  }

  return (
    <>
      <Header btnPath="/login" btnText="Already have an Account" />
      <main id="main" className="bg-zinc-100 py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-16">
        <Toastmsg />
        {
          Loading && <Loader />
        }
        <section className="min-h-svh sm:max-w-2xl m-auto lg:min-h-fit lg:mb-10">
          <h1 className="text-5xl font-bold max-w-lg">Signup</h1>
          <p className="my-6 max-w-lg sm:max-w-sm">
            Sign up today and take control of your expenses like never before!
          </p>
          <form 
            onSubmit={handleSubmit(createUser)} 
            className="flex flex-col gap-5 sm:gap-7"
          >
            <Input 
              className="sm:px-4 sm:py:4" 
              type="text" 
              name="username" 
              placeholder="Enter Your Name Here ...*" 
              register={register('username', { required: 'Username is required' })}
              errTxt={errors.username?.message}
            />
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
            <PrimaryBtn className="py-3 sm:py-4 sm:text-xl" type="submit" text="Sign up" />
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Signuppage;