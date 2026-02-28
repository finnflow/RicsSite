import { RouterProvider } from 'react-router'
import { router } from '@/app/routes'
import { Suspense } from 'react'
import { AuthProvider } from '@/lib/auth/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-gray-600">Lädt...</div>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  )
}
