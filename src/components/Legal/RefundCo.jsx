import React from 'react';

const RefundCo = () => {
    return (
        // Full page container with dark background
        <div className="min-h-screen bg-black text-white p-4 sm:p-8 md:p-12 lg:p-20 text-justify ">
            
            {/* Policy Container (Max width for readability) */}
            <div className="max-w-2xl mx-auto">
                
                {/* Main Title */}
                <h1 className="text-4xl font-bold text-center text-red-500 mb-1 pt-8 pb-4">
                    Cancellation and Refund Policy
                </h1>
                
                {/* Introductory Paragraph */}
                

                {/* --- Policy Sections --- */}

                {/* 1. Cancellations */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-red-500 mb-3">1. Cancellations:</h2>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-white">
                        <li>
                            Cancellation requests must be made within **24 hours** of placing the order. Orders cannot be cancelled once the 
                            status is officially **"Confirmed"** or if the product is **"Ready to Deliver."** </li>
                        <li>
                            Custom PCs and other specially configured products are not eligible for cancellation due to their personalized nature.
                        </li>
                    </ul>
                </div>

                {/* 2. Refunds for Custom-Built PCs */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-red-500 mb-3">2. Refunds for Custom-Built PCs:</h2>
                    <p className="text-white mb-3">
                        Refunds or replacements for custom-built PCs will only be processed under the following conditions:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-white">
                        <li>
                            **Defective or Damaged Product:** Customers must report manufacturing defects or shipping damage within **7 days of receipt.**
                        </li>
                        <li>
                            Refunds/Replacements are not granted for reasons like dissatisfaction with performance or changes in personal preference after purchase.
                        </li>
                    </ul>
                </div>
                
                {/* 3. Damaged or Defective Products */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-red-500 mb-3">3. Damaged or Defective Products:</h2>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-white">
                        <li>
                            If you receive a damaged or defective item, notify our customer service team within **48 hours of receipt.** Submit proof (e.g., photos of the damage, video of unpacking the product).
                        </li>
                        <li>
                            Our team will verify the claim and make a final decision regarding replacement or refund.
                        </li>
                    </ul>
                </div>

                {/* 4. Misrepresentation or Dissatisfaction */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-red-500 mb-3">4. Misrepresentation or Dissatisfaction:</h2>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-white">
                        <li>
                            If the product received is significantly different from what was described (e.g., incorrect specification or missing component), report within **7 days**.
                        </li>
                        <li>
                            Claims based on personal expectations or subjective dissatisfaction are not eligible for refunds unless supported by a clear instance of misrepresentation.
                        </li>
                    </ul>
                </div>

                {/* 5. Warranty Claims */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-red-500 mb-3">5. Warranty Claims:</h2>
                    <p className="text-white">
                        For products with a manufacturer warranty, customers can contact the manufacturer directly or us for repair or replacement. Our team is available to assist with this process if needed.
                    </p>
                </div>
                
                {/* 6. Refund Processing Time */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-red-500 mb-3">6. Refund Processing Time:</h2>
                    <p className="text-white">
                        If a refund is approved, it will be processed within **5-7 business days** after validation. Refunds will be made via the original payment method. Delays may occur due to holidays or incomplete information.
                    </p>
                </div>

                {/* Contact Information (Implied) */}
                

            </div>
        </div>
    );
}

export default RefundCo;