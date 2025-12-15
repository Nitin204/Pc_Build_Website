import React from 'react';

const PrivacyCo = () => {
    return (
        // Full page container with dark background
        <div className="min-h-screen bg-black text-white p-4 sm:p-8 md:p-12 lg:p-20">
            
            {/* Policy Container (Max width for readability) */}
            <div className="max-w-2xl mx-auto">
                
                {/* Main Title */}
                <h1 className="text-3xl font-bold text-center text-red-600 mb-8 pt-8  pb-4">
                    Privacy Policy
                </h1>
                
                <div className="space-y-8 text-gray-300 text-justify" >
                    
                    {/* Introduction */}
                    

                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-xl font-bold text-red-500 mb-3">Information We Collect</h2>
                        <ul className="space-y-3 ml-4 text-sm">
                            <li>
                                <span className="font-semibold text-white">Content Information:</span> We collect your name, email, mobile number, phone number, street, city, state, pincode, country, and IP address.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Payment and Billing Information:</span> We collect your billing name, billing address, and payment method when you buy a product. Credit card information is processed by our payment partner PhonePe.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Information You Post:</span> We collect information you post on our website or on a third-party social media site belonging to fusiongaming.in.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Demographic Information:</span> We may collect demographic information about you, including your preferences and survey responses.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Other Information:</span> We collect information about your IP address, browser, and usage patterns on our website.
                            </li>
                        </ul>
                    </section>

                    {/* Information Collection Methods */}
                    <section>
                        <h2 className="text-xl font-bold text-red-500 mb-3">Information Collection Methods</h2>
                        <ul className="space-y-3 ml-4 text-sm">
                            <li>
                                <span className="font-semibold text-white">Direct Collection:</span> We collect information directly from you when you register or buy a product.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Passive Collection:</span> We use tracking tools like Google Analytics and browser cookies for collecting information about your usage of our website.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Third-Party Information:</span> If you use an integrated social media feature on our websites, the third-party social media site will give us certain information about you.
                            </li>
                        </ul>
                    </section>

                    {/* Use of Your Personal Information */}
                    <section>
                        <h2 className="text-xl font-bold text-red-500 mb-3">Use of Your Personal Information</h2>
                        <ul className="space-y-3 ml-4 text-sm">
                            <li>
                                <span className="font-semibold text-white">Contacting You:</span> We use the information to contact you for purchase confirmations or promotions.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Responding to Requests:</span> We use your information to respond to your requests or questions.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Improving Our Services:</span> We use your information to customize your experience and improve our products and services.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Security Purposes:</span> We use information to protect our company, customers, and websites.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Marketing Purposes:</span> We might send you information about promotions, offers, and new features.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Transactional Communications:</span> We send emails or SMS about your account or purchases.
                            </li>
                        </ul>
                    </section>

                    {/* Sharing of Information */}
                    <section>
                        <h2 className="text-xl font-bold text-red-500 mb-3">Sharing of Information</h2>
                        <ul className="space-y-3 ml-4 text-sm">
                            <li>
                                <span className="font-semibold text-white">Service Providers:</span> We share information with third parties who perform services on our behalf.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Business Partners:</span> We may share information with business partners, such as event sponsors or venue operators.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Legal Compliance:</span> We share information to comply with the law or respond to legal requests.
                            </li>
                            <li>
                                <span className="font-semibold text-white">Business Transfers:</span> We share information with any successor to all or part of our business.
                            </li>
                        </ul>
                    </section>

                    {/* Email Opt-Out */}
                    <section>
                        <h2 className="text-xl font-semibold text-red-500 mb-3">Email Opt-Out</h2>
                        <p className="text-sm">
                            You can opt out of receiving our marketing emails by contacting us at <a href="mailto:future.retail20@gmail.com" className="text-red-500 hover:underline">future.retail20@gmail.com</a>. It may take about ten days to process your request. We will still send you transactional messages about your purchases.
                        </p>
                    </section>
                    
                    {/* Third-Party Sites */}
                    <section>
                        <h2 className="text-xl font-semibold text-red-500 mb-3">Third-Party Sites</h2>
                        <p className="text-sm">
                            This policy does not apply to third-party websites linked from our site. Read the privacy policy of other websites carefully.
                        </p>
                    </section>

                    {/* Grievance Officer */}
                    <section>
                        <h2 className="text-xl font-semibold text-red-500 mb-3">Grievance Officer</h2>
                        <p className="text-sm">
                            In accordance with the Information Technology Act 2000 and the rules made thereunder, the contact details of the Grievance Officer are:
                        </p>
                        <address className="not-italic text-sm space-y-1 ml-4 mt-2">
                            <p>The Grievance Officer</p>
                            <p>The Marina Mall, OMR, Chennai - 600 103</p>
                            <p>Phone: +91 63699 33507</p>
                            <p>Email: <a href="mailto:future.retail20@gmail.com" className="text-red-500 hover:underline">future.retail20@gmail.com</a></p>
                        </address>
                        <p className="text-sm mt-3">All concerns or communications relating to this Policy must be communicated to us using the email address <a href="mailto:www.fusiongaming.in" className="text-red-500 hover:underline">www.fusiongaming.in</a>.</p>
                    </section>

                    {/* Updates to This Policy */}
                    <section>
                        <h2 className="text-xl font-semibold text-red-500 mb-3">Updates to This Policy</h2>
                        <p className="text-sm">
                            This Privacy Policy was last updated on November 01, 2024. Please check our site periodically for updates.
                        </p>
                    </section>

                    {/* Jurisdiction */}
                    <section>
                        <h2 className="text-xl font-semibold text-red-500 mb-3">Jurisdiction</h2>
                        <p className="text-sm">
                            Disputes arising under this policy shall be governed by the laws of India and subject to the jurisdiction of the courts of Chennai, Tamil Nadu.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default PrivacyCo;