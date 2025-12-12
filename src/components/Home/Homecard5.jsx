import React from 'react';
// Importing icons for Competitive Pricing (Tag), High Quality (Anchor), 
// Lifetime Support (Wrench), and Authorized Integrators (Award)
import { Tag, Anchor, Wrench, Award } from 'lucide-react'; 


// Renaming the component to FeaturesSection for project consistency
const Homecard5 = () => {
    
    // Defines a consistent style for the feature cards with transition and hover effects
    const cardClasses = "bg-black p-8 rounded-lg text-center flex flex-col items-center justify-start h-full " +
                        "transition duration-300 ease-in-out transform hover:scale-[1.07] hover:shadow-2xl border border-transparent hover:border-red-500";

    // Data structure for the features
    const features = [
        {
            icon: Tag,
            title: "Competitive Pricing",
            description: "Experience the best competitive pricing in the industry, providing exceptional value for your investment."
        },
        {
            icon: Anchor,
            title: "High Quality",
            description: "Access the latest, most reliable components, expertly chosen for top performance and durability in every build."
        },
        {
            icon: Wrench,
            title: "Lifetime Support",
            description: "Enjoy free lifetime service support with every purchase for lasting performance and peace of mind."
        },
        {
            icon: Award,
            title: "Authorised Integrators",
            description: "We are authorized system integrators certified by NVIDIA, AMD, and Intel."
        }
    ];

    return (
        <section className="bg-gray-950 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-3xl font-bold text-red-500 text-center mb-16">
                    The Fusion Gaming Difference
                </h2>
                
                {/* Grid Container: 2 columns on medium, 4 columns on large screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className={cardClasses}>
                            {/* Icon */}
                            {/* Icon container styling is simpler, matching the image */}
                            <div className="text-white mb-6 p-2 rounded-full hover:bg-red-600 ">
                                <feature.icon className="h-10 w-10 text-white" />
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-bold text-red-500 mb-3">
                                {feature.title}
                            </h3>
                            
                            {/* Description */}
                            {/* Text color adjusted to match the gray/white contrast */}
                            <p className="text-sm text-white leading-relaxed flex-grow">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Homecard5;