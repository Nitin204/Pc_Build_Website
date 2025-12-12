import React from 'react';
// Import icons for the contact buttons and the bullet points
import { MessageCircle, Phone, Zap, DollarSign, Lock, RefreshCcw, Star } from 'lucide-react'; 

// Constant for the main red CTA button styling
const RED_BUTTON_CLASSES = 'bg-red-600 hover:bg-red-700';

const Homecard4 = () => {
    return (
        // Container: Dark background, large padding top/bottom
        <section className="bg-black py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch lg:space-x-12 p-8 rounded-lg">
                
                {/* Left Column: Expert Consultation Text and Selling Points */}
                <div className="lg:w-1/2 text-white mb-10 lg:mb-0 pr-8">
                    <h2 className="text-2xl md:text-2xl font-bold text-red-500 mb-2 leading-tight">
                        Get Free Expert Consultation
                    </h2>
                    
                    <p className="mb-2 text-white leading-relaxed">
                        PC building can be overwhelming – let us make it easy. Share your details, and our experts will reach out instantly!
                    </p>

                    {/* Selling Points List */}
                    <ul className="space-y-4 text-white">
                        <li className="flex items-center space-x-3">
                            {/* Icon for personalized recommendations */}
                            <Star className="h-5 w-5 text-red-500 flex-shrink-0" />
                            <span>Get personalized PC build recommendations</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            {/* Icon for clear answers */}
                            <Zap className="h-5 w-5 text-red-500 flex-shrink-0" />
                            <span>Clear answers to all your questions</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            {/* Icon for smart budgeting */}
                            <DollarSign className="h-5 w-5 text-red-500 flex-shrink-0" />
                            <span>Smart budgeting – avoid overpaying</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            {/* Icon for exclusive discounts */}
                            <Lock className="h-5 w-5 text-red-500 flex-shrink-0" />
                            <span>Access exclusive staff-only discounts</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            {/* Icon for upgrade path */}
                            <RefreshCcw className="h-5 w-5 text-red-500 flex-shrink-0" />
                            <span>Upgrade Path Guidance</span>
                        </li>
                    </ul>
                </div>

                {/* Right Column: Contact Form and Contact Buttons */}
                <div className="lg:w-1/2 bg-gray-900 p-8 rounded-lg relative shadow-xl">
                    <form className="space-y-5">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="w-full bg-black text-white p-3 rounded-lg border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                        />
                        <input 
                            type="text" 
                            placeholder="Mobile Number" 
                            className="w-full bg-black text-white p-3 rounded-lg border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full bg-black text-white p-3 rounded-lg border border-gray-700 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                        />
                        {/* The image shows four input fields, so I've included a second "Email" or general placeholder */}
                        

                        

<button 
    type="submit"
    // CHANGES HERE: 
    // 1. Reduced default mobile padding (py-3 -> py-2)
    // 2. Reduced default mobile font size (added text-sm)
    // 3. Used md: prefix to restore the larger size for desktops
    className={`w-full py-1 text-sm uppercase font-bold text-white rounded transition duration-300 
                md:py-3 md:text-base md:font-bold ${RED_BUTTON_CLASSES}`} 
>
    Reach Out To Our Expert
</button>
                    </form>

                    {/* Contact Buttons (Positioned to match the image, using brand colors) */}
                    {/* These buttons are relative to the form container (bg-gray-900) */}
                    
                </div>
                
            </div>
        </section>
    );
}

export default Homecard4;