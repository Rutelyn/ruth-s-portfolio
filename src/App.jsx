import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/rootLayout"
import LandingPage from "./pages/landingPage"
import Projects from "./pages/projects"
import Skills from "./pages/skills"


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
        path: "projects",
        element: <Projects/>
      },
      {
        path: "skills",
        element: <Skills/>
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