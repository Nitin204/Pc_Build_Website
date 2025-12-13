import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';


const BuildPcsection = () => {
    // State to manage which component section is currently open/expanded
    // Initialized to 'Processor' to match the screenshots.
    const [openSection, setOpenSection] = useState('Processor'); 

    // State to manage the selected values in the sub-dropdowns,
    // pre-filled to match the final configured state.
    const [formData, setFormData] = useState({
        // PROCESSOR
        platform: 'AMD',
        processor_series: '5000',
        gpu_type: 'Dedicated',
        processor_model: 'Ryzen 5 5500', 
        
        // CHIPSET
        chipset_model: 'B450M',
        
        // RAM
        ram_rgb: 'Yes',
        ram_size: '8GB 3200MHz(8x1)',
        
        // GPU
        gpu_brand: 'AMD',
        gpu_model: 'Radeon RX 580 8GB GDDR5',
        
        // COOLER
        cooler_model: 'Premium Air Cooler',

        // STORAGE
        primary_storage: '256GB M.2 NVMe Gen 3 SSD',
        secondary_storage: '2TB HDD',
        
        // POWER SUPPLY
        psu_model: '1000W 80+ Gold',
        
        // CABINET
        cabinet_brand: 'Lian Li',
        cabinet_model: 'O11 Vision (Black)',
    });

    // Handle change for any sub-dropdown
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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
    
    
    const toggleSection = (field) => {
        setOpenSection(openSection === field ? null : field);
    };

    const isExpanded = (field) => openSection === field;

    // Styles for the standard sub-dropdowns
    const subDropdownClass = "w-full bg-black text-white p-3 rounded-md appearance-none border border-gray-600 focus:ring-red-600 focus:border-red-600 cursor-pointer";

    return (
        <section className="py-20 px-4 bg-black flex justify-center items-center">
            <div className="bg-gray-950 text-white p-6 md:mt- md:p-10 w-full max-w-lg shadow-2xl rounded-lg border border-gray-800">
                
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
                                className={`flex justify-between items-center p-3 cursor-pointer transition duration-150 ${isExpanded(field) ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                                onClick={() => toggleSection(field)}
                            >
                                <span className="font-semibold text-base">{field}</span>
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
                                    {/* Map over specific sub-fields */}
                                    {subFieldMapping[field] && subFieldMapping[field].length > 0 && (
                                        subFieldMapping[field].map((subField, subIndex) => (
                                            <div key={subIndex}>
                                                <label className="block text-sm font-medium mb-1 text-white">{subField.label}</label>
                                                <select
                                                    name={subField.key}
                                                    className={subDropdownClass}
                                                    value={formData[subField.key]} // Bind value to state
                                                    onChange={handleChange} // Update state on change
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

                {/* Add To Cart Button */}
                <div className="text-center mt-10">
                    <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded transition duration-300">
                        Add To Cart
                    </button>
                </div>

                {/* Assistance Text */}
                <p className="text-center text-sm mt-8 text-gray-400">
                    Need Assistance? <a href="tel:+916369933507" className="text-red-500 font-semibold hover:text-red-500 transition duration-300">+91-6369933507</a>
                </p>
            </div>
            
            {/* Floating Contact Buttons */}
             <div className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4">
                            <a href="https://wa.me/" 
                   // Used specific hex code for WhatsApp green and text-white for icon color
                   className="bg-[#25D366] text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8" />
                </a>
                
                {/* Phone Icon: Changed to Blue bg and white icon */}
                <a href="tel:" 
                   // Used Tailwind's strong blue for phone and text-white for icon color
                   className="bg-blue-600 text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
                    <Phone className="h-8 w-8" />
                </a>
                        </div>
        </section>
    );
};

export default BuildPcsection;