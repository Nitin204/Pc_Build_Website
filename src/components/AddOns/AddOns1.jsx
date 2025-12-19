import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Monitor, 
    Keyboard, 
    Mouse, 
    Headphones, 
    Gamepad, 
    MessageCircle, 
    Phone 
} from 'lucide-react';

// --- IMAGE IMPORTS ---
import monitorImg1 from '../../assets/moniter1.webp';
import monitorImg2 from '../../assets/moniter2.webp';
import keyboard1 from '../../assets/DellKB216.webp';
import keyboard2 from '../../assets/Coconut Desire.webp';
import Mouse1 from '../../assets/Razer DeathAdder Essential.webp';
import Mouse2 from '../../assets/Coconut GM2 Bullet.webp';
import Headphones1 from '../../assets/Ant Esports H520W.webp';
import Headphones2 from '../../assets/Razer BlackShark V2 X USB.webp';
import gamePad1 from '../../assets/Logitech G29.webp';
import gamePad2 from '../../assets/Logitech G29.webp';
import bgImage from '../../assets/gaming1.webp';

const ADD_ONS_DATA = [
    {
        id: 'mon-01',
        category: 'monitor',
        name: 'MSI PRO MP272 E2',
        specs: '27-inch Full HD Office Monitor - 100Hz, Eye-Friendly, HDMI 1.4b, DP 1.2a.',
        price: 8490,
        displayPrice: '₹ 8,490/-',
        image: monitorImg1
    },
    {
        id: 'mon-02',
        category: 'monitor',
        name: 'BenQ GW2490',
        specs: '24-inch 1080p FHD IPS Monitor, 100Hz, 99% sRGB, Eye-care, Dual HDMI.',
        price: 7990,
        displayPrice: '₹ 7,990/-',
        image: monitorImg2
    },
    {
        id: 'kb-01',
        category: 'keyboard',
        name: 'Mechanical Gaming Keyboard',
        specs: 'RGB Backlit, Blue Switches, Anti-ghosting keys.',
        price: 2499,
        displayPrice: '₹ 2,499/-',
        image: keyboard1
    },
    {
        id: 'kb-02',
        category: 'keyboard',
        name: 'Wireless Gaming Keyboard',
        specs: 'Wireless, RGB Backlit, Mechanical switches, 2.4GHz connection.',
        price: 3999,
        displayPrice: '₹ 3,999/-',
        image: keyboard2
    },
    {
        id: 'ms-01',
        category: 'mouse',
        name: 'Gaming Mouse RGB',
        specs: '12000 DPI, RGB lighting, 7 programmable buttons.',
        price: 1299,
        displayPrice: '₹ 1,299/-',
        image: Mouse1
    },
    {
        id: 'ms-02',
        category: 'mouse',
        name: 'Wireless Gaming Mouse',
        specs: 'Wireless, 16000 DPI, RGB, rechargeable battery.',
        price: 2199,
        displayPrice: '₹ 2,199/-',
        image: Mouse2
    },
    {
        id: 'hs-01',
        category: 'headset',
        name: 'Gaming Headset 7.1',
        specs: '7.1 Surround Sound, RGB lighting, noise cancelling mic.',
        price: 1899,
        displayPrice: '₹ 1,899/-',
        image: Headphones1
    },
    {
        id: 'hs-02',
        category: 'headset',
        name: 'Wireless Gaming Headset',
        specs: 'Wireless, 50mm drivers, 20hr battery, RGB.',
        price: 3499,
        displayPrice: '₹ 3,499/-',
        image: Headphones2
    },
    {
        id: 'gp-01',
        category: 'simulator',
        name: 'Racing Wheel Controller',
        specs: 'Force feedback, 900° rotation, pedals included.',
        price: 8999,
        displayPrice: '₹ 8,999/-',
        image: gamePad1
    },
    {
        id: 'gp-02',
        category: 'simulator',
        name: 'Flight Simulator Joystick',
        specs: 'Precision joystick, throttle control, multiple buttons.',
        price: 5499,
        displayPrice: '₹ 5,499/-',
        image: gamePad2
    }
];

