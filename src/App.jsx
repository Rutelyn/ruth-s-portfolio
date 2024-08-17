import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./assets/layouts/rootLayout"
import LandingPage from "./assets/pages/landingPage"

const router = createBrowserRouter(
  [
    {path: "/",
    element: <RootLayout/>,
    children:[
      {
        index: true,
        element: <LandingPage/>
      },
      {
        index: true,
        element: <LandingPage/>
      },
      {
        index: true,
        element: <LandingPage/>
      },
      {
        index: true,
        element: <LandingPage/>
      },
      {
        index: true,
        element: <LandingPage/>
      },
    ]
  }


  ]
)
function App() {
  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}
export default App