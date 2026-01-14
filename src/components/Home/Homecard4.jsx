import React from 'react';
// Import icons for the contact buttons and the bullet points
import { MessageCircle, Phone, Zap, DollarSign, Lock, RefreshCcw, Star } from 'lucide-react'; 
 import Bg from '../../assets/footer-subscribe-bg.jpg';
// Constant for the main red CTA button styling
const RED_BUTTON_CLASSES = 'bg-red-600 hover:bg-red-700';

const Homecard4 = () => {
    return (
        // Container: Dark background, large padding top/bottom
        <section className=" py-10 px-6" style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch lg:space-x-12 p-8 rounded-lg bg-black/70">
                
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

                
            </div>
        </section>
    );
}

export default Homecard4;