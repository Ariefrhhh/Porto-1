import React from "react";
import { SocialIcon } from 'react-social-icons'; 

const Footer = ()=> {
    return (
        <footer className=" bg-gray-800">
            <div className="container mx-auto mt-5 bg-gray-800 w-full"> {/* Add the "w-full" class */}
                <div className="flex justify-center flex-col lg:flex-row gap-4 p-5">
                    <div className="flex flex-col w-full lg:w-1/3 gap-3 p-2">
                <p className="font-bold text-white">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>  
                <p className="font-bold text-white">binarcarrental@gmail.com</p>
                <p className="font-bold text-white">081-233-334-808</p>
             </div>
             <div className="flex flex-col w-full lg:w-1/6 gap-3 p-2">
                <p className="text-white">Our services</p>  
                <p className="text-white" >Why Us</p>
                <p className="text-white" >Testimonial</p>
                <p className="text-white" >FAQ</p>
             </div>
             <div className="flex  w-full lg:w-1/5 gap-2 p-2">
             <SocialIcon network="facebook" style={{ height: 35, width: 35 }} />  
             <SocialIcon network="instagram" style={{ height: 35, width: 35 }} />  
             <SocialIcon network="whatsapp" style={{ height: 35, width: 35 }} />  
             <SocialIcon network="twitter" style={{ height: 35, width: 35 }} /> 
             <SocialIcon network="mailto" style={{ height: 35, width: 35 }} bgColor="#ff5a01" />  
             </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer