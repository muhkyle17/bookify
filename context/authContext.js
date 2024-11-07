import { createContext, useContent, useState, useEffect } from 'react'
import checkAuth from '@/src/app/actions/checkAuth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const checkAuthentication = async () => {
      const { isAuthenticated, user } = await checkAuth()
      setIsAuthenticated(isAuthenticated)
      setCurrentUser(user)
    }

    checkAuthentication()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
