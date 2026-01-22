import React from 'react';
import { MessageCircle, Phone, X, ArrowRight } from 'lucide-react'; 
const PrivacyCo = () => {
    return (
        // Full page container with dark background
        <div className="min-h-screen bg-black text-white px-3 py-4 sm:px-6 sm:py-8 md:px-12 md:py-12 lg:px-20 lg:py-20 font-inter">
            
            {/* Policy Container */}
            <div className="max-w-4xl mx-auto mt-16 sm:mt-8">
                
                {/* Main Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-red-600 mb-6 sm:mb-8 pt-4 sm:pt-8 pb-2 sm:pb-4 tracking-wide">
                    Privacy Policy
                </h1>
                
                <div className="space-y-6 sm:space-y-8 text-gray-300 leading-relaxed font-light">
                    
                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Information We Collect</h2>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed">
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Content Information:</span>
                                <span className="text-gray-300">We collect your name, email, mobile number, phone number, street, city, state, pincode, country, and IP address.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Payment and Billing Information:</span>
                                <span className="text-gray-300">We collect your billing name, billing address, and payment method when you buy a product. Credit card information is processed by our payment partner PhonePe.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Information You Post:</span>
                                <span className="text-gray-300">We collect information you post on our website or on a third-party social media site belonging to fusiongaming.in.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Demographic Information:</span>
                                <span className="text-gray-300">We may collect demographic information about you, including your preferences and survey responses.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Other Information:</span>
                                <span className="text-gray-300">We collect information about your IP address, browser, and usage patterns on our website.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Information Collection Methods */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Information Collection Methods</h2>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed">
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Direct Collection:</span>
                                <span className="text-gray-300">We collect information directly from you when you register or buy a product.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Passive Collection:</span>
                                <span className="text-gray-300">We use tracking tools like Google Analytics and browser cookies for collecting information about your usage of our website.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Third-Party Information:</span>
                                <span className="text-gray-300">If you use an integrated social media feature on our websites, the third-party social media site will give us certain information about you.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Use of Your Personal Information */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Use of Your Personal Information</h2>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed">
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Contacting You:</span>
                                <span className="text-gray-300">We use the information to contact you for purchase confirmations or promotions.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Responding to Requests:</span>
                                <span className="text-gray-300">We use your information to respond to your requests or questions.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Improving Our Services:</span>
                                <span className="text-gray-300">We use your information to customize your experience and improve our products and services.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Security Purposes:</span>
                                <span className="text-gray-300">We use information to protect our company, customers, and websites.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Marketing Purposes:</span>
                                <span className="text-gray-300">We might send you information about promotions, offers, and new features.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Transactional Communications:</span>
                                <span className="text-gray-300">We send emails or SMS about your account or purchases.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Sharing of Information */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Sharing of Information</h2>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed">
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Service Providers:</span>
                                <span className="text-gray-300">We share information with third parties who perform services on our behalf.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Business Partners:</span>
                                <span className="text-gray-300">We may share information with business partners, such as event sponsors or venue operators.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Legal Compliance:</span>
                                <span className="text-gray-300">We share information to comply with the law or respond to legal requests.</span>
                            </li>
                            <li className="pl-2 border-l-2 border-red-500/30">
                                <span className="font-medium text-white block mb-1">Business Transfers:</span>
                                <span className="text-gray-300">We share information with any successor to all or part of our business.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Email Opt-Out */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Email Opt-Out</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            You can opt out of receiving our marketing emails by contacting us at <a href="mailto:future.retail20@gmail.com" className="text-red-400 hover:text-red-300 underline transition-colors break-words">future.retail20@gmail.com</a>. It may take about ten days to process your request. We will still send you transactional messages about your purchases.
                        </p>
                    </section>
                    
                    {/* Third-Party Sites */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Third-Party Sites</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            This policy does not apply to third-party websites linked from our site. Read the privacy policy of other websites carefully.
                        </p>
                    </section>

                    {/* Grievance Officer */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Grievance Officer</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 mb-4">
                            In accordance with the Information Technology Act 2000 and the rules made thereunder, the contact details of the Grievance Officer are:
                        </p>
                        <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800">
                            <address className="not-italic text-xs sm:text-sm md:text-base space-y-2 text-gray-300 leading-relaxed">
                                <p className="font-medium text-white">The Grievance Officer</p>
                                <p>The Marina Mall, OMR, Chennai - 600 103</p>
                                <p>Phone: <a href="tel:+916369933507" className="text-red-400 hover:text-red-300 transition-colors">+91 63699 33507</a></p>
                                <p>Email: <a href="mailto:future.retail20@gmail.com" className="text-red-400 hover:text-red-300 underline transition-colors break-words">future.retail20@gmail.com</a></p>
                            </address>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 mt-4">All concerns or communications relating to this Policy must be communicated to us using the email address <a href="mailto:www.fusiongaming.in" className="text-red-400 hover:text-red-300 underline transition-colors break-words">www.fusiongaming.in</a>.</p>
                    </section>

                    {/* Updates to This Policy */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Updates to This Policy</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            This Privacy Policy was last updated on November 01, 2024. Please check our site periodically for updates.
                        </p>
                    </section>

                    {/* Jurisdiction */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-red-500 mb-3 sm:mb-4 tracking-wide">Jurisdiction</h2>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-300">
                            Disputes arising under this policy shall be governed by the laws of India and subject to the jurisdiction of the courts of Chennai, Tamil Nadu.
                        </p>
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

export default PrivacyCo;