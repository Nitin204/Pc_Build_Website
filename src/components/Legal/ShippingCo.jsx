import React from 'react';

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
        </div>
    );
}

export default ShippingCo;