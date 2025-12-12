import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import backgroundVideo from '../../assets/FG_final.mp4'; 

// Define a reusable style constant for the red button
const RED_BUTTON_CLASSES = 'bg-red-500 hover:bg-red-600'; 

const HeroSection = () => {
    return (
        // Full viewport height, relative positioning, starts below the fixed navbar
        <section className="relative w-full h-screen overflow-hidden text-white flex flex-col justify-between pt-24 md:pt-20">
            
            {/* Background Video and Dark Overlay */}
            <div className="absolute inset-0 z-21">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div> 
                
                <video autoPlay muted loop id="hero-video" className="w-full h-full object-cover opacity-60">
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
            {/* Main Content Area */}
            {/* flex-grow pushes the footer strip to the bottom. pt-10 compensates for the nav height. */}
            <div className="relative z-22 text-center flex flex-col items-center justify-center flex-grow pt-10">
                <p className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: "cursive" }}>Welcome To Fusion Gaming</p>
                <p
                className="text-1xl md:text-2xl mb-8"
                style={{ fontFamily: "italic" }}
                >
  You Dream, We Build
</p>

                
                {/* CTA Button */}
                <button className={`px-8 py-3 uppercase font-bold text-white rounded transition duration-300 ${RED_BUTTON_CLASSES}`}>
                    Build Yours Now
                </button>
            </div>

            {/* Footer Strip with Key Selling Points */}
            <div className="relative z-22 w-full bg-black bg-opacity-80 text-center py-4">
                <p className="text-sm">
                    <span className="text-red-500 mx-3">♦</span> Safe Payments, Free Shipping & Lifetime Support <span className="text-red-500 mx-3">♦</span>
                </p>
            </div>

            {/* Floating Contact Icons (Fixed to the side) */}
            <div className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4">
                <a href="https://wa.me/" 
       // Used specific hex code for WhatsApp green and text-white for icon color
       className="bg-[#25D366] text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
        <MessageCircle className="h-8 w-8" />
    </a>
    
    {/* Phone Icon: Changed to Blue bg and white icon */}
    <a href="tel:" 
       // Used Tailwind's strong blue for phone and text-white for icon color
       className="bg-blue-600 text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
        <Phone className="h-8 w-8" />
    </a>
            </div>

        </section>
    );
}

export default HeroSection;