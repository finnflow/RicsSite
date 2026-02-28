import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  type AuthUser,
  type Entitlement,
  fetchEntitlements,
  fetchMe,
  loginRequest,
} from '@/lib/api/authClient'

type AuthState = {
  user: AuthUser | null
  token: string | null
  entitlements: Entitlement[]
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  refresh: () => Promise<void>
  hasEntitlement: (product: string) => boolean
}

const AuthContext = createContext<AuthState | undefined>(undefined)

const TOKEN_STORAGE_KEY = 'lebensessenz_auth_token'

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [entitlements, setEntitlements] = useState<Entitlement[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const loadFromStorage = useCallback(async () => {
    const storedToken = window.localStorage.getItem(TOKEN_STORAGE_KEY)
    if (!storedToken) {
      setUser(null)
      setEntitlements([])
      setToken(null)
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const [me, ents] = await Promise.all([fetchMe(storedToken), fetchEntitlements(storedToken)])
      setUser(me)
      setEntitlements(ents.entitlements)
      setToken(storedToken)
    } catch (err) {
      console.error('Failed to restore session', err)
      window.localStorage.removeItem(TOKEN_STORAGE_KEY)
      setUser(null)
      setEntitlements([])
      setToken(null)
      setError('Session expired, please log in again.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadFromStorage()
  }, [loadFromStorage])

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const newToken = await loginRequest(email, password)
      window.localStorage.setItem(TOKEN_STORAGE_KEY, newToken)
      const [me, ents] = await Promise.all([fetchMe(newToken), fetchEntitlements(newToken)])
      setUser(me)
      setEntitlements(ents.entitlements)
      setToken(newToken)
    } catch (err) {
      console.error('Login failed', err)
      setError('Login fehlgeschlagen. Bitte Zugangsdaten prüfen.')
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    window.localStorage.removeItem(TOKEN_STORAGE_KEY)
    setUser(null)
    setToken(null)
    setEntitlements([])
    setError(null)
  }, [])

  const refresh = useCallback(async () => {
    await loadFromStorage()
  }, [loadFromStorage])

  const hasEntitlement = useCallback(
    (product: string) =>
      entitlements.some((e) => e.product === product && e.status.toLowerCase() === 'active'),
    [entitlements],
  )

  const value: AuthState = useMemo(
    () => ({
      user,
      token,
      entitlements,
      isLoading,
      error,
      login,
      logout,
      refresh,
      hasEntitlement,
    }),
    [user, token, entitlements, isLoading, error, login, logout, refresh, hasEntitlement],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}
