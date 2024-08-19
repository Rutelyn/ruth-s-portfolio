import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./assets/layouts/rootLayout"
import LandingPage from "./assets/pages/landingPage"
import Projects from "./assets/pages/projects"
import About from "./assets/pages/about"
import Skills from "./assets/pages/skills"
import Achievements from "./assets/pages/achievements"

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
        path: "about",
        element: <About/>
      },
      {
        path: "projects",
        element: <Projects/>
      },
      {
        path: "skills",
        element: <Skills/>
      },
      {
        path: "Achievements",
        element: <Achievements/>
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