import { createContext, useState } from "react";
import { useRouter } from 'next/router'
import { serviceApi } from "../services/serviceApi";

const AuthContext = createContext({});
const initialAuth = {
  isLoged: false,
  userData: null,
}

export function AuthProvider({ children }) {
  const [state, setState] = useState(initialAuth)
  const [showAlert, setShowAlert] = useState(false)
  const [textAlert, setTextAlert] = useState('')
  const route = useRouter()

  function redirectHome() {
    route.push('/home')
  }

  const login = async (email, pass) => {
    const response = await serviceApi.validUsers(email, pass)
    if (response.accessToken) {
      const newAuth = {
        isLoged: true,
        userData: response.user.name
      }
      setState(newAuth)
      redirectHome()
    }
    else {
      setState(initialAuth)
      setTextAlert(response)
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 5000);
      setTimeout(() => {
        setTextAlert('')
      }, 5000);
    }
  }
  const logout = () => {
    setTimeout(() => {
      setState(initialAuth)
    }, 500);
  }

  return (
    <AuthContext.Provider
      value={
        {
          state,
          login,
          showAlert,
          textAlert,
          logout
        }
      }>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;