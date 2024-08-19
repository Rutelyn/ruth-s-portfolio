import ProjectsCard from "../components/projectsCard"
import ruth from "../images/ruth.jpeg"
import { Link } from "react-router-dom"
const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        <Link to="/">
          <ProjectsCard image={ruth} name="Jemma Care" text="JemmaCare is a mental health support website that is granting access to several people on the continent to access mental health " />
        </Link> <Link to="/">
          <ProjectsCard image={ruth} name="Rutela Enterprise" text="JemmaCare is a mental health support website that is granting access to several people on the continent to access mental health " />
        </Link> <Link to="/">
          <ProjectsCard image={ruth} name="Harika" text="JemmaCare is a mental health support website that is granting access to several people on the continent to access mental health " />
        </Link>



      </div>

    </div>
  )
}

export default Projects