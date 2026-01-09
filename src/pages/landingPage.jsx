import ruth from "../assets/images/ruth.jpg";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDC435]">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center max-w-4xl w-full">

        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">FRONT-END WEB DEVELOPER</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hello, my name is Ruth Afi Agbozo</h1>
          <p className="text-base text-gray-700 mb-6">
            Creative front-end web developer specializing in responsive, accessible, and performance-optimized web applications. With a background in sales and project management, I bridge user experience, business strategy, and technology to deliver intuitive interfaces that drive growth and user engagement.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/projects"
              className="bg-[#FDC435] text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#e0a30d] transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="https://www.linkedin.com/in/ruthafiagbozo"
              className="border border-gray-400 text-gray-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition duration-300"
            >
              LinkedIn
            </Link>
          </div>
        </div>


        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <div className="relative">
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#FDC435] rounded-full"></div>
            <img
              src={ruth}
              alt="Ruth Afi Agbozo"
              className="relative z-10 w-52 h-52 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
