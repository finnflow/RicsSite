import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { AuthProvider, useAuth } from './AuthContext'

const mockFetch = vi.fn()

global.fetch = mockFetch as unknown as typeof fetch

function wrapper({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}

describe('AuthContext', () => {
  beforeEach(() => {
    localStorage.clear()
    mockFetch.mockReset()
  })

  it('starts without user when no token in localStorage', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper })

    expect(result.current.user).toBeNull()
    expect(result.current.entitlements).toEqual([])
  })

  it('login sets user and entitlements', async () => {
    mockFetch
      // loginRequest
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          access_token: 'mock-token',
          token_type: 'bearer',
        }),
      })
      // fetchMe
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          id: '123',
          email: 'test@example.com',
          created_at: 'now',
        }),
      })
      // fetchEntitlements
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          entitlements: [{ product: 'SELFSTART', status: 'active' }],
        }),
      })

    const { result } = renderHook(() => useAuth(), { wrapper })

    await act(async () => {
      await result.current.login('test@example.com', 'pass')
    })

    expect(result.current.user?.email).toBe('test@example.com')
    expect(result.current.hasEntitlement('SELFSTART')).toBe(true)
  })

  it('logout clears state', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper })

    act(() => {
      result.current.logout()
    })

    expect(result.current.user).toBeNull()
    expect(result.current.entitlements).toEqual([])
  })
})
