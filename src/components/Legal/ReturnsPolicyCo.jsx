import React from 'react';

const ReturnsPolicyCo = () => {
    return (
        // Full page container with dark background
        <div className="min-h-screen bg-black text-white p-4 sm:p-8 md:p-12 lg:p-20 text-justify">
            
            {/* Policy Container (Max width for readability) */}
            <div className="max-w-2xl mx-auto text-justify">
                
                {/* Main Title */}
                <h1 className="text-4xl font-bold text-center text-red-500 mb-8 pt-8  pb-4">
                    Returns Policy
                </h1>
                
                <div className="space-y-6 text-white">
                    
                    {/* Introduction */}
                    <p className="text-lg">
                        We offer <span className="text-red-500 font-bold">refunds or exchanges</span> within the first <span className="text-red-500 font-bold">7 days</span> from the date of purchase. If 7 days have passed since your purchase, no returns, exchanges, or refunds will be processed.
                    </p>

                    {/* Qualification Header */}
                    <p className="text-lg font-semibold pt-4">
                        To qualify for a return or exchange, the following conditions must be met:
                    </p>

                    {/* Qualification List */}
                    <ul className="list-disc list-inside space-y-3 ml-4 text-white">
                        <li>
                            The item must be <span className="text-red-500 font-bold">unused</span> and in the same condition as when you received it.
                        </li>
                        <li>
                            It must be returned in its <span className="text-red-500 font-bold">original packaging</span>.
                        </li>
                        <li>
                            Items purchased <span className="text-red-500 font-bold">on sale</span> may not qualify for a return or exchange.
                        </li>
                    </ul>

                    {/* Replacement Condition */}
                    <p className="pt-4">
                        We will replace items only if they are defective or damaged based on an exchange request.
                    </p>
                    
                    {/* Return Request Email */}
                    <p className="pt-4 text-lg">
                        To request a return or exchange, email us at: <a href="mailto:future.retail20@gmail.com" className="text-red-500 hover:underline font-semibold">future.retail20@gmail.com</a>
                    </p>

                    {/* Exemptions */}
                    <p className="pt-4">
                        Some product categories may be <span className="text-red-500 font-bold">exempt from returns or refunds</span>. These items will be clearly identified at the time of purchase.
                    </p>

                    {/* Inspection and Notification */}
                    <p className="pt-4">
                        Once your return or exchange is received and inspected, we will notify you via email. If approved after our quality check, we will process the return or exchange as per our policy.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default ReturnsPolicyCo;