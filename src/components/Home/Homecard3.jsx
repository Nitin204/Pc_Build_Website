import React from 'react';
// Assuming the gamer image is named gamer-setup.webp (or similar) and is in src/assets
import gamerImage from '../../assets/homecard2.webp'; 

// Constant for the main red CTA button styling
const RED_BUTTON_CLASSES = 'bg-red-500 hover:bg-red-600'; 

const Homecard3 = () => {
    return (
        // Container: Dark background, uses max-w-7xl for content centering, padding top/bottom
        <section className="bg-gray-950 text-white py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
                
                {/* Left Column: Image (Visible on all sizes) */}
                <div className="lg:w-2/3 mb-2 lg:mb-0 relative">
                    {/* The image should be responsive and centered */}
                    <img 
                        src={gamerImage} 
                        alt="Gamer at high-performance PC setup" 
                        className="w-full h-auto rounded-lg shadow-2xl"
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
                    <p className="text-2xl md:text-2xl font-bold text-red-500 mb-2 leading-tight">
                        Consult, Customize, and Deliver – All in 24 Hours!
                    </p>
                    
                    <p className="mb-2 text-gray-300 leading-relaxed">
                       Get expert guidance tailored to your needs—whether through in-store visits or live screen-sharing consultations. Our team helps you select the perfect configuration for gaming, work, or content creation. Once finalized, your custom PC is dispatched within 24 hours with free delivery across India. Online or offline, we ensure a smooth, fast, and personalized experience—every time.
                    </p>
                    
                    
                    <div className="mb-2 space-y-2">
                        <p className="text-red-500 font-semibold mb-2">Connect → Customize → Checkout</p>
                        <p className="font-medium mb-2 text-lg font-light italic text-gray-400">Real Experts. Real Advice. Always Available.</p>
                    </div>

                    {/* CTA Button */}
                    <button className={`px-10 py-3 mb-2 uppercase font-bold text-white rounded transition duration-300 ${RED_BUTTON_CLASSES}`}>
                        Talk To A Techic
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Homecard3;