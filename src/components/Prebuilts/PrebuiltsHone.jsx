import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { FaGamepad, FaRobot, FaBuilding, FaCamera, FaChartLine, FaWhatsapp, FaPhone } from 'react-icons/fa';

const PrebuiltsHone = () => {
    const [selectedUsecase, setSelectedUsecase] = useState('Gaming');
    const [budget, setBudget] = useState(100000); // Default value from screenshot (₹ 1,00,000)

    const useCases = [
        { name: 'Gaming', icon: FaGamepad, value: 'Gaming' },
        { name: 'AI/ML', icon: FaRobot, value: 'AI/ML' },
        { name: 'Architecture', icon: FaBuilding, value: 'Architecture' },
        { name: 'Editing', icon: FaCamera, value: 'Editing' },
        { name: 'Trading', icon: FaChartLine, value: 'Trading' },
    ];

    const handleBudgetChange = (event) => {
        setBudget(event.target.value);
    };

    const formatCurrency = (amount) => {
        return `₹ ${new Intl.NumberFormat('en-IN').format(amount)}/-`;
    };

    // The main Pre-Builts content container matches the screenshot design
    return (
        <section className="py-10 px-4 bg-black flex justify-center items-center">
            <div className="bg-gray-950 mt-10 md:mt-14 text-white p-6 md:p-10 w-full max-w-4xl shadow-2xl rounded-lg border border-gray-700">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-1">
                    Pre-Builts
                </h2>

                {/* Select Use Case */}
                <div className="text-center mb-10">
                    <p className="text-base font-semibold text-red-500 mb-5">Select Use Case</p>
                    <div className="flex justify-center space-x-4 md:space-x-30">
                        {useCases.map((useCase) => (
                            <div 
                                key={useCase.name}
                                className={`flex flex-col items-center cursor-pointer transition duration-300 ${
                                    selectedUsecase === useCase.value 
                                    ? 'text-red-500' 
                                    : 'text-white hover:text-gray-300'
                                }`}
                                onClick={() => setSelectedUsecase(useCase.value)}
                            >
                                <useCase.icon className="text-2xl md:text-3xl mb-2" />
                                <span className="text-xs md:text-sm font-medium">{useCase.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Budget Slider */}
                <div className="text-center mb-10">
                    <p className="text-base font-bold text-red-500 mb-1 ">Budget</p>
                    <div className="relative w-full max-w-xl mx-auto">
                        <input
                            type="range"
                            min="50000"
                            max="300000"
                            step="10000"
                            value={budget}
                            onChange={handleBudgetChange}
                            className="w-full h-2 bg-white rounded-lg appearance-none   range-lg"
                            style={{
                                '--tw-ring-color': '#ffffffff', // Customizing the slider thumb track color
                                '--tw-ring-opacity': '1',
                            }}
                        />
                        {/* Budget Value Display */}
                        <div className="absolute text-center mt-3 w-full text-white text-lg font-bold">
                            {formatCurrency(budget)}
                        </div>
                    </div>
                </div>

                {/* Find My PC Button */}
                <div className="text-center pt-8">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded transition duration-300">
                        Find My PC
                    </button>
                </div>
            </div>

            {/* Floating Contact Buttons (Optional, but included for screenshot fidelity) */}
            {/* These should ideally be in App.jsx */}
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

export default PrebuiltsHone;