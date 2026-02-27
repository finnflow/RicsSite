import { createBrowserRouter } from 'react-router'
import { lazy } from 'react'
import { RootLayout } from '@/app/components/RootLayout'

const Home = lazy(() => import('@/app/pages/Home'))
const Angebot = lazy(() => import('@/app/pages/Angebot'))
const Ernaehrung = lazy(() => import('@/app/pages/Ernaehrung'))
const EmotionaleArbeit = lazy(() => import('@/app/pages/EmotionaleArbeit'))
const Ablauf = lazy(() => import('@/app/pages/Ablauf'))
const Kontakt = lazy(() => import('@/app/pages/Kontakt'))
const Selbststart = lazy(() => import('@/app/pages/Selbststart'))
const Kundenbereich = lazy(() => import('@/app/pages/Kundenbereich'))
const Login = lazy(() => import('@/app/pages/Login'))
const Checkout = lazy(() => import('@/app/pages/Checkout'))
const CheckoutSuccess = lazy(() => import('@/app/pages/CheckoutSuccess'))
const KundenbereichLocked = lazy(() => import('@/app/pages/KundenbereichLocked'))
const Kursbot = lazy(() => import('@/app/pages/Kursbot'))

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'angebot',
        Component: Angebot,
      },
      {
        path: 'ernaehrung',
        Component: Ernaehrung,
      },
      {
        path: 'emotionale-arbeit',
        Component: EmotionaleArbeit,
      },
      {
        path: 'ablauf',
        Component: Ablauf,
      },
      {
        path: 'kontakt',
        Component: Kontakt,
      },
      {
        path: 'selbststart',
        Component: Selbststart,
      },
      {
        path: 'kundenbereich',
        Component: Kundenbereich,
      },
      {
        path: 'kundenbereich/locked',
        Component: KundenbereichLocked,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'checkout',
        Component: Checkout,
      },
      {
        path: 'checkout/success',
        Component: CheckoutSuccess,
      },
      {
        path: 'kursbot',
        Component: Kursbot,
      },
    ],
  },
])
