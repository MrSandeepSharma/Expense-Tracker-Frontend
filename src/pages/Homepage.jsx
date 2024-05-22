import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Header, Footer, Loader, Input, Toastmsg, CardList, DoughnutChart } from "../components";
import { PrimaryBtn } from "../components/Button";
import { auth } from "../auth"
import { database } from "../database"
import { logout } from "../store/authSlice" 

function Homepage() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false)
  const [series, setSeries] = useState([])
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
    } 
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, setExpenses]);

  useEffect(()=> {
    const categoryTotals = {
      Savings: 0,
      Investment: 0,
      Expense: 0
    };

    expenses.forEach(item => {
        const category = item.category;
        const amount = item.amount || 0; 

        categoryTotals[category] += amount;
    });
    setSeries([categoryTotals.Savings, categoryTotals.Investment, categoryTotals.Expense])
  },[fetchData, expenses])

  return (
    <>
      <Header btnType="button" btnText="Logout" onClick={logoutCurrentUser} />
      <main id="main" className="bg-zinc-100 flex py-4 px-6 min-h-screen sm:py-6 sm:px-8 md:py-8 md:px-16">
        {
          loading && <Loader />
        }
        <Toastmsg />
        <div className="hidden lg:block lg:w-1/2 pr-20">
          <DoughnutChart series={series} />
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <h1 className="text-5xl font-bold max-w-lg mr-auto mb-7">Transactions</h1>
          <form 
            className="flex flex-col gap-5 w-full sm:gap-7"
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
          {
            expenses && <CardList items={expenses} onClick={deleteExpense} />
          }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Homepage;