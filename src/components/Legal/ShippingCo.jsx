import React from 'react';
import { MessageCircle, Phone, X, ArrowRight } from 'lucide-react'; 
const ShippingCo = () => {
    return (
        // Full page container with dark background
        <div className="min-h-screen bg-black text-white p-4 sm:p-8 md:p-12 lg:p-20">
            
            {/* Policy Container (Max width for readability) */}
            <div className="max-w-2xl mx-auto">
                
                {/* Main Title */}
                <h1 className="text-3xl font-bold text-center text-red-500 mt-5 mb-6 pt-8  ">
                    Shipping Policy
                </h1>
                
                <div className="space-y-8 text-lg text-white text-justify">
                    
                    {/* Shipping Method and Timeframe */}
                    <p>
                        Orders from <span className="text-red-500 font-bold">Fusion Gaming</span> are shipped through registered domestic courier companies and/or speed post only. Orders are shipped within <span className="text-red-500 font-bold">2 to 5 days</span> from the date of the order and/or payment or as per the delivery date agreed at the time of order confirmation, subject to courier company/post office norms.
                    </p>

                    {/* Liability and Delivery Address */}
                    <p>
                        <span className="text-red-500 font-bold">Fusion Gaming</span> shall not be liable for any delay in delivery by the courier company or postal authority. Delivery of all orders will be made to the address provided by the buyer at the time of purchase.
                    </p>
                    
                    {/* Confirmation and Shipping Costs */}
                    <p>
                        Delivery of our services will be confirmed via your email ID as specified during registration. Any shipping costs levied by <span className="text-red-500 font-bold">Fusion Gaming</span> are non-refundable.
                    </p>

                    {/* Assistance Contact */}
                    <p className="pt-4 text-center">
                        For assistance with our services, please contact our helpdesk at <a href="mailto:future.retail20@gmail.com" className="text-red-500 hover:underline font-semibold">future.retail20@gmail.com</a>.
                    </p>

                </div>
            </div>
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
        </div>
    );
}

export default ShippingCo;