import React from "react";
import Porche from "../../assets/images/Porche.png"
import "../../assets/css/header.css"
import { useNavigate } from "react-router-dom";



const Header = () => {
  const Navigate = useNavigate()
  return (
   <div>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-white  hover:text-gray-300 font-bold text-lg" >Rental Car</div>
            <ul className="flex space-x-4">
              <li>
                <a className="text-white hover:text-gray-300" href="#">About Us</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-300" href="#">Why Us</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-300" href="#">Testimonial</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-300" href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center">
     
        <div className="w-full lg:w-1/2 lg:pr-10">
          <h1 className="text-4xl font-bold mb-4">Rent Your Dream Car</h1>
          <p className="text-lg mb-4">
            Discover our wide selection of high-quality rental cars at affordable prices.
          </p>
          <button onClick={()=>Navigate ('/SearchCar')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
            Book Now      
          </button>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <img src={Porche} alt="Rental Car" className="w-full h-auto" />
        </div>
      </div>
    </div>
    </section>
      </div>

    
  );
};

export default Header;
