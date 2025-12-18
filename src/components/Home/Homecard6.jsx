import React, { useState, useEffect } from 'react';
// Assuming you save the image as shipping-truck.png or similar in src/assets
import shippingTruck from '../../assets/shipping.webp'; 

const Homecard6 = () => {
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        setIsRunning(true);
        setTimeout(() => setIsRunning(false), 2000);
    }, []);

    return (
        // Full-width section with dark background and large vertical padding
        <section className="bg-black px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                
                {/* Left Column: Text Content */}
                <div className="lg:w-2/2 text-center lg:text mb-8 lg:mb-0">
                    <h2 className="text-2xl md:text-2xl font-bold text-red-500 mb-4 leading-tight">
                        Free Shipping on all PCs!!
                    </h2>
                    
                    <p className="text-lg text-white leading-relaxed">
                        Every gaming PC delivered directly to your door at no extra cost.
                    </p>
                </div>

                {/* Right Column: Image Illustration */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <img 
                        src={shippingTruck} 
                        alt="Free Shipping Truck Illustration" 
                        className={`h-64 object-contain transition-all duration-2000 ${
                            isRunning ? '-translate-x-[300%]' : 'translate-x-0'
                        }`}
                    />
                </div>
            </div>
        </section>
    );
}

export default Homecard6;