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
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        <Link to="https://jemmacare.netlify.app/">
          <ProjectsCard image={projectsOne} name="Jemma Care" text="JemmaCare is a mental health support website that is granting access to several people on the continent to access mental health" />
        </Link> <Link to="https://rutelaenterprise.netlify.app/">
          <ProjectsCard image={projectsTwo} name="Rutela Enterprise" text="JemmaCare is a mental health support website that is granting access to several people on the continent to access mental health " />
        </Link> <Link to="/">
          <ProjectsCard image={projectsThree} name="Spectrum Portfolio" text="JemmaCare is a mental health support website that is granting access to several people on the continent to access mental health " />
        </Link>
        <Link to="https://spectrumevents.netlify.app/">
          <ProjectsCard image={projectsFour} name="Spectrum Events" text="JemmaCare is a mental health support website that is granting access to several people on the continent to access mental health " />
        </Link> <Link to="https://harikafoods.netlify.app/">
          <ProjectsCard image={projectsFive} name="Harika" text="JemmaCare is a mental health support website that is granting access to several people on the continent to access mental health " />
        </Link> 




      </div>

    </div>
  )
}

export default Projects