import React from 'react';
import fusionGamingLogo from "../assets/FG_Logo.webp"; // Assuming the logo is in assets

const Footer = () => {
    // Data structure for the link columns (USEFUL, QUICK, LEGAL)
    const linkColumns = [
        {
            title: "USEFUL LINKS",
            links: [
                { name: "Careers", href: "#careers" },
                { name: "Contact us", href: "#contact" },
                { name: "Video Consultation", href: "#consultation" },
                { name: "Support", href: "#support" },
                { name: "PC Master Hunt", href: "#pcmasterhunt" },
            ]
        },
        {
            title: "QUICK LINKS",
            links: [
                { name: "Build Your Own PC", href: "#build" },
                { name: "Pre-Builts", href: "#prebuilts" },
                { name: "Add-Ons", href: "#addons" },
                { name: "Profile", href: "#profile" },
                { name: "Orders", href: "#orders" },
                { name: "Coupons", href: "#coupons" },
            ]
        },
        {
            title: "LEGAL",
            links: [
                { name: "Cancellation & Refund", href: "#refund" },
                { name: "Terms & Conditions", href: "#terms" },
                { name: "Returns", href: "#returns" },
                { name: "Shipping", href: "#shipping" },
                { name: "Privacy", href: "#privacy" },
            ]
        }
    ];

    return (
        <footer className="bg-gray-950 text-white pt-16 pb-8 px-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                
                {/* 1. Main Grid: Logo, 3 Link Columns, and Contact Info (5 columns on large screens) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16">
                    
                    {/* Column 1: Logo and About (The first column in the 5-column grid) */}
                    <div className="space-y-4">
                        {/* Logo Element */}
                        <a href="/" className="flex flex-col space-y-1 w-fit">
                            <img 
                                src={fusionGamingLogo} 
                                alt="Fusion Gaming Logo" 
                                className="h-16 w-auto object-contain mb-1" 
                            />
                        </a>
                        
                        {/* Description Block */}
                        <div className="space-y-1">
                            <h3 className="text-xl font-extrabold tracking-tight leading-none text-white">FUSION GAMING</h3>
                            <div className="text-base font-bold text-red-600 tracking-wider">THE PC FACTORY</div>
                            <p className="text-sm text-gray-400 max-w-xs pt-2">
                                Fusion Gaming excels in custom-built PCs and boasts over 3500+ loyal customers all across India.
                            </p>
                        </div>
                        
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 pt-4">
                            <i className="fa-brands fa-instagram text-xl text-white hover:text-red-500 transition duration-300"></i>
                            <i className="fa-brands fa-facebook-f text-xl text-white hover:text-red-500 transition duration-300"></i>
                            <i className="fa-brands fa-youtube text-xl text-white hover:text-red-500 transition duration-300"></i>
                            <i className="fa-brands fa-linkedin text-xl text-white hover:text-red-500 transition duration-300"></i>
                            <a href="https://wa.me/916369933507" aria-label="WhatsApp" className="text-white hover:text-red-500 transition duration-300">
                              <i className="fa-brands fa-whatsapp text-xl"></i></a>
                        </div>
                    </div>

                    {/* Columns 2, 3, 4: Link Groups (MAPPED) */}
                    {linkColumns.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-base font-bold text-red-600 tracking-wider mb-3">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a 
                                            href={link.href} 
                                            className="text-sm text-white hover:text-gray-300 transition duration-200"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    
                    {/* Column 5: CONTACT INFO (The fifth and final column in the grid) */}
                    <div className="space-y-4">
                        <h3 className="text-base font-bold text-red-600 tracking-wider mb-3">CONTACT INFO</h3>
                        <div className="space-y-3 text-sm text-white">
                            {/* Location */}
                            <p className="flex items-start space-x-3">
                                <i className="fa-solid fa-map-marker-alt mt-1 text-red-500 text-lg"></i>
                                <span>
                                    The Marina Mall, 2nd Floor, Below INOX, Egattur, Chennai, Tamil Nadu - 603103.
                                </span>
                            </p>
                            {/* Email */}
                            <p className="flex items-center space-x-3">
                                <i className="fa-solid fa-envelope text-red-500 text-lg"></i>
                                <a href="mailto:future.retail20@gmail.com" className="hover:text-white transition duration-200">
                                    future.retail20@gmail.com
                                </a>
                            </p>
                            {/* Phone */}
                            <p className="flex items-center space-x-3">
                                <i className="fa-solid fa-phone text-red-500 text-lg"></i>
                                <a href="tel:+916369933507" className="hover:text-white transition duration-200">
                                    +91-63699 33507
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* 2. Copyright */}
               
            </div>
        </footer>
    );
};

export default Footer;