import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Header, Footer, Loader, Input, Toastmsg, CardList } from "../components";
import { PrimaryBtn } from "../components/Button";
import { auth } from "../auth"
import { database } from "../database"
import { logout } from "../store/authSlice" 

function Homepage() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false)
  const [expenses, setExpenses] = useState([])
  const dispatch = useDispatch()

  async function logoutCurrentUser() {
    setLoading(true)
    const res = await auth.logoutUser()
    if (res) {
      dispatch(logout())
      setLoading(false)
    }
  }

  async function addNewExpense(data) {
    const name = data.name;
    const type = data.type;
    const amount = data.amount;

    setLoading(true)
    try {
      const newExpense = await database.addExpenses(name, amount, type)

      if(typeof newExpense != "object") {
        toast.error("Please check your Internet connection!")
        setLoading(false)
        return;
      }
      fetchData()
      setLoading(false)
      reset()
    } catch (error) {
      toast.error("Please check your Internet connection!")
    }
  }

  async function deleteExpense(e) {
    const expenseId = e.currentTarget.dataset.id;
    setLoading(true)
    try {
      const res = await database.deleteExpense(expenseId)
      if (res) {
        fetchData()
        setLoading(false)
      }
    } catch (error) {
      toast.error("Please check your Internet connection!")
    }
  }

  const fetchData = useCallback(async () => {
    try {
      const fetchedData = await database.getExpenses();
      setExpenses(fetchedData)
      console.log(`Fetching expense data....`);
    } catch (error) {
      toast.error("Please check your Internet connection!")
    } finally {
      // setIsLoading(false);
      console.log(4556)
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, setExpenses]);
  
  return (
    <>
      <Header btnType="button" btnText="Logout" onClick={logoutCurrentUser} />
      <main id="main" className="bg-zinc-100 py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-16">
        {
          loading && <Loader />
        }
        <Toastmsg />
        <form 
          className="flex flex-col gap-5 sm:gap-7"
          onSubmit={handleSubmit(addNewExpense)}
        >
          <Input 
            type="text" 
            name="name" 
            placeholder="Salary, House Rent, SIP" 
            register={register('name', { required: 'name is required' })}
            errTxt={errors.name?.message}
          />
          <select
            name="type"
            className="w-full p-2 outline-0 border-2 border-cyan-950 rounded text-cyan-950 text-lg"
            {...register('type', { required: 'Transaction type is required' })}
            aria-label="Transaction Type">
            <option value="Investment">Investment</option>
            <option value="Expense">Expenses</option>
            <option value="Savings">Saving</option>
          </select>
          <Input 
            type="number" 
            name="amount" 
            placeholder="Amount" 
            register={register('amount', { required: 'amount is required' })}
            errTxt={errors.amount?.message}
          />
          <PrimaryBtn className="py-3 sm:py-4 sm:text-xl" type="submit" text="Add Transaction" />
        </form>
        <div>
          <CardList items={expenses} onClick={deleteExpense} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Homepage;