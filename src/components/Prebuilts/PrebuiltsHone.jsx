import React, { useState, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Phone, Share2 } from 'lucide-react';
import { FaGamepad, FaRobot, FaBuilding, FaCamera, FaChartLine } from 'react-icons/fa';
import gaming1 from '../../assets/gaming1.webp';
import gaming2 from '../../assets/gaming2.webp';
import ai1 from '../../assets/ai1.webp';
import ai2 from '../../assets/ai2.webp';
import arch1 from '../../assets/arch1.webp';
import arch2 from '../../assets/arch3.webp';
import arch3 from '../../assets/arch2.webp';
const PREBUILT_DATA = [
    {
        id: 'p1',
        category: 'gaming',
        name: 'Fusion Gaming Master PC',
        specs: 'Core i9 14900K/Z790 WIFI/64GB 5200Mhz (32x2) DDR5 RAM/Nvidia RTX 5080 Ti 16GB GDDR7/360mm AIO Liquid Cooler/750W 80+ Bronze/2TB M.2 NVMe Gen 4 SSD/Deepcool CH560 Digital ARGB-Black',
        price: 236241,
        oldPrice: 262490,
        savings: 26249,
        discount: '10% Off',
        displayPrice: '₹ 2,36,241/-',
        image: gaming1
    },
    {
        id: 'p2',
        category: 'gaming',
        name: 'Fusion Gaming Master PC',
        specs: 'Core i7 14700F/B760m WIFI Premium/64GB 5200Mhz (32x2) DDR5 RAM/Nvidia RTX 5070 Ti 16GB GDDR7/240mm AIO Liquid Cooler/750W 80+ Bronze/1TB M.2 NVMe Gen 4 SSD/Coco Sports Rampage S500D-Black',
        price: 243891,
        oldPrice: 270990,
        savings: 27099,
        discount: '10% Off',
        displayPrice: '₹ 2,43,891/-',
        image: gaming2
    },
    {
        id: 'p3',
        category: 'ai',
        name: 'AI Workstation Pro',
        specs: 'Core i9 14900K/Z790 WIFI/128GB DDR5 RAM/Nvidia RTX 4090 24GB/Custom Loop Cooling/1000W 80+ Gold/4TB NVMe SSD/Fractal Design Define 7',
        price: 450000,
        oldPrice: 500000,
        savings: 50000,
        discount: '10% Off',
        displayPrice: '₹ 4,50,000/-',
        image: ai1
    },
    {
        id: 'p4',
        category: 'architecture',
        name: 'CAD Workstation Elite',
        specs: 'Core i7 14700K/Z790 WIFI/64GB DDR5 RAM/Nvidia RTX 4080 16GB/240mm AIO/850W 80+ Gold/2TB NVMe SSD/Corsair 4000D',
        price: 320000,
        oldPrice: 355000,
        savings: 35000,
        discount: '10% Off',
        displayPrice: '₹ 3,20,000/-',
        image: ai2
    },
    {
        id: 'p5',
        category: 'editing',
        name: 'Content Creator Studio',
        specs: 'Core i9 14900K/Z790 WIFI/64GB DDR5 RAM/Nvidia RTX 4070 Ti 12GB/360mm AIO/750W 80+ Gold/2TB NVMe SSD/NZXT H7 Flow',
        price: 280000,
        oldPrice: 310000,
        savings: 30000,
        discount: '10% Off',
        displayPrice: '₹ 2,80,000/-',
        image: arch1
    },
    {
        id: 'p6',
        category: 'trading',
        name: 'Trading Terminal Pro',
        specs: 'Core i7 14700F/B760 WIFI/32GB DDR5 RAM/Nvidia RTX 4060 Ti 8GB/240mm AIO/650W 80+ Gold/1TB NVMe SSD/Cooler Master MasterBox',
        price: 180000,
        oldPrice: 200000,
        savings: 20000,
        discount: '10% Off',
        displayPrice: '₹ 1,80,000/-',
        image: arch2
    },
    {
        id: 'p7',
        category: 'gaming',
        name: 'Budget Gaming PC',
        specs: 'Core i5 12400F/B660M WIFI/16GB DDR4 3200MHz/Nvidia RTX 4060 8GB/Stock Cooler/550W 80+ Bronze/500GB NVMe SSD/Cooler Master MasterBox Q300L',
        price: 75000,
        oldPrice: 85000,
        savings: 10000,
        discount: '12% Off',
        displayPrice: '₹ 75,000/-',
        image: arch3
    },
    {
        id: 'p8',
        category: 'editing',
        name: 'Entry Level Creator PC',
        specs: 'Core i5 13400F/B760M WIFI/32GB DDR5 4800MHz/Nvidia RTX 4060 Ti 8GB/Tower Cooler/650W 80+ Bronze/1TB NVMe SSD/Fractal Design Core 1000',
        price: 95000,
        oldPrice: 105000,
        savings: 10000,
        discount: '10% Off',
        displayPrice: '₹ 95,000/-',
        image: ai2
    },
    {
        id: 'p9',
        category: 'ai',
        name: 'AI Learning Starter',
        specs: 'Core i7 13700F/B760 WIFI/64GB DDR5 5200MHz/Nvidia RTX 4070 12GB/240mm AIO/750W 80+ Gold/1TB NVMe SSD/NZXT H5 Flow',
        price: 145000,
        oldPrice: 160000,
        savings: 15000,
        discount: '9% Off',
        displayPrice: '₹ 1,45,000/-',
        image:ai1
    },
    {
        id: 'p10',
        category: 'architecture',
        name: 'CAD Entry Workstation',
        specs: 'Core i5 13600K/B760 WIFI/32GB DDR5 4800MHz/Nvidia RTX 4060 Ti 16GB/Tower Cooler/650W 80+ Gold/1TB NVMe SSD/Corsair 4000D Airflow',
        price: 110000,
        oldPrice: 125000,
        savings: 15000,
        discount: '12% Off',
        displayPrice: '₹ 1,10,000/-',
        image: arch1
    },
    {
        id: 'p11',
        category: 'trading',
        name: 'Basic Trading Setup',
        specs: 'Core i3 13100F/B660M/16GB DDR4 3200MHz/Nvidia GTX 1660 Super 6GB/Stock Cooler/450W 80+ Bronze/500GB NVMe SSD/Cooler Master MasterBox Q300L',
        price: 55000,
        oldPrice: 62000,
        savings: 7000,
        discount: '11% Off',
        displayPrice: '₹ 55,000/-',
        image: gaming2
    }
];

