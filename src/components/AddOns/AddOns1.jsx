import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
// Added Laptop icon import from lucide-react
import { 
    Monitor, 
    Laptop, 
    Keyboard, 
    Mouse, 
    Headphones, 
    Gamepad 
} from 'lucide-react'; 

const AddOns1 = () => {
    // State to track the currently selected Add-On item
    const [selectedAddOn, setSelectedAddOn] = useState(null);

    // State to manage the selected values in the Laptop sub-dropdowns
    const [laptopFormData, setLaptopFormData] = useState({
        laptop_brand: '',
        laptop_processor: '',
        laptop_screen: '',
    });

    // Handler for updating the Laptop configuration state
    const handleLaptopChange = (e) => {
        const { name, value } = e.target;
        setLaptopFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    // Array defining the Add-On items (FINAL ORDER)
    const addOns = [
        { label: "Monitor", key: "monitor", icon: Monitor },
        { label: "Keyboard", key: "keyboard", icon: Keyboard },
        { label: "Mouse", key: "mouse", icon: Mouse },
        { label: "Headset", key: "headset", icon: Headphones }, 
        { label: "Simulator", key: "simulator", icon: Gamepad }, 
        { label: "Laptop", key: "laptop", icon: Laptop } // Laptop is the last item
    ];

    const handleSelect = (key) => {
        // Only change the selected add-on. The configuration is handled by laptopFormData.
        setSelectedAddOn(key);
    };

    // Styles for the standard sub-dropdowns
    const subDropdownClass = "w-full bg-black text-white p-3 rounded-md appearance-none border border-gray-600 focus:ring-red-600 focus:border-red-600 cursor-pointer";

    // Sub-field definitions for the Laptop configuration
    const laptopFields = [
        { label: "Laptop Brand", key: "laptop_brand", options: ["Dell", "HP", "Lenovo", "Asus", "Acer"] },
        { label: "Processor Type", key: "laptop_processor", options: ["Core i5", "Core i7", "Ryzen 5", "Ryzen 7"] },
        { label: "Screen Size", key: "laptop_screen", options: ["14 inch", "15.6 inch", "17 inch"] },
    ];
    
    // Function to render the configuration panel based on the selected Add-On
    const renderConfigurationPanel = () => {
        if (!selectedAddOn) return null;

        if (selectedAddOn === 'laptop') {
            return (
                <div className="p-4 pt-2 space-y-4 bg-gray-900 border-b border-gray-700">
                    <h3 className="text-xl font-semibold text-red-500 mb-4">Configure Laptop</h3>
                    
                    {/* Render fields for Laptop */}
                    {laptopFields.map((field, index) => (
                        <div key={index}>
                            <label className="block text-sm font-medium mb-1 text-white">{field.label}</label>
                            <select
                                name={field.key}
                                className={subDropdownClass}
                                // BOUND TO STATE
                                value={laptopFormData[field.key]} 
                                onChange={handleLaptopChange} 
                            >
                                <option value="" disabled hidden>Choose {field.label}...</option>
                                {field.options.map((option, optIndex) => (
                                    <option key={optIndex} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    ))}
                    
                    <div className="pt-2">
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition duration-300">
                            Add Laptop to Cart
                        </button>
                    </div>
                </div>
            );
        }

        // Default placeholder for other items
        
    };

    return (
        <section className="py-15 px-4 bg-black flex justify-center items-center">
            {/* max-w-lg ensures responsiveness by capping the container size */}
            <div className="bg-gray-950 mt-10 md:mt-14 text-white p-6 md:p-10 w-full max-w-4xl shadow-2xl rounded-lg  border border-gray-800">
                
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-10">
                    Add-Ons
                </h2>

                {/* Add-Ons Grid - Responsive Layout */}
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 md:flex-nowrap space-x-4 md:space-x-10">
                    {addOns.map((item) => (
                        <div 
                            key={item.key} 
                            // Applied a controlled width for better wrapping on mobile, but let flex handle it on desktop
                            className={`flex flex-col items-center cursor-pointer p-2 transition duration-300 rounded-lg w-1/4 md:w-auto ${
                                selectedAddOn === item.key 
                                    ? 'text-red-500 border-b-2 border-red-500' 
                                    : 'text-white hover:text-red-500'
                            }`}
                            onClick={() => handleSelect(item.key)}
                        >
                            <item.icon className={`text-4xl mb-1 ${selectedAddOn === item.key ? 'text-red-600' : 'text-white'} w-10 h-10`} /> 
                            <span className="text-xs font-medium text-center">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Configuration Panel */}
                {selectedAddOn && (
                    <div className="mt-8">
                        {renderConfigurationPanel()}
                    </div>
                )}
            </div>

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

export default AddOns1;