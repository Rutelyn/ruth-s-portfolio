import ProjectsCard from "../components/projectsCard"
import projectsOne from "../assets/images/projectsOne.png"
import projectsTwo from "../assets/images/projectsTwo.png"
import projectsThree from "../assets/images/projectsThree.png"
import projectsFour from "../assets/images/projectsFour.png"
import projectsFive from "../assets/images/projectsFive.png"
import { Link } from "react-router-dom"



const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 m-4">
        <Link to="https://jemmacare.netlify.app/">
          <ProjectsCard title="Jemma Care" image={projectsOne} name="Built with React, JavaScript, Tailwind CSS" text="JemmaCare is a mental health support website " />
        </Link> 
        <Link to="https://rutelaenterprise.netlify.app/">
          <ProjectsCard image={projectsTwo} title="Rutela Enterprise" name="Built with HTML, CSS" text="Rutela enterprise is a hair care brand website" />
        </Link> 
        <Link to="/">
          <ProjectsCard image={projectsThree} title="Spectrum Portfolio" name="Built with React, JavaScript, Tailwind CSS" text="Spectrum portfolio is a Saas portfolio creation app " />
        </Link>
        <Link to="https://harikafoods.netlify.app/">
          <ProjectsCard image={projectsFive} title="Harika" name="Built with HTML, CSS"text="Harika foods is a food ordering website" />
        </Link> 
        <Link to="https://spectrumevents.netlify.app/">
          <ProjectsCard image={projectsFour} title="Spectrum Events" name="Built with React, JavaScript, Tailwind CSS"text="Spectrum events is an event management website" />
        </Link> 
       




      </div>

    </div>
  )
}

export default Projects