import { ArrowBigUp, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#eecf81] text-black py-8">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
         
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <img src={""} alt="logo" className="h-12 w-auto mx-auto md:mx-0 mb-3" />
            <p className="text-sm md:text-base font-semibold">© Ruth Afi Agbozo, Inc.</p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <Link to="/facebook" className="hover:text-teal-600">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link to="/instagram" className="hover:text-teal-600">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link to="/twitter" className="hover:text-teal-600">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h2 className="font-bold mb-2 text-sm md:text-base">Contact Us</h2>
            <p className="font-bold">0544041653</p>
            <p className="text-sm md:text-base">
              No.33 Aluguntugui St.<br />
              Great Michael House<br />
              Ruth's Place<br />
              Accra
            </p>
            <Link to="mailto:ruth.agbozo.93@gmail.com" className="hover:underline text-sm md:text-base">
              ruth.agbozo.93@gmail.com
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
              <Link to="/" className="flex flex-col items-center justify-center text-black hover:text-teal-600">
                <div className="bg-teal-100 p-2 rounded-full hover:bg-teal-300 transition">
                  <ArrowBigUp className="h-6 w-6" />
                </div>
                <span className="mt-1 text-sm md:text-base">Back to top</span>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