const CATEGORIES = [
    { label: "Monitor", key: "monitor", icon: Monitor },
    { label: "Keyboard", key: "keyboard", icon: Keyboard },
    { label: "Mouse", key: "mouse", icon: Mouse },
    { label: "Headset", key: "headset", icon: Headphones },
    { label: "Simulator", key: "simulator", icon: Gamepad },
];

const AddOns1 = () => {
    const [selectedCategory, setSelectedCategory] = useState('monitor');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showProductSummary, setShowProductSummary] = useState(false);
    const [summaryProduct, setSummaryProduct] = useState(null);
    const navigate = useNavigate();

    const filteredProducts = useMemo(() => {
        return ADD_ONS_DATA.filter(product => product.category === selectedCategory);
    }, [selectedCategory]);

    const handleAddToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const itemExists = existingCart.find(item => item.id === product.id);
        
        let updatedCart;
        if (itemExists) {
            updatedCart = existingCart.map(item => 
                item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
            );
        } else {
            updatedCart = [...existingCart, { ...product, quantity: 1 }];
        }
        
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const handleShowSummary = (product) => {
        setSummaryProduct(product);
        setShowProductSummary(true);
    };

    const handleSummaryAddToCart = () => {
        handleAddToCart(summaryProduct);
        setShowProductSummary(false);
    };

    return (
        <section className="py-24 px-4 text-white min-h-screen relative bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'}}>
            <div className="absolute inset-0 bg-black"></div>
            <div className="mx-auto w-full max-w-2xl relative z-10">
                <h2 className="text-3xl font-bold text-center text-red-500 mb-14 uppercase tracking-wider">
                    Add-Ons
                </h2>

                {/* --- CATEGORY TABS --- */}
                <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 mb-16 pb-6 overflow-x-auto ">
                    {CATEGORIES.map((cat) => (
                        <button 
                            key={cat.key} 
                            onClick={() => setSelectedCategory(cat.key)}
                            className={`flex flex-col items-center p-2 transition-all duration-300 outline-none flex-shrink-0 ${
                                selectedCategory === cat.key 
                                    ? 'text-red-500 border-b-2 border-red-500 scale-110 ' 
                                    : 'text-white hover:text-gray-400'
                            }`}
                        >
                            <cat.icon className="w-8 h-8 md:w-10 md:h-10 mb-2 cursor-pointer" /> 
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-tight ">{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* --- PRODUCT GRID --- */}
                <div className="space-y-6">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="flex flex-col md:flex-row p-5 rounded-xl border border-gray-800 bg-[#0d0d0d] hover:border-red-600 transition-all duration-500 group">
                            <div className="flex-shrink-0 w-full md:w-40 h-40 bg-black rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-6 flex items-center justify-center border border-gray-800 cursor-pointer hover:border-red-500"
                                 onClick={() => setSelectedProduct(product)}>
                                <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            
                            <div className="flex-grow flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                                        <span className="text-[10px] bg-red-500/10 text-red-500 px-2 py-1 rounded uppercase border border-red-500/20">{product.category}</span>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{product.specs}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-gray-800/50 gap-4">
                                    <p className="text-2xl font-black text-red-500">{product.displayPrice}</p>
                                    <div className="flex space-x-3 w-full sm:w-auto">
                                        <button onClick={() => setSelectedProduct(product)} className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold uppercase rounded-md bg-gray-600 hover:bg-gray-700 text-white transition-all cursor-pointer">Show Info</button>
                                        <button onClick={() => handleAddToCart(product)} className="flex-1 sm:flex-none px-6 py-2 text-xs font-bold uppercase rounded-md bg-red-600 hover:bg-red-700 text-white transition-all cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- FLOATING CONTACT --- */}
            <div className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4">
                <a href="https://wa.me/" className="bg-[#25D366] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform"><MessageCircle className="h-6 w-6" /></a>
                <a href="tel:+916369933507" className="bg-blue-600 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform"><Phone className="h-6 w-6" /></a>
            </div>

            {/* --- PRODUCT INFO MODAL --- */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-2 sm:p-4">
                    <div className="bg-black text-white rounded-xl max-w-4xl w-full relative border border-red-500 overflow-hidden max-h-[95vh] overflow-y-auto">
                        
                        <button 
                            onClick={() => setSelectedProduct(null)} 
                            className="absolute top-3 right-3 sm:top-6 sm:right-6 text-white hover:text-red-500 transition-all text-xl sm:text-2xl z-10 cursor-pointer"
                        >
                            ✕
                        </button>

                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 bg-black p-4 sm:p-6 flex items-center justify-center">
                                <img 
                                    src={selectedProduct.image} 
                                    alt={selectedProduct.name} 
                                    className="w-full h-48 sm:h-64 object-contain" 
                                />
                            </div>
                            
                            <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-red-500 mb-2">{selectedProduct.name}</h2>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{selectedProduct.specs}</p>
                                    
                                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                                        <div className="border-l-4 border-red-500 pl-2 sm:pl-3">
                                            <h4 className="text-xs uppercase font-bold text-gray-500 mb-1">FEATURES</h4>
                                            <p className="text-white text-xs sm:text-sm">High-quality build, RGB lighting</p>
                                        </div>
                                        
                                        <div className="border-l-4 border-red-500 pl-2 sm:pl-3">
                                            <h4 className="text-xs uppercase font-bold text-gray-500 mb-1">COMPATIBILITY</h4>
                                            <p className="text-white text-xs sm:text-sm">Windows, Mac, Linux</p>
                                        </div>
                                        
                                        <div className="border-l-4 border-red-500 pl-2 sm:pl-3">
                                            <h4 className="text-xs uppercase font-bold text-gray-500 mb-1">WARRANTY</h4>
                                            <p className="text-white text-xs sm:text-sm">1 Year manufacturer</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="mb-3 sm:mb-4">
                                        <span className="text-2xl sm:text-3xl font-bold text-white">{selectedProduct.displayPrice}</span>
                                    </div>
                                    
                                    <button 
                                        onClick={() => { handleAddToCart(selectedProduct); setSelectedProduct(null); }}
                                        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-all uppercase text-xs sm:text-sm cursor-pointer"
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- PRODUCT SUMMARY MODAL --- */}
            {showProductSummary && summaryProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
                        <h3 className="text-xl font-bold text-red-500 mb-4">{summaryProduct.name}</h3>
                        
                        {/* Product Image */}
                        <div className="mb-4 flex justify-center">
                            <img src={summaryProduct.image} alt={summaryProduct.name} className="w-32 h-32 object-contain bg-black rounded-lg p-2" />
                        </div>

                        {/* Product Details */}
                        <div className="space-y-2 mb-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Category:</span>
                                <span className="text-white capitalize">{summaryProduct.category}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Specifications:</span>
                                <span className="text-white text-right text-xs">{summaryProduct.specs}</span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-4">
                            <h4 className="font-semibold text-red-400 mb-2">Features:</h4>
                            <ul className="text-xs text-gray-300 space-y-1">
                                <li>• Premium Quality Build</li>
                                <li>• 1 Year Warranty</li>
                                <li>• Fast Delivery</li>
                                <li>• 24/7 Customer Support</li>
                            </ul>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <div className="text-center">
                                <span className="text-2xl font-bold text-green-400">{summaryProduct.displayPrice}</span>
                                <p className="text-xs text-gray-400">*Inclusive of all taxes</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3">
                            <button 
                                onClick={() => setShowProductSummary(false)}
                                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition duration-300"
                            >
                                Back
                            </button>
                            <button 
                                onClick={handleSummaryAddToCart}
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded transition duration-300 cursor-pointer"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* --- BUILD YOUR PC SECTION --- */}
           
            
        </section>
    );
};

export default AddOns1;