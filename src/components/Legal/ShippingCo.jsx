import React from 'react';
import { MessageCircle, Phone, X, ArrowRight } from 'lucide-react'; 
const ShippingCo = () => {
    return (
        // Full page container with dark background
        <div className="min-h-screen bg-black text-white px-3 py-4 sm:px-6 sm:py-8 md:px-12 md:py-12 lg:px-20 lg:py-20 font-inter">
            
            {/* Policy Container */}
            <div className="max-w-4xl mx-auto mt-16 sm:mt-8">
                
                {/* Main Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-red-600 mb-6 sm:mb-8 pt-4 sm:pt-8 pb-2 sm:pb-4 tracking-wide">
                    Shipping Policy
                </h1>
                
                <div className="space-y-6 sm:space-y-8 text-gray-300 leading-relaxed font-light">
                    
                    {/* Shipping Method and Timeframe */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Shipping Method and Timeframe</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            Orders from <span className="text-red-400 font-medium">Fusion Gaming</span> are shipped through registered domestic courier companies and/or speed post only. Orders are shipped within <span className="text-red-400 font-medium">2 to 5 days</span> from the date of the order and/or payment or as per the delivery date agreed at the time of order confirmation, subject to courier company/post office norms.
                        </p>
                    </section>

                    {/* Liability and Delivery Address */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Delivery Terms</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            <span className="text-red-400 font-medium">Fusion Gaming</span> shall not be liable for any delay in delivery by the courier company or postal authority. Delivery of all orders will be made to the address provided by the buyer at the time of purchase.
                        </p>
                    </section>
                    
                    {/* Confirmation and Shipping Costs */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Delivery Confirmation</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            Delivery of our services will be confirmed via your email ID as specified during registration. Any shipping costs levied by <span className="text-red-400 font-medium">Fusion Gaming</span> are non-refundable.
                        </p>
                    </section>

                    {/* Important Notes */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Important Notes</h2>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed">
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">Please ensure your delivery address is correct and complete to avoid delays.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">Shipping costs are calculated based on product weight and delivery location.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="text-gray-300">You will receive tracking information once your order is dispatched.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Contact Information */}
                    <section className="border-t border-gray-700 pt-6">
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Need Assistance?</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 mb-4">
                            For assistance with our services, please contact our helpdesk:
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

export default ShippingCo;