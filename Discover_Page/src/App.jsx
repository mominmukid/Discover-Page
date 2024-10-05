import React from 'react'
import HomePage from './Pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ArtsPage, EntertainmentP, FinancePage, TechPage, TopPage,SoprtsPage} from './Pages'
import DetailsPage from './Pages/DetailsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/top',
        isactive: true,
        element: <TopPage />
      },
      {
        path: '/tech&science',
        element: <TechPage />
      },
      {
        path: '/finance',
        element: <FinancePage />
      },
      {
        path: '/arts&culture',
        element: <ArtsPage />
      },
      {
        path: '/soprts',
        element: <SoprtsPage />
      },
      {
        path: '/entertainment',
        element: <EntertainmentP />
      },
      {
        path: '/news/:news/:title',
        element: <DetailsPage />
      },
    ]
  },

])
function
  a() {
  return (
    <RouterProvider router={router}>
      <div className=' w-full h-screen min-h-screen'>
        <HomePage />
      </div>
    </RouterProvider>
  )
}

export default
  a