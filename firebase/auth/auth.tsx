import React, { useState, useEffect, useContext, createContext } from "react"
import nookies from "nookies"
import { firebaseClient } from "./firebaseClient"

const AuthContext = createContext<{
  user: firebaseClient.User | null
  loading: Boolean
}>({
  user: null,
  loading: true,
})

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebaseClient.User | null>(null)
  const [loading, setLoading] = useState<Boolean | true>(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(window as any).nookies = nookies
    }

    setLoading(true)
    return firebaseClient.auth().onIdTokenChanged(async (user: any) => {
      console.log(`auth token changed!`)
      if (!user) {
        console.log(`no auth token found...`)
        setUser(null)
        setLoading(false)
        nookies.destroy(null, "token")
        nookies.set(null, "token", "", { path: "/" })
        return
      }

      console.log(`updating auth token...`)
      const token = await user.getIdToken()
      setUser(user)
      setLoading(false)
      nookies.destroy(null, "token")
      nookies.set(null, "token", token, { path: "/" })
    })
  }, [])

  // force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing auth token...`)
      const user = firebaseClient.auth().currentUser
      if (user) await user.getIdToken(true)
    }, 10 * 60 * 1000)
    return () => clearInterval(handle)
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
