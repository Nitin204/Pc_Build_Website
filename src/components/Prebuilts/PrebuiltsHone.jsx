
import React, { useState, useMemo, useRef, useEffect } from 'react';
import axios from 'axios';
import { MessageCircle, Phone } from 'lucide-react';
import { FaGamepad, FaRobot, FaBuilding, FaCamera, FaChartLine } from 'react-icons/fa';
import { PRODUCT_TYPES, getUserId } from '../../constants';

const API_URL = 'https://pc-build-websiteabackend-2.onrender.com/api/prebuilts';

const CATEGORIES = [
    { label: "Gaming", key: "GAMING", icon: FaGamepad },
    { label: "AI/ML", key: "AI/ML", icon: FaRobot },
    { label: "Architecture", key: "ARCHITECTURE", icon: FaBuilding },
    { label: "Editing", key: "EDITING", icon: FaCamera },
    { label: "Trading", key: "TRADING", icon: FaChartLine },
];

const PrebuiltsHone = () => {
    const [selectedCategory, setSelectedCategory] = useState('GAMING');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [budget, setBudget] = useState(250000);
    const [showResults, setShowResults] = useState(false);
    const [products, setProducts] = useState([]);
    const [showStockAlert, setShowStockAlert] = useState(false);
    const productsRef = useRef(null);

    // --- Fetch ALL products from backend ---
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(API_URL); // get all products
                setProducts(res.data);
            } catch (err) {
                console.error("Failed to fetch builds:", err);
            }
        };
        fetchProducts();
    }, []);

    // Filter by category & budget
    const filteredProducts = useMemo(() => {
        return products.filter(product => 
            product.category === selectedCategory && product.price <= budget
        );
    }, [products, selectedCategory, budget]);

  const handleAddToCart = async (product) => {
  try {
    const userId = getUserId();

    if (!userId) {
      alert("Please login first");
      return;
    }

    // Check if quantity is 0 - show stock alert
    if (product.quantity === 0) {
      setShowStockAlert(true);
      return;
    }

    const cartItem = {
      userId: userId,
      productId: product.id,
      productType: PRODUCT_TYPES.PREBUILT,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    };

    await axios.post(
      "https://pc-build-websiteabackend-2.onrender.com/api/cart/add",
      cartItem
    );

    window.dispatchEvent(new Event("cartUpdated"));
    alert("Added to cart ✅");

  } catch (err) {
    console.error("Add to cart failed:", err);
    const errorMsg = err.response?.data || "Add to cart failed ❌";
    alert(errorMsg);
  }
};



    const formatCurrency = (amount) => `₹ ${new Intl.NumberFormat('en-IN').format(amount)}/-`;

    return (
        <section className="py-24 px-4 bg-black text-white min-h-screen">
            <div className="mx-auto w-full max-w-2xl">
                <h2 className="text-3xl font-bold text-center text-red-500 mb-14 uppercase tracking-wider">
                    Pre-Builts
                </h2>

                {/* Category Tabs */}
                <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 mb-8 pb-6 overflow-x-auto">
                    {CATEGORIES.map((cat) => (
                        <button 
                            key={cat.key} 
                            onClick={() => { setSelectedCategory(cat.key); setShowResults(false); }}
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

                {/* Budget & Find - Middle Position */}
                <div className="text-center mb-16">
                    <style>
                        {`
                        input[type="range"]::-webkit-slider-thumb {
                            appearance: none;
                            height: 20px;
                            width: 20px;
                            border-radius: 50%;
                            background: #ef4444;
                            cursor: pointer;
                            border: 2px solid #ffffff;
                            box-shadow: 0 0 0 1px #ef4444;
                        }
                        input[type="range"]::-moz-range-thumb {
                            height: 20px;
                            width: 20px;
                            border-radius: 50%;
                            background: #ef4444;
                            cursor: pointer;
                            border: 2px solid #ffffff;
                            box-shadow: 0 0 0 1px #ef4444;
                        }
                        `}
                    </style>
                    <input 
                        type="range" 
                        min="6000" 
                        max="600000" 
                        step="1000"
                        value={budget} 
                        onChange={(e) => { setBudget(e.target.value); setShowResults(false); }}
                        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600 mb-4"
                    />
                    <p className="text-xl font-black text-white mb-6">{formatCurrency(budget)}</p>
                    <button 
                        onClick={() => { setShowResults(true); window.scrollBy({ top: 300, behavior: 'smooth' }); }}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-md text-sm transition-all uppercase cursor-pointer"
                    >
                        Find My PC
                    </button>
                </div>

                {/* Product Grid */}
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
                                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{product.specs}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-gray-800/50 gap-4">
                                    <span className="text-red-500 font-bold text-1xl">{formatCurrency(product.price)}</span>
                                    <span className="text-gray-400 line-through text-xs">{formatCurrency(product.originalPrice)}</span>
                                    <p className="text-red-500 text-xs font-bold">
                                        SAVE: {formatCurrency(product.originalPrice - product.price)}
                                    </p>
                                    <button 
                                        onClick={() => handleAddToCart(product)}
                                        className={`flex-1 sm:flex-none px-6 py-2 text-xs font-bold uppercase rounded-md transition-all ${
                                            product.quantity === 0 
                                                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                                                : 'bg-red-500 hover:bg-red-600 text-white cursor-pointer'
                                        }`}
                                        disabled={product.quantity === 0}
                                    >
                                        {product.quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                )}
            </div>
             <div className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4">
                            <a href="https://wa.me/" className="bg-[#25D366] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform"><MessageCircle className="h-6 w-6" /></a>
                            <a href="tel:+916369933507" className="bg-blue-600 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform"><Phone className="h-6 w-6" /></a>
                        </div>

            {/* Stock Alert Modal */}
            {showStockAlert && (
                <div className="fixed inset-0 bg-black/90 z-[110] flex items-center justify-center p-4">
                    <div className="bg-black border-2 border-red-500 rounded-xl p-6 max-w-sm w-full text-center">
                        <div className="text-red-500 text-4xl mb-4">⚠️</div>
                        <h3 className="text-xl font-bold text-white mb-2">Stock Not Available</h3>
                        <p className="text-gray-400 text-sm mb-6">This product is currently out of stock. Please check back later.</p>
                        <button 
                            onClick={() => setShowStockAlert(false)}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-all uppercase text-sm"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

            {/* Product Info Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
                    <div className="bg-black text-white rounded-xl max-w-4xl w-full relative border border-red-500 overflow-hidden max-h-[95vh] overflow-y-auto">
                        <button 
                            onClick={() => setSelectedProduct(null)} 
                            className="absolute top-6 right-6 text-white hover:text-red-500 transition-all text-2xl z-10 cursor-pointer"
                        >
                            ✕
                        </button>

                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 bg-black p-6 flex items-center justify-center">
                                <img 
                                    src={selectedProduct.image} 
                                    alt={selectedProduct.name} 
                                    className="w-full h-64 object-contain" 
                                />
                            </div>
                            
                            <div className="md:w-1/2 p-6 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-red-500 mb-2">{selectedProduct.name}</h2>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{selectedProduct.specs}</p>
                                    
                                    <div className="space-y-3 mb-4">
                                        <div className="border-l-4 border-red-500 pl-3">
                                            <h4 className="text-xs uppercase font-bold text-gray-500 mb-1">CATEGORY</h4>
                                            <p className="text-white text-sm">{selectedProduct.category}</p>
                                        </div>
                                        
                                        <div className="border-l-4 border-red-500 pl-3">
                                            <h4 className="text-xs uppercase font-bold text-gray-500 mb-1">WARRANTY</h4>
                                            <p className="text-white text-sm">1 Year manufacturer warranty</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="mb-4">
                                        <span className="text-3xl font-bold text-white">{formatCurrency(selectedProduct.price)}</span>
                                        {selectedProduct.originalPrice && (
                                            <div className="mt-1">
                                                <span className="text-gray-500 line-through text-sm mr-2">{formatCurrency(selectedProduct.originalPrice)}</span>
                                                <span className="text-red-500 text-sm font-bold">Save {formatCurrency(selectedProduct.originalPrice - selectedProduct.price)}</span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <button 
                                        onClick={() => { handleAddToCart(selectedProduct); setSelectedProduct(null); }}
                                        className={`w-full font-bold py-3 rounded-lg transition-all uppercase text-sm ${
                                            selectedProduct.quantity === 0
                                                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                                : 'bg-red-500 hover:bg-red-600 text-white cursor-pointer'
                                        }`}
                                        disabled={selectedProduct.quantity === 0}
                                    >
                                        {selectedProduct.quantity === 0 ? 'OUT OF STOCK' : 'ADD TO CART'}
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
