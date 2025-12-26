import React, { useState, useEffect } from 'react';

const CardCo = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(savedCart);
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        
        // Trigger custom event to update navbar count
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const updateQuantity = (index, change) => {
        const updatedCart = [...cartItems];
        const currentQty = updatedCart[index].quantity || 1;
        const newQty = currentQty + change;
        
        if (newQty <= 0) {
            // Remove item if quantity becomes 0
            removeFromCart(index);
        } else {
            updatedCart[index].quantity = newQty;
            setCartItems(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };

    return (
        <section className="pt-32 pb-20 px-4 bg-black min-h-screen">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                
                {/* Cart Items - Left Side */}
                <div className="lg:w-2/3 bg-gray-950 p-8 rounded-lg border border-red-500 shadow-xl">
                
                <h2 className="text-2xl font-bold text-red-500 mb-6">
                    My Cart ({cartItems.length} items)
                </h2>
                
                {cartItems.length === 0 ? (
                    <p className="text-lg text-gray-300 font-medium">
                        No Items in Cart!
                    </p>
                ) : (
                    <div className="space-y-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row p-6 bg-gray-900 rounded-lg space-y-4 md:space-y-0 md:space-x-6">
                                {/* Product Image */}
                                <div className="w-full md:w-32 h-32 bg-black rounded-lg overflow-hidden flex-shrink-0 cursor-pointer">
                                    {item.image ? (
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-xs text-gray-400">No Image</div>
                                    )}
                                </div>
                                
                                {/* Product Details */}
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                                    <p className="text-sm text-white leading-relaxed mb-3">{item.specs}</p>
                                    <div className="space-y-1">
                                        <p className="text-lg text-gray-300">Price: {typeof item.displayPrice === 'string' ? item.displayPrice : `₹${item.price}/-`}</p>
                                        <p className="text-2xl font-semibold text-red-500">Subtotal: ₹{((typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price) * (item.quantity || 1)).toLocaleString()}/-</p>
                                    </div>
                                    
                                    {/* Quantity Controls */}
                                    <div className="flex items-center mt-3 space-x-3">
                                        <span className="text-white font-medium">Qty:</span>
                                        <button 
                                            onClick={() => updateQuantity(index, -1)}
                                            className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="text-white font-bold text-lg min-w-[2rem] text-center">{item.quantity || 1}</span>
                                        <button 
                                            onClick={() => updateQuantity(index, 1)}
                                            className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Remove Button */}
                                <div className="flex md:flex-col justify-end items-end">
                                    <button 
                                        onClick={() => removeFromCart(index)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold transition duration-300 cursor-pointer"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
                </div>

                {/* Checkout Section - Right Side */}
                <div className="lg:w-1/3 bg-gray-950 p-6 rounded-lg border border-red-500 shadow-xl h-fit">
                    <h3 className="text-xl font-bold text-red-500 mb-4">Order Summary</h3>
                    
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-gray-300">
                            <span>Subtotal ({cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)} items):</span>
                            <span>₹{cartItems.reduce((sum, item) => {
                                const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price;
                                return sum + (price * (item.quantity || 1));
                            }, 0).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                            <span>GST (18%):</span>
                            <span>₹{Math.round(cartItems.reduce((sum, item) => {
                                const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price;
                                return sum + (price * (item.quantity || 1));
                            }, 0) * 0.18).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-gray-300">
                            <span>Shipping:</span>
                            <span className="text-green-500">FREE</span>
                        </div>
                        <hr className="border-gray-700" />
                        <div className="flex justify-between text-xl font-bold text-white">
                            <span>Total:</span>
                            <span className="text-red-500">₹{Math.round(cartItems.reduce((sum, item) => {
                                const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price;
                                return sum + (price * (item.quantity || 1));
                            }, 0) * 1.18).toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <a href="/checkout"><button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300 mb-3 cursor-pointer">
                        Proceed to Checkout
                    </button></a>
                    
                    <a href="/orderhistory"><button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-lg transition duration-300 mb-2 cursor-pointer">
                        Order History
                    </button></a>
                    
                    <a href="/orderdetails"><button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition duration-300 cursor-pointer">
                        Track Order
                    </button></a>
                    
                   
                </div>
            </div>
        </section>
    );
};

export default CardCo;