const CATEGORIES = [
    { label: "Gaming", key: "gaming", icon: FaGamepad },
    { label: "AI/ML", key: "ai", icon: FaRobot },
    { label: "Architecture", key: "architecture", icon: FaBuilding },
    { label: "Editing", key: "editing", icon: FaCamera },
    { label: "Trading", key: "trading", icon: FaChartLine },
];

const PrebuiltsHone = () => {
    const [selectedCategory, setSelectedCategory] = useState('gaming');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [budget, setBudget] = useState(250000);
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();
    const productsRef = useRef(null);

    const filteredProducts = useMemo(() => {
        return PREBUILT_DATA.filter(product => 
            product.category === selectedCategory && product.price <= budget
        );
    }, [selectedCategory, budget]);

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

    const formatCurrency = (amount) => `₹ ${new Intl.NumberFormat('en-IN').format(amount)}/-`;

    return (
        <section className="py-24 px-4 bg-black text-white min-h-screen">
            <div className="mx-auto w-full max-w-2xl">
                <h2 className="text-3xl font-bold text-center text-red-500 mb-14 uppercase tracking-wider">
                    Pre-Builts
                </h2>

                {/* --- CATEGORY TABS --- */}
                <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 mb-8 pb-6 overflow-x-auto">
                    {CATEGORIES.map((cat) => (
                        <button 
                            key={cat.key} 
                            onClick={() => {
                                setSelectedCategory(cat.key);
                                setShowResults(false);
                            }}
                            className={`flex flex-col items-center p-2 transition-all duration-300 outline-none flex-shrink-0 ${
                                selectedCategory === cat.key 
                                    ? 'text-red-500 border-b-2 border-red-500 scale-110' 
                                    : 'text-white hover:text-gray-400'
                            }`}
                        >
                            <cat.icon className="w-8 h-8 md:w-10 md:h-10 mb-2" /> 
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-tight">{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* --- BUDGET RANGE --- */}
                <div className="text-center mb-16">
                    <p className="text-red-500 text-xs font-bold uppercase mb-4 tracking-widest">Budget Range</p>
                    <input 
                        type="range" 
                        min="40000" 
                        max="500000" 
                        step="10000"
                        value={budget} 
                        onChange={(e) => {
                            setBudget(e.target.value);
                            setShowResults(false);
                        }}
                        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600 mb-4"
                    />
                    <p className="text-xl font-black text-white mb-6">{formatCurrency(budget)}</p>
                    <button 
                        onClick={() => {
                            setShowResults(true);
                            setTimeout(() => {
                                window.scrollBy({ top: 300, behavior: 'smooth' });
                            }, 100);
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-md text-sm transition-all uppercase cursor-pointer"
                    >
                        Find My PC
                    </button>
                </div>

                {/* --- PRODUCT GRID --- */}
                {showResults && (
                <div ref={productsRef} className="space-y-6">
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
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm text-gray-500 line-through">{formatCurrency(product.oldPrice)}</span>
                                            <span className="text-1xl font-black text-red-500">{product.displayPrice}</span>
                                        </div>
                                        <p className="text-xs font-bold text-white uppercase">
                                            Save <span className="text-red-500">{formatCurrency(product.savings)}</span> 
                                            <span className="ml-2 text-red-500">({product.discount})</span>
                                        </p>
                                    </div>
                                    <div className="flex space-x-3 w-full sm:w-auto">
                                        <button onClick={() => setSelectedProduct(product)} className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold uppercase rounded-md bg-gray-600 hover:bg-gray-700 text-white transition-all cursor-pointer">PC Info</button>
                                        <button onClick={() => handleAddToCart(product)} className="flex-1 sm:flex-none px-6 py-2 text-xs font-bold uppercase rounded-md bg-red-500 hover:bg-red-600 text-white transition-all cursor-pointer">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                )}
            </div>

            {/* --- FLOATING CONTACT --- */}
            <div className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4">
                <a href="https://wa.me/" className="bg-[#25D366] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform"><MessageCircle className="h-6 w-6" /></a>
                <a href="tel:+916369933507" className="bg-blue-600 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform"><Phone className="h-6 w-6" /></a>
            </div>

            {/* --- PC INFO MODAL --- */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-2 sm:p-4">
                    <div className="bg-black text-white rounded-xl max-w-4xl w-full relative border border-red-500 overflow-hidden max-h-[95vh] overflow-y-auto">
                        
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedProduct(null)} 
                            className="absolute top-3 right-3 sm:top-6 sm:right-6 text-white hover:text-red-500 transition-all text-xl sm:text-2xl z-10 cursor-pointer"
                        >
                            ✕
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Product Image */}
                            <div className="md:w-1/2 bg-black p-4 sm:p-6 flex items-center justify-center">
                                <img 
                                    src={selectedProduct.image} 
                                    alt={selectedProduct.name} 
                                    className="w-full h-48 sm:h-64 object-contain" 
                                />
                            </div>
                            
                            {/* Product Details */}
                            <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-between">
                                {/* Header */}
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-red-500 mb-2">{selectedProduct.name}</h2>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{selectedProduct.specs}</p>
                                    
                                    {/* Features */}
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
                                
                                {/* Price & Button */}
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
        </section>
    );
};

export default PrebuiltsHone;