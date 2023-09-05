
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import AddUser from './Components/AddUser/AddUser'
import Update from './Components/Update/Update'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/users')

    },
    {
      path: '/users/add',
      element: <AddUser></AddUser>
    },
    {
      path: '/update/:id',
      element: <Update></Update>,
      loader: async ({ params }) => await fetch(`http://localhost:5000/users/${params.id}`)
    }
  ])
  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>

      </div>
    </>
  )
}

export default App
