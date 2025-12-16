import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    MessageCircle, 
    Phone,
    Share2 
} from 'lucide-react';
import { FaGamepad, FaRobot, FaBuilding, FaCamera, FaChartLine } from 'react-icons/fa';

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
        image: 'https://placehold.co/400x400/111/white?text=PC+1'
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
        image: 'https://placehold.co/400x400/111/white?text=PC+2'
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
        image: 'https://placehold.co/400x400/111/white?text=AI+PC'
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
        image: 'https://placehold.co/400x400/111/white?text=CAD+PC'
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
        image: 'https://placehold.co/400x400/111/white?text=Edit+PC'
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
        image: 'https://placehold.co/400x400/111/white?text=Trade+PC'
    }
];

const CATEGORIES = [
    { label: "Gaming", key: "gaming", icon: FaGamepad },
    { label: "AI/ML", key: "ai", icon: FaRobot },
    { label: "Architecture", key: "architecture", icon: FaBuilding },
    { label: "Editing", key: "editing", icon: FaCamera },
    { label: "Trading", key: "trading", icon: FaChartLine },
];

const PreBuilts1 = () => {
    const [selectedCategory, setSelectedCategory] = useState('gaming');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    const filteredProducts = useMemo(() => {
        return PREBUILT_DATA.filter(product => product.category === selectedCategory);
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
        alert(`${product.name} added to cart!`);
    };

    const formatCurrency = (amount) => `₹ ${new Intl.NumberFormat('en-IN').format(amount)}/-`;

    return (
        <section className="py-24 px-4 bg-black text-white min-h-screen">
            <div className="mx-auto w-full max-w-2xl">
                <h2 className="text-3xl font-bold text-center text-red-500 mb-14 uppercase tracking-wider">
                    Pre-Builts
                </h2>

                {/* --- CATEGORY TABS --- */}
                <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 mb-16 pb-6 overflow-x-auto">
                    {CATEGORIES.map((cat) => (
                        <button 
                            key={cat.key} 
                            onClick={() => setSelectedCategory(cat.key)}
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
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm text-gray-500 line-through">{formatCurrency(product.oldPrice)}</span>
                                            <span className="text-2xl font-black text-red-500">{product.displayPrice}</span>
                                        </div>
                                        <p className="text-xs font-bold text-white uppercase">
                                            Save <span className="text-red-500">{formatCurrency(product.savings)}</span> 
                                            <span className="ml-2 text-red-500">({product.discount})</span>
                                        </p>
                                    </div>
                                    <div className="flex space-x-3 w-full sm:w-auto">
                                        <button onClick={() => setSelectedProduct(product)} className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold uppercase rounded-md bg-gray-600 hover:bg-gray-700 text-white transition-all cursor-pointer">PC Info</button>
                                        <button onClick={() => handleAddToCart(product)} className="flex-1 sm:flex-none px-6 py-2 text-xs font-bold uppercase rounded-md bg-red-600 hover:bg-red-700 text-white transition-all">Add to Cart</button>
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

            {/* --- RESPONSIVE MODAL --- */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                    <div className="bg-[#0a0a0a] text-white rounded-lg shadow-2xl max-w-2xl w-full relative border border-red-500 max-h-[90vh] flex flex-col">
                        
                        <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-all text-3xl z-10 p-2 cursor-pointer">&times;</button>

                        <div className="overflow-y-auto p-6 md:p-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/2 flex items-center justify-center bg-black rounded-xl p-4 border border-gray-900">
                                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-48 md:h-64 object-contain" />
                                </div>
                                
                                <div className="md:w-1/2 flex flex-col">
                                    <h3 className="text-2xl font-bold text-red-500 mb-2">{selectedProduct.name}</h3>
                                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">{selectedProduct.specs}</p>
                                    
                                    <div className="grid grid-cols-1 gap-3 mb-8">
                                        {[
                                            { label: 'Performance', val: 'High-end gaming & professional workloads' },
                                            { label: 'Warranty', val: '3 Year comprehensive warranty' },
                                            { label: 'Support', val: '24/7 technical support included' }
                                        ].map((item, i) => (
                                            <div key={i} className="border-l-2 border-red-500 pl-3 bg-gray-900/30 py-2">
                                                <h4 className="text-[10px] uppercase font-black text-gray-500 mb-1">{item.label}</h4>
                                                <p className="text-xs text-white">{item.val}</p>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-auto flex flex-col gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm text-gray-500 line-through">{formatCurrency(selectedProduct.oldPrice)}</span>
                                                <span className="text-3xl font-black text-white">{selectedProduct.displayPrice}</span>
                                            </div>
                                            <p className="text-xs font-bold text-white uppercase">
                                                Save <span className="text-red-500">{formatCurrency(selectedProduct.savings)}</span> 
                                                <span className="ml-2 text-red-500">({selectedProduct.discount})</span>
                                            </p>
                                        </div>
                                        <button 
                                            onClick={() => { handleAddToCart(selectedProduct); setSelectedProduct(null); }}
                                            className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-lg transition duration-300 uppercase tracking-widest text-xs shadow-lg shadow-red-600/20 cursor-pointer"
                                        >
                                             Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PreBuilts1;