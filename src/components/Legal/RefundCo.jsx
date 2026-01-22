import React from 'react';
import { MessageCircle, Phone, X, ArrowRight } from 'lucide-react'; 
const RefundCo = () => {
    return (
        // Full page container with dark background
        <div className="min-h-screen bg-black text-white px-3 py-4 sm:px-6 sm:py-8 md:px-12 md:py-12 lg:px-20 lg:py-20 font-inter">
            
            {/* Policy Container */}
            <div className="max-w-4xl mx-auto mt-16 sm:mt-8">
                
                {/* Main Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-red-600 mb-6 sm:mb-8 pt-4 sm:pt-8 pb-2 sm:pb-4 tracking-wide">
                    Cancellation and Refund Policy
                </h1>
                
                <div className="space-y-6 sm:space-y-8 text-gray-300 leading-relaxed font-light">

                    {/* 1. Cancellations */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">1. Cancellations:</h2>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed">
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">Cancellation requests must be made within <span className="font-medium text-white">24 hours</span> of placing the order. Orders cannot be cancelled once the status is officially <span className="font-medium text-white">"Confirmed"</span> or if the product is <span className="font-medium text-white">"Ready to Deliver."</span></span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">Custom PCs and other specially configured products are not eligible for cancellation due to their personalized nature.</span>
                            </li>
                        </ul>
                    </section>

                    {/* 2. Refunds for Custom-Built PCs */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">2. Refunds for Custom-Built PCs:</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 mb-4">
                            Refunds or replacements for custom-built PCs will only be processed under the following conditions:
                        </p>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed">
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Defective or Damaged Product:</span>
                                <span className="text-gray-300">Customers must report manufacturing defects or shipping damage within <span className="font-medium text-white">7 days of receipt.</span></span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">Refunds/Replacements are not granted for reasons like dissatisfaction with performance or changes in personal preference after purchase.</span>
                            </li>
                        </ul>
                    </section>
                    
                    {/* 3. Damaged or Defective Products */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">3. Damaged or Defective Products:</h2>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed">
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">If you receive a damaged or defective item, notify our customer service team within <span className="font-medium text-white">48 hours of receipt.</span> Submit proof (e.g., photos of the damage, video of unpacking the product).</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">Our team will verify the claim and make a final decision regarding replacement or refund.</span>
                            </li>
                        </ul>
                    </section>

                    {/* 4. Misrepresentation or Dissatisfaction */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">4. Misrepresentation or Dissatisfaction:</h2>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed">
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">If the product received is significantly different from what was described (e.g., incorrect specification or missing component), report within <span className="font-medium text-white">7 days</span>.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">Claims based on personal expectations or subjective dissatisfaction are not eligible for refunds unless supported by a clear instance of misrepresentation.</span>
                            </li>
                        </ul>
                    </section>

                    {/* 5. Warranty Claims */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">5. Warranty Claims:</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            For products with a manufacturer warranty, customers can contact the manufacturer directly or us for repair or replacement. Our team is available to assist with this process if needed.
                        </p>
                    </section>
                    
                    {/* 6. Refund Processing Time */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">6. Refund Processing Time:</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            If a refund is approved, it will be processed within <span className="font-medium text-white">5-7 business days</span> after validation. Refunds will be made via the original payment method. Delays may occur due to holidays or incomplete information.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="border-t border-gray-700 pt-6">
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Contact Us</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 mb-4">
                            For any questions regarding cancellations or refunds, please contact us:
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

export default RefundCo;