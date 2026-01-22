import React from 'react';
import { MessageCircle, Phone, X, ArrowRight } from 'lucide-react'; 
const ReturnsPolicyCo = () => {
    return (
        // Full page container with dark background
        <div className="min-h-screen bg-black text-white px-3 py-4 sm:px-6 sm:py-8 md:px-12 md:py-12 lg:px-20 lg:py-20 font-inter">
            
            {/* Policy Container */}
            <div className="max-w-4xl mx-auto mt-16 sm:mt-8">
                
                {/* Main Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-red-600 mb-6 sm:mb-8 pt-4 sm:pt-8 pb-2 sm:pb-4 tracking-wide">
                    Returns Policy
                </h1>
                
                <div className="space-y-6 sm:space-y-8 text-gray-300 leading-relaxed font-light">
                    
                    {/* Introduction */}
                    <section>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                            We offer <span className="text-red-400 font-medium">refunds or exchanges</span> within the first <span className="text-red-400 font-medium">7 days</span> from the date of purchase. If 7 days have passed since your purchase, no returns, exchanges, or refunds will be processed.
                        </p>
                    </section>

                    {/* Qualification Requirements */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Return Qualification Requirements</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 mb-4">
                            To qualify for a return or exchange, the following conditions must be met:
                        </p>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed">
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">The item must be <span className="font-medium text-white">unused</span> and in the same condition as when you received it.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">It must be returned in its <span className="font-medium text-white">original packaging</span>.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">Items purchased <span className="font-medium text-white">on sale</span> may not qualify for a return or exchange.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Replacement Policy */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Replacement Policy</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            We will replace items only if they are defective or damaged based on an exchange request.
                        </p>
                    </section>
                    
                    {/* Return Request Process */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">How to Request a Return</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            To request a return or exchange, email us at: <a href="mailto:future.retail20@gmail.com" className="text-red-400 hover:text-red-300 underline transition-colors break-words font-medium">future.retail20@gmail.com</a>
                        </p>
                    </section>

                    {/* Exemptions */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Product Exemptions</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            Some product categories may be <span className="font-medium text-white">exempt from returns or refunds</span>. These items will be clearly identified at the time of purchase.
                        </p>
                    </section>

                    {/* Inspection Process */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Inspection and Processing</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            Once your return or exchange is received and inspected, we will notify you via email. If approved after our quality check, we will process the return or exchange as per our policy.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="border-t border-gray-700 pt-6">
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Contact Us</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 mb-4">
                            For any questions regarding returns or exchanges, please contact us:
                        </p>
                        <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800">
                            <div className="text-xs sm:text-sm md:text-base space-y-2 text-gray-300 leading-relaxed">
                                <p>Email: <a href="mailto:future.retail20@gmail.com" className="text-red-400 hover:text-red-300 underline transition-colors break-words">future.retail20@gmail.com</a></p>
                                <p>Phone: <a href="tel:+916369933507" className="text-red-400 hover:text-red-300 transition-colors">+91 63699 33507</a></p>
                                <p>Address: The Marina Mall, OMR, Chennai - 600 103</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            
            {/* Floating Action Buttons */}
            <div className="fixed right-3 sm:right-6 bottom-16 sm:bottom-20 z-50 flex flex-col space-y-3">
                <a href="https://wa.me/" 
                    className="bg-[#25D366] text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </a>
                
                <a href="tel:" 
                    className="bg-blue-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </a>
            </div>
        </div>
    );
}

export default ReturnsPolicyCo;