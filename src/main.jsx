import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import AboutMe from './AboutMe'
import App from './App'
import Journey from './Journey'
import Projects from './Projects'
import Contact from './Contact'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Footer from './Footer'


function Layout() {
  return (
      <>
        <Header />
        <div id='page-content'>
          <Outlet />
        </div>
        <Footer />
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        // errorElement: <ErrorPage />
      },
      {
        path: '/aboutme',
        element: <AboutMe />
      },
      {
        path: '/journey',
        element: <Journey />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
