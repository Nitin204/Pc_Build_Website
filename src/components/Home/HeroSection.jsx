import React, { useState, useEffect } from 'react'; 
import { MessageCircle, Phone, X, ArrowRight } from 'lucide-react'; 

// Define a reusable style constant for the red button
const RED_BUTTON_CLASSES = 'bg-red-500 hover:bg-red-600'; 

// Define the delay time in milliseconds (e.g., 3000ms = 3 seconds)
const POPUP_DELAY_MS = 3000; 

const HeroSection = () => {
    // State to control the visibility of the modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    // --- UPDATED EFFECT: Trigger the promotional modal with a delay ---
    useEffect(() => {
        // Set a timer to open the modal after the defined delay
        const timer = setTimeout(() => {
            setIsModalOpen(true);
        }, POPUP_DELAY_MS);

        // Parallax scroll effect
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        // Enhanced mouse parallax with tilt effect
        const handleMouseMove = (e) => {
            const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
            const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
            setMouseX(x);
            setMouseY(y);
            setTilt({ x: y * 5, y: -x * 5 });
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to clear the timer if the component unmounts
        // before the delay finishes (prevents memory leaks).
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
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
                
                <video 
                    autoPlay 
                    muted 
                    loop 
                    id="hero-video" 
                    className="w-full h-full object-cover opacity-80"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px) translateX(${mouseX * 30}px) translateY(${mouseY * 15}px) scale(${1.1 + Math.abs(mouseX) * 0.05}) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                        transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        transformOrigin: 'center center'
                    }}
                >
                    <source src="https://www.fusiongaming.in/video/FG_Final.mp4" type="video/mp4" />
                    <source src="/FG_final.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
            {/* Main Content Area (z-20) */}
            <div 
                className="relative z-20 text-center flex flex-col items-center justify-center flex-grow pt-10"
                style={{
                    transform: `translateY(${scrollY * -0.3}px) translateX(${mouseX * -25}px) translateY(${mouseY * -12}px) rotateX(${-tilt.x * 0.3}deg) rotateY(${-tilt.y * 0.3}deg)`,
                    transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transformStyle: 'preserve-3d'
                }}
            >
                <p 
                    className="text-3xl md:text-4xl font-bold mb-1 mt-10" 
                    style={{ 
                        fontFamily: "",
                        transform: `translateY(${scrollY * -0.15}px) translateX(${mouseX * -18}px) translateY(${mouseY * -8}px) translateZ(50px) scale(${1 + Math.abs(mouseY) * 0.02})`,
                        transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        textShadow: `${mouseX * 2}px ${mouseY * 2}px 20px rgba(239, 68, 68, 0.3)`
                    }}
                >
                    Welcome To Fusion Gaming
                </p>
                <p
                    className="text-1xl md:text-2xl mb-8"
                    style={{ 
                        fontFamily: "italic",
                        transform: `translateY(${scrollY * -0.2}px) translateX(${mouseX * -20}px) translateY(${mouseY * -10}px) translateZ(30px)`,
                        transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        textShadow: `${mouseX * 1.5}px ${mouseY * 1.5}px 15px rgba(255, 255, 255, 0.2)`
                    }}
                >
                    You Dream, We Build
                </p>
                
                {/* CTA Button */}
                <a href="/buildpc">
                    <button 
                        onClick={handleCtaClick}
                        className={`px-8 py-3 uppercase font-bold text-white rounded transition duration-300 ${RED_BUTTON_CLASSES}`}
                        style={{
                            transform: `translateY(${scrollY * -0.35}px) scale(${1 - scrollY * 0.0002 + Math.abs(mouseX) * 0.05}) translateX(${mouseX * -15}px) translateY(${mouseY * -8}px) translateZ(40px) rotateX(${-tilt.x * 0.5}deg) rotateY(${-tilt.y * 0.5}deg)`,
                            transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            boxShadow: `${mouseX * 3}px ${mouseY * 3}px 25px rgba(239, 68, 68, 0.4), 0 0 30px rgba(239, 68, 68, 0.2)`
                        }}
                    >
                        Build Yours Now
                    </button>
                </a>
            </div>

            {/* Footer Strip (z-20) */}
            <div 
                className="relative z-20 w-full bg-black bg-opacity-80 text-center py-4"
                style={{
                    transform: `translateY(${scrollY * -0.0}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            >
                <p className="text-sm">
                    <span className="text-red-500 mx-3">♦</span> Safe Payments, Free Shipping & Lifetime Support <span className="text-red-500 mx-3">♦</span>
                </p>
            </div>

            {/* Floating Contact Icons (z-50) */}
            <div 
                className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4"
                style={{
                    transform: `translateY(${scrollY * 0.0}px) translateX(${mouseX * 0}px) translateY(${mouseY * 5}px) rotateZ(${mouseX * 0}deg)`,
                    transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    filter: `drop-shadow(${mouseX * 0}px ${mouseY * 0}px 10px rgba(0, 0, 0, 0.3))`
                }}
            >
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
                            href="/account"
                            onClick={handleClaimFreeAccount} 
                            className={`w-full py-1 font-semibold rounded transition duration-300 flex items-center justify-center text-lg ${RED_BUTTON_CLASSES}`}
                        >
                            Claim Your Free Account <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}

export default HeroSection;