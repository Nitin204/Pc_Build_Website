import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Assuming the gamer image is named gamer-setup.webp (or similar) and is in src/assets
import gamerImage from '../../assets/home1.webp'; 

// Constant for the main red CTA button styling
const RED_BUTTON_CLASSES = 'bg-red-500 hover:bg-red-600'; 

const Homecard1 = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // Container: Dark background, uses max-w-7xl for content centering, padding top/bottom
        <section className="bg-gray-950 text-white py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
                
                {/* Left Column: Image (Visible on all sizes) */}
                <div className="lg:w-2/3 mb-2 lg:mb-0 relative overflow-hidden rounded-lg">
                    {/* The image should be responsive and centered */}
                    <img 
                        src={gamerImage} 
                        alt="Gamer at high-performance PC setup" 
                        className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-300 ease-out hover:scale-110"
                        style={{
                            transform: `translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0001})`
                        }}
                    />
                    
                    {/* Floating contact buttons (Duplicate from HeroSection, needs to be moved to App.jsx for reuse) */}
                    {/* NOTE: If you keep these buttons here, they will only scroll with this section. 
                       For a true floating effect, they should be in App.jsx. 
                       I've commented them out here as the HeroSection already includes them as fixed elements.
                    */}
                    {/* <div className="absolute right-4 bottom-4 flex flex-col space-y-4">
                        <a href="https://wa.me/" className="bg-white text-black p-3 rounded-full shadow-lg text-xl flex items-center justify-center">
                            <i className="fa-brands fa-whatsapp text-green-500 text-2xl"></i>
                        </a>
                        <a href="tel:" className="bg-white text-black p-3 rounded-full shadow-lg text-xl flex items-center justify-center">
                            <i className="fa-solid fa-phone text-xl"></i>
                        </a>
                    </div> 
                    */}
                </div>

                {/* Right Column: Text Content and CTA */}
                <div className="lg:w-2/5">
                    <p className="text-2xl md:text-2xl  font-bold text-red-500 mb-2 leading-tight">
                        Your PC — Ready in Just 3 Clicks
                    </p>
                    
                    <p className="mb-2 text-white leading-relaxed">
                        Our expertly crafted prebuilt PCs are designed to give you maximum **performance, reliability, and value**—without the stress of research or part-picking. Every build is the result of careful testing, smart component selection, and years of expertise—so you get nothing but the best.Whether you’re a gamer, creator, trader, or professional, we’ve got a PC that’s ready to go when you are. No technical jargon. No compatibility worries. Just pure performance—delivered to your doorstep. We’ve done the hard work, so you can plug in and power up.
                    </p>
                    
                    

                    <div className="mb-2 space-y-2">
                        <p className="text-red-500 font-semibold mb-2">Select Purpose → Set Price → Get PC</p>
                        <p className="font-medium mb-2 text-lg font-light italic text-gray-400">It's fast. It's simple. It's built for you.</p>
                    </div>

                    {/* CTA Button */}
                    <Link to="/prebuilts">
                        <button className={`px-10 py-3 uppercase font-bold text-white rounded transition duration-300 ${RED_BUTTON_CLASSES}`}>
                            Shop Pre-Builts
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Homecard1;