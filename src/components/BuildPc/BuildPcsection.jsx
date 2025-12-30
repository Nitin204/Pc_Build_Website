import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

import img1 from '../../assets/imagepc.png';
const BuildPcsection = () => {
    // State to manage which component section is currently open/expanded
    const [openSection, setOpenSection] = useState('Processor'); 

    // State to manage the selected values in the sub-dropdowns
    const [formData, setFormData] = useState({});
    
    // State to manage PC build summary display
    const [showBuildSummary, setShowBuildSummary] = useState(false);
    const [buildPrice, setBuildPrice] = useState(0);
    const [activeTab, setActiveTab] = useState('features');

    // --- DUMMY PRICING DATA ENGINE ---
    const componentPrices = {
        // Processor Models
        "Ryzen 5 5500": 9500,
        "Ryzen 7 57005X": 17800,
        // Chipsets
        "B450M": 5200,
        "B450M WiFi": 6800,
        "B550M WiFi": 10500,
        // RAM Sizes
        "8GB 3200MHz(8x1)": 2200,
        "16GB 3200MHz(16x1)": 4100,
        "16GB 3200MHz(8x2)": 4500,
        "32GB 3200MHz(32x1)": 8200,
        "32GB 3200MHz(16x2)": 8800,
        "64GB 3200MHz(32x2)": 16500,
        // GPUs
        "Radeon RX 580 8GB GDDR5": 11000,
        "RTX 4060": 28500,
        "RTX 4070": 56000,
        // Coolers
        "Premium Air Cooler": 2500,
        "AIO 240mm": 6200,
        "AIO 360mm": 9800,
        // Storage
        "256GB M.2 NVMe Gen 3 SSD": 1800,
        "1TB M.2 NVMe Gen 4 SSD": 6500,
        "2TB HDD": 5200,
        "500GB SSD": 3200,
        // PSUs
        "1000W 80+ Gold": 12500,
        "750W 80+ Bronze": 5800,
        // Cabinets
        "O11 Vision (Black)": 14500,
        "H5 Flow": 7900
    };

    // Handle change for any sub-dropdown
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFormData = {
            ...formData,
            [name]: value
        };
        setFormData(newFormData);
        
        // Auto-open next section logic
        const currentSection = componentFields.find(field => 
            subFieldMapping[field]?.some(subField => subField.key === name)
        );
        
        if (currentSection) {
            const requiredFields = subFieldMapping[currentSection];
            const isComplete = requiredFields.every(field => 
                field.key === name ? value : newFormData[field.key]
            );
            
            if (isComplete) {
                const currentIndex = componentFields.indexOf(currentSection);
                const nextSection = componentFields[currentIndex + 1];
                
                setTimeout(() => {
                    if (nextSection) {
                        setOpenSection(nextSection);
                    } else {
                        setOpenSection(null);
                    }
                }, 500);
            }
        }
    };

    // Calculate build price based on actual selected dummy data values
    const calculatePrice = () => {
        let total = 8500; // Base Assembly + Windows License + Service Fee
        
        Object.values(formData).forEach(val => {
            if (componentPrices[val]) {
                total += componentPrices[val];
            }
        });

        return total;
    };

    // Handle Build PC button click
    const handleBuildPC = () => {
        const allSectionsComplete = componentFields.every(field => isSectionComplete(field));
        if (allSectionsComplete) {
            setBuildPrice(calculatePrice());
            setShowBuildSummary(true);
        } else {
            alert('Please complete all sections before building your PC');
        }
    };

    // Handle Add to Cart
    const handleAddToCart = () => {
        const pcBuild = {
            id: `pc-build-${Date.now()}`,
            name: `${formData.processor_model || 'Custom'} Gaming PC`,
            price: buildPrice,
            displayPrice: `₹${buildPrice.toLocaleString()}`,
            quantity: 1,
            category: 'pc-build',
            image: img1,
            specs: Object.entries(formData).map(([key, value]) => `${key.replace(/_/g, ' ')}: ${value}`).join(', ')
        };
        
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const updatedCart = [...existingCart, pcBuild];
        
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
        
        alert(`PC Build added to cart! Total: ₹${buildPrice.toLocaleString()}`);
        setShowBuildSummary(false);
    };


    // Defines all top-level component fields
    const componentFields = [
        "Processor",
        "Chipset",
        "RAM",
        "GPU",
        "Cooler",
        "Storage",
        "Power Supply",
        "Cabinet",
    ];
    
    // Mapping of top-level component to its specific sub-fields and placeholder options.
    const subFieldMapping = {
        "Processor": [
            { label: "Platform", key: "platform", options: ["AMD", "Intel"] },
            { label: "Processor Series", key: "processor_series", options: ["5000", "7000", "800", "9000"] },
            { label: "GPU Type", key: "gpu_type", options: ["Dedicated", "In-Build"] },
            { label: "Processor Model", key: "processor_model", options: ["Ryzen 5 5500", "Ryzen 7 57005X"] },
        ],
        "Chipset": [
            { label: "Chipset Model", key: "chipset_model", options: ["B450M", "B450M WiFi", "B550M WiFi"] },
        ],
        "RAM": [
            { label: "RAM RGB", key: "ram_rgb", options: ["Yes", "No"] },
            { label: "RAM Size", key: "ram_size", options: ["8GB 3200MHz(8x1)", "16GB 3200MHz(16x1)", "16GB 3200MHz(8x2)", "32GB 3200MHz(32x1)", "32GB 3200MHz(16x2)", "64GB 3200MHz(32x2)"] },
        ],
        "GPU": [
            { label: "GPU Brand", key: "gpu_brand", options: ["AMD", "NVIDIA"] },
            { label: "GPU Model", key: "gpu_model", options: ["Radeon RX 580 8GB GDDR5", "RTX 4060", "RTX 4070"] },
        ],
        "Cooler": [
            { label: "Cooler Model", key: "cooler_model", options: ["Premium Air Cooler", "AIO 240mm", "AIO 360mm"] },
        ],
        "Storage": [
            { label: "Primary Storage", key: "primary_storage", options: ["256GB M.2 NVMe Gen 3 SSD", "1TB M.2 NVMe Gen 4 SSD"] },
            { label: "Secondary Storage", key: "secondary_storage", options: ["2TB HDD", "500GB SSD"] },
        ],
        "Power Supply": [
            { label: "PSU Model", key: "psu_model", options: ["1000W 80+ Gold", "750W 80+ Bronze"] },
        ],
        "Cabinet": [
            { label: "Cabinet Brand", key: "cabinet_brand", options: ["Lian Li", "NZXT"] },
            { label: "Cabinet Model", key: "cabinet_model", options: ["O11 Vision (Black)", "H5 Flow"] },
        ],
    };
    
    
    // Check if a section is complete (all required fields filled)
    const isSectionComplete = (sectionName) => {
        const requiredFields = subFieldMapping[sectionName];
        return requiredFields?.every(field => formData[field.key]) || false;
    };

    // Check if a section should be enabled (previous sections completed)
    const isSectionEnabled = (sectionName, index) => {
        if (index === 0) return true; // First section always enabled
        for (let i = 0; i < index; i++) {
            if (!isSectionComplete(componentFields[i])) {
                return false;
            }
        }
        return true;
    };

    const toggleSection = (field) => {
        const fieldIndex = componentFields.indexOf(field);
        if (isSectionEnabled(field, fieldIndex)) {
            setOpenSection(openSection === field ? null : field);
        }
    };

    const isExpanded = (field) => openSection === field;

    // Styles for the standard sub-dropdowns
    const subDropdownClass = "w-full bg-black text-white p-3 rounded-md appearance-none border border-gray-600 focus:ring-red-500 focus:border-red-500 cursor-pointer";

    return (
        <section className="py-20 px-4 bg-black">
            <div className="flex justify-center items-start">
                <div className="bg-gray-950 text-white p-6 md:p-10 w-full max-w-lg shadow-2xl rounded-lg border border-gray-800">
                
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-8">
                    Build Your Own PC
                </h2>

                {/* Component Accordion Container */}
                <div className="space-y-0.5 mb-8">
                    {componentFields.map((field, index) => (
                        <div key={index} className="border-t border-gray-800 last:border-b">
                            
                            {/* Top-level Component Header (Clickable) */}
                            <div 
                                className={`flex justify-between items-center p-3 transition duration-150 ${
                                    isExpanded(field) ? 'bg-gray-800' : 
                                    isSectionEnabled(field, index) ? 'hover:bg-gray-800 cursor-pointer' : 'bg-gray-900 cursor-not-allowed opacity-50'
                                }`}
                                onClick={() => toggleSection(field)}
                            >
                                <div className="flex flex-col">
                                    <span className="font-semibold text-base">{field}</span>
                                    {isSectionComplete(field) && (
                                        <div className="text-xs text-red-500 text mt-1 text-semibold">
                                            {subFieldMapping[field].map(subField => 
                                                formData[subField.key] ? ` ${formData[subField.key]}` : ''
                                            ).filter(Boolean).join(' • ')}
                                        </div>
                                    )}
                                </div>
                                <svg 
                                    className={`w-5 h-5 transition-transform duration-300 ${isExpanded(field) ? 'transform rotate-180 text-red-600' : 'text-gray-400'}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>

                            {/* Expanded Content (Conditional Rendering) */}
                            {isExpanded(field) && (
                                <div className="p-4 pt-2 space-y-4 bg-gray-900 border-b border-gray-700">
                                    {subFieldMapping[field] && subFieldMapping[field].length > 0 && (
                                        subFieldMapping[field].map((subField, subIndex) => (
                                            <div key={subIndex}>
                                                <label className="block text-sm font-medium mb-1 text-white">{subField.label}</label>
                                                <select
                                                    name={subField.key}
                                                    className={subDropdownClass}
                                                    value={formData[subField.key] || ''}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" disabled hidden>Choose any one...</option>
                                                    {subField.options.map((option, optIndex) => (
                                                        <option key={optIndex} value={option}>{option}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Build PC Button */}
                <div className="text-center mt-10">
                    <button 
                        onClick={handleBuildPC}
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded transition duration-300 cursor-pointer"
                    >
                        Build PC
                    </button>
                </div>

                {/* Assistance Text */}
                <p className="text-center text-sm mt-8 text-gray-400">
                    Need Assistance? <a href="tel:+916369933507" className="text-red-500 font-semibold hover:text-red-500 transition duration-300">+91-6369933507</a>
                </p>
                </div>
            </div>

            {/* PC Build Summary Section - Outside Form */}
            {showBuildSummary && (
                <div className="flex justify-center mt-8 px-4">
                    <div className="bg-gray-950 text-white p-6 w-full max-w-6xl shadow-2xl rounded-lg border border-gray-700">
                        <h3 className="text-2xl font-bold text-red-500 mb-6 text-center">Fusion Gaming Elite PC</h3>
                        <p className="text-center text-gray-400 mb-6">Powered by AI System</p>
                        
                        {/* Tab Navigation */}
                        <div className="flex justify-center mb-6">
                            <div className="flex bg-gray-800 rounded-lg p-1">
                                <button 
                                    onClick={() => setActiveTab('features')}
                                    className={`px-6 py-2 rounded-md text-sm font-medium transition duration-300 ${
                                        activeTab === 'features' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    Features
                                </button>
                                <button 
                                    onClick={() => setActiveTab('overview')}
                                    className={`px-6 py-2 rounded-md text-sm font-medium transition duration-300 ${
                                        activeTab === 'overview' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    Overview
                                </button>
                              
                                
                               
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* PC Image */}
                            <div className="lg:w-1/3">
                                <div className="bg-black rounded-lg p-6 border border-gray-700">
                                    <div className="w-full h-64  from-red-900/20 to-gray-900 rounded-lg flex items-center justify-center  mb-4 cursor-pointer hover:scale-105 transition-transform duration-300">
                                        <img src={img1} alt="PC Build" className="max-h-full object-contain" />
                                    </div>
                                   
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="lg:w-2/3">
                                {activeTab === 'overview' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Left Column - Specifications */}
                                        <div>
                                            <h4 className="text-red-500 font-bold mb-4">Specifications</h4>
                                            <div className="space-y-3 text-sm">
                                                {Object.entries(formData).map(([key, value]) => (
                                                    <div key={key} className="flex items-center">
                                                        <span className="text-red-500 mr-2">•</span>
                                                        <span className="text-gray-300 capitalize">{key.replace(/_/g, ' ')}: </span>
                                                        <span className="text-white font-medium ml-1">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Column - Compatibility & Features */}
                                       
                                    </div>
                                )}

                                {activeTab === 'benchmarks' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-red-500 font-bold mb-4">Gaming Performance</h4>
                                            <div className="space-y-4">
                                                <div className="bg-gray-800 p-4 rounded-lg">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-gray-300">Cyberpunk 2077 (Ultra)</span>
                                                        <span className="text-green-400 font-bold">85 FPS</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                                        <div className="bg-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-800 p-4 rounded-lg">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-gray-300">Call of Duty (High)</span>
                                                        <span className="text-green-400 font-bold">120 FPS</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                                        <div className="bg-green-400 h-2 rounded-full" style={{width: '95%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-red-500 font-bold mb-4">Productivity Scores</h4>
                                            <div className="space-y-4">
                                                <div className="bg-gray-800 p-4 rounded-lg">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-gray-300">Cinebench R23</span>
                                                        <span className="text-blue-400 font-bold">18,500</span>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-800 p-4 rounded-lg">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-gray-300">3DMark Time Spy</span>
                                                        <span className="text-blue-400 font-bold">12,800</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'features' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-red-500 font-bold mb-4">Premium Features</h4>
                                            <div className="space-y-3 text-sm">
                                                <div className="flex items-center">
                                                    <span className="text-green-400 mr-2">✓</span>
                                                    <span className="text-gray-300">RGB Lighting Control</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="text-green-400 mr-2">✓</span>
                                                    <span className="text-gray-300">Liquid Cooling System</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="text-green-400 mr-2">✓</span>
                                                    <span className="text-gray-300">Tempered Glass Panel</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="text-green-400 mr-2">✓</span>
                                                    <span className="text-gray-300">Tool-less Upgrade</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-red-500 font-bold mb-4">Warranty & Support</h4>
                                            <div className="space-y-3 text-sm">
                                                <div className="flex items-center">
                                                    <span className="text-green-400 mr-2">✓</span>
                                                    <span className="text-gray-300">3 Year Comprehensive Warranty</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="text-green-400 mr-2">✓</span>
                                                    <span className="text-gray-300">24/7 Technical Support</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="text-green-400 mr-2">✓</span>
                                                    <span className="text-gray-300">Free Home Pickup & Delivery</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="text-green-400 mr-2">✓</span>
                                                    <span className="text-gray-300">Performance Guarantee</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Price and Actions */}
                                <div className="mt-8 pt-6 border-t border-gray-700">
                                    <div className="flex flex-col md:flex-row justify-between items-center">
                                        <div className="mb-4 md:mb-0">
                                            <p className="text-gray-400 text-sm line-through">₹{(buildPrice + 10000).toLocaleString()}</p>
                                            <p className="text-3xl font-bold text-green-400">₹{buildPrice.toLocaleString()}</p>
                                            <p className="text-xs text-gray-400">Save ₹10,000 (15% off)</p>
                                        </div>
                                        <div className="flex space-x-3">
                                            <button 
                                                onClick={() => setShowBuildSummary(false)}
                                                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded transition duration-300"
                                            >
                                                Edit Build
                                            </button>
                                            <button 
                                                onClick={handleAddToCart}
                                                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded transition duration-300 font-bold cursor-pointer"
                                            >
                                                ADD TO CART
                                            </button>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
          
            {/* Floating Contact Buttons */}
             <div className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4">
                <a href="https://wa.me/" className="bg-[#25D366] text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 md:h-7 md:w-7" />
                </a>
                <a href="tel:" className="bg-blue-600 text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
                    <Phone className="h-5 w-5 md:h-7 md:w-7" />
                </a>
            </div>
        </section>
    );
};

export default BuildPcsection;