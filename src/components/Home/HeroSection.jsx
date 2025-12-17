import React, { useState, useEffect } from 'react'; 
import { MessageCircle, Phone, X, ArrowRight } from 'lucide-react'; 

// Define a reusable style constant for the red button
const RED_BUTTON_CLASSES = 'bg-red-500 hover:bg-red-600'; 

// Define the delay time in milliseconds (e.g., 3000ms = 3 seconds)
const POPUP_DELAY_MS = 3000; 

const HeroSection = () => {
    // State to control the visibility of the modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // --- UPDATED EFFECT: Trigger the promotional modal with a delay ---
    useEffect(() => {
        // Set a timer to open the modal after the defined delay
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, POPUP_DELAY_MS);

        // Cleanup function to clear the timer if the component unmounts
        // before the delay finishes (prevents memory leaks).
        return () => clearTimeout(timer);
    }, []); 
    // -----------------------------------------------------------------

    const handleCtaClick = () => {
        // Clicking the main CTA button on the hero section should still open the modal.
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // New function for the promotional modal's button
    const handleClaimFreeAccount = () => {
        console.log("Simulating redirect to Google Sign-in or Account Creation route...");
        closeModal(); 
        // In a real app, you would redirect the user to a sign-in/register page.
        // window.location.href = '/register-via-google'; 
    };

    return (
        <section className="relative w-full h-screen overflow-hidden text-white flex flex-col justify-between pt-24 md:pt-20">
            
            {/* Background Video and Dark Overlay (z-10) */}
            {/* nitin */}
            <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div> 
                
                <video autoPlay muted loop id="hero-video" className="w-full h-full object-cover opacity-80">
                    <source src="https://www.fusiongaming.in/video/FG_Final.mp4" type="video/mp4" />
                    <source src="/FG_final.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
            {/* Main Content Area (z-20) */}
            <div className="relative z-20 text-center flex flex-col items-center justify-center flex-grow pt-10">
                <p className="text-3xl md:text-4xl font-bold mb-1 mt-10  " style={{ fontFamily: "" }}>Welcome To Fusion Gaming</p>
                <p
                className="text-1xl md:text-2xl mb-8"
                style={{ fontFamily: "italic" }}
                >
    You Dream, We Build
</p>
                
                {/* CTA Button */}
                <a href="/buildpc"><button 
                    onClick={handleCtaClick}
                    className={`px-8 py-3 uppercase font-bold text-white rounded transition duration-300 ${RED_BUTTON_CLASSES}`}
                >
                    Build Yours Now
                </button></a>
            </div>

            {/* Footer Strip (z-20) */}
            <div className="relative z-20 w-full bg-black bg-opacity-80 text-center py-4">
                <p className="text-sm">
                    <span className="text-red-500 mx-3">♦</span> Safe Payments, Free Shipping & Lifetime Support <span className="text-red-500 mx-3">♦</span>
                </p>
            </div>

            {/* Floating Contact Icons (z-50) */}
            <div className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4">
                <a href="https://wa.me/" 
                    className="bg-[#25D366] text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 md:h-7 md:w-7" />
                </a>
                
                <a href="tel:" 
                    className="bg-blue-600 text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
                    <Phone className="h-5 w-5 md:h-7 md:w-7" />
                </a>
            </div>

            {/* --- NEW PROMOTIONAL MODAL OVERLAY --- */}
            {isModalOpen && (
                // Changed the outer div styling for better mobile view
                <div className="fixed inset-0  bg-opacity-85 z-[60] flex items-center justify-center p-4"> 
                    <div className="bg-black text-white p-6 md:p-8 rounded-lg shadow-2xl max-w-sm sm:max-w-md w-full relative border-2 border-gray-400  "> 
                        
                        {/* Close Button */}
                        <button 
                            onClick={closeModal} 
                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
                            aria-label="Close modal"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Title matching the screenshot */}
                        <h3 className="text-lg sm:text-xl font-bold text-red-500 mb-6 text-center pt-2 border-b border-gray-400 pb-4">
                            Unlock Exclusive PC Deals Instantly! – Join The PC Community!
                        </h3>
                        
                        <div className="text-center space-y-4 mb-8">
                            <p className="text-base sm:text-lg text-white ">
                                Sign in with Google to get access to 
                                <span className="text-red-500  mx-1">discount coupons</span>, 
                                <span className="text-red-500  mx-1">free 1-on-1 tech consultation</span>, and 
                                <span className="text-red-500 mx-1">exclusive offers</span> on all our PCs!
                            </p>
                            <p className="text-xs text-gray-400 pt-2">
                                Save more with every configuration — **it's completely free!**
                            </p>
                        </div>

                        {/* Action Button: Claim Free Account */}
                        <a 
                            href="/account" // Changed button to an anchor tag for proper navigation
                            onClick={handleClaimFreeAccount} 
                            className={`w-full py-1 font-semibold rounded transition duration-300 flex items-center justify-center text-lg ${RED_BUTTON_CLASSES}`}
                        >
                           <a href="/account"> Claim Your Free Account </a><ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}

export default HeroSection;