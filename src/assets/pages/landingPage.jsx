import jemma from "../images/jemma.mp4";


const LandingPage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen">
      <div className="w-screen relative flex-grow">
        <video 
          src={jemma} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="text-4xl font-bold mb-4">We're Here Together</h1>
          <p className="text-lg mb-6">Supporting each other through the journey</p>
         
        </div>
      </div>
     
    </div>
  );
};

export default LandingPage;
