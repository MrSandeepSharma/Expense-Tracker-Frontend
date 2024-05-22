import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Loader } from './components'
import { auth } from "./auth"
import { login } from './store/authSlice'

import './App.css'

function App() {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=> {
    setLoading(true)
    auth.getCurrentUser()
      .then(user => {
        if(user) {
          const newData = {
            username: user.username,
            email: user.email
          }
          dispatch(login(newData))
          setLoading(false)
        }
        setLoading(false)
      })
  },[])

  return loading ? <Loader /> : <Outlet />
}

export default App;