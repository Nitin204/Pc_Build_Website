import React from 'react';
// Assuming you have images for the logos in your assets folder
import nvidiaLogo from '../../assets/nvidia.webp'; 
import amdLogo from '../../assets/amd.webp'; 
import intelLogo from '../../assets/intel.webp'; 

const HomeLast = () => {
    return (
        <section className="bg-black py-5 px-6">
            <div className="max-w-7xl mx-auto text-center">
                
                {/* Main Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-8 leading-snug">
                    Authorised by Industry Leaders. Trusted by Thousands.
                </h2>
                
                {/* Body Text */}
                <p className="text-base md:text-lg text-white max-w-4xl mx-auto leading-relaxed ">
                    FusionGaming is one of the few system integration companies in India officially authorized by NVIDIA, AMD, and Intel. Every PC purchase includes lifetime free technical support and is backed by a full nationwide manufacturer warranty. We build PCs with precision, passion, and only 100% genuine components—no compromises. Every PC we build undergoes rigorous testing for stability and performance, ensuring it's ready to deliver peak reliability the moment it leaves our labs. Trusted by gamers, creators, and professionals across India, FusionGaming is where performance meets peace of mind. Expert-built. Warranty-backed. Delivered fast.
                </p>

                {/* Partner Logos */}
               <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-20 ">
    <img 
        src={nvidiaLogo} 
        alt="NVIDIA Logo" 
        // New size: h-12 on mobile, md:h-16 on desktop
        className="h-30 md:h-45 object-contain"
    />
    <img 
        src={amdLogo} 
        alt="AMD Logo" 
        // New size: h-12 on mobile, md:h-16 on desktop
        className="h-5 md:h-8 object-contain" 
    />
    <img 
        src={intelLogo} 
        alt="Intel Logo" 
        // New size: h-12 on mobile, md:h-16 on desktop
        className="h-17 md:h-20 object-contain"
    />
</div>
                
                {/* Bottom Strip of Features */}
                <div className="bg-gray-800 py-3 text-sm text-gray-200">
                    <p className="font-semibold tracking-wide">
                        Quick Delivery | Secured Payments | Authentic Components | Brand Warranty | Built by Experts | 100% Satisfaction Guaranteed
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HomeLast;