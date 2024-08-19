import ruth from "../images/ruth.jpeg"
import Projects from "./projects";



const LandingPage = () => {
  return (
    <div>
    <div className="flex flex-col overflow-x-hidden min-h-screen">
      <div className="w-screen relative flex-grow">
        <img src={ruth} alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
          <h4>FRONT-END WEB DEVELOPER</h4>
          <h1 className="text-4xl font-bold mb-4">Hello, My Name is Ruth Afi Agbozo</h1>
          <p>Creative front-end web developer with a background <br /> in sales and project management, specializing <br />in user-centered designs and impactful digital experiences. <br /> Passionate about building intuitive, responsive, <br /> and engaging web interfaces.</p>
          
        </div>
        <div>
          <button type="submit" to="/projects">
<p>Projects</p>
          </button>
          <button type="submit">
<p>LinkedIn</p>
          </button>
        </div>
      </div>
     
    </div>
    <Projects/>
    </div>
  );
};

export default LandingPage;
