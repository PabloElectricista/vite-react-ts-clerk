import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./views/Home"
import Main from "./components/Main"
import Protected from "./views/Protected"
import Dashboard from "./components/Dashboard"



function App() {

  const router = createBrowserRouter([
    {
      element: <Home />,
      errorElement: <h1>Error component</h1>,
      children: [
        {
          path: '/',
          element: <Main />
        }
      ]
    },
    {
      element: <Protected />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
