const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8001'

export type AuthUser = {
  id: string
  email: string
  created_at: string
}

export type Entitlement = {
  product: string
  status: string
}

export type EntitlementsResponse = {
  entitlements: Entitlement[]
}

export type LoginResponse = {
  access_token: string
  token_type: string
}

export async function loginRequest(email: string, password: string): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(text || 'Login failed')
  }

  const data = (await response.json()) as LoginResponse
  return data.access_token
}

export async function fetchMe(token: string): Promise<AuthUser> {
  const response = await fetch(`${API_BASE_URL}/api/v1/auth/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Unauthorized')
  }

  const data = (await response.json()) as AuthUser
  return data
}

export async function fetchEntitlements(token: string): Promise<EntitlementsResponse> {
  const response = await fetch(`${API_BASE_URL}/api/v1/entitlements/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('Unauthorized')
  }

  const data = (await response.json()) as EntitlementsResponse
  return data
}
