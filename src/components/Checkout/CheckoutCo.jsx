import React, { useState, useEffect } from 'react';

const CheckoutCo = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(savedCart);
    }, []);

    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => {
            const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price;
            return sum + (price * (item.quantity || 1));
        }, 0);
    };

    const calculatePlatformFee = () => {
        return Math.round(calculateSubtotal() * 0.02);
    };

    const calculateGrandTotal = () => {
        return calculateSubtotal() + calculatePlatformFee();
    };

    return (
        <section className="pt-20 md:pt-32 pb-10 md:pb-20 px-2 md:px-4 bg-black min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-xl md:text-3xl font-bold text-red-500 mb-4 md:mb-6 text-center">Checkout</h2>
                
                {/* Order Summary */}
                <div className="bg-gray-950 p-3 md:p-6 rounded-lg border border-gray-700 mb-4 md:mb-6">
                    <h3 className="text-base md:text-lg font-bold text-red-500 mb-3 md:mb-4">Order Summary</h3>
                    
                    <div className="space-y-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center p-3 md:p-4 bg-gray-800 rounded border border-gray-600 space-y-3 sm:space-y-0">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded mr-0 sm:mr-4 flex items-center justify-center overflow-hidden flex-shrink-0">
                                    {item.image ? (
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <div className="text-2xl">🖥️</div>
                                    )}
                                </div>
                                <div className="flex-grow w-full sm:w-auto">
                                    <h4 className="text-sm sm:text-base text-white font-medium">{item.name}</h4>
                                    <p className="text-xs text-gray-400 mb-2">{item.specs}</p>
                                    <div className="flex flex-col sm:flex-row sm:justify-between space-y-1 sm:space-y-0 mt-2">
                                        <span className="text-xs sm:text-sm text-white">Price: ₹{((typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price)).toLocaleString()}/-</span>
                                        <span className="text-xs sm:text-sm text-red-500">Subtotal: ₹{((typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price) * (item.quantity || 1)).toLocaleString()}/-</span>
                                    </div>
                                    <div className="text-xs sm:text-sm text-white mt-1">Qty: {item.quantity || 1}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                    {/* Delivery Address */}
                    <div className="bg-gray-950 p-3 md:p-6 rounded-lg border border-gray-700">
                        <h3 className="text-base md:text-lg font-bold text-red-500 mb-3 md:mb-4">Select Delivery Address</h3>
                        
                       
                        
                        <button className="mt-3 md:mt-4 bg-red-600 hover:bg-red-700 text-white px-3 md:px-4 py-2 rounded transition duration-300 text-sm md:text-base w-full sm:w-auto">
                            Add a New Address
                        </button>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-gray-950 p-3 md:p-6 rounded-lg border border-gray-700">
                        <div className="space-y-2 text-xs md:text-sm">
                            <div className="flex flex-col sm:flex-row sm:justify-between text-white">
                                <span>Total Before Coupon:</span>
                                <span className="font-medium">₹{calculateSubtotal().toLocaleString()}/-</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between text-white">
                                <span>Coupon Value:</span>
                                <span className="font-medium">Not Applicable</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between text-white">
                                <span>Total After Coupon:</span>
                                <span className="font-medium">₹{calculateSubtotal().toLocaleString()}/-</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between text-white">
                                <span>Platform Fee (2%):</span>
                                <span className="font-medium">₹{calculatePlatformFee().toLocaleString()}/-</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between text-white font-bold border-t border-gray-600 pt-2 mt-2">
                                <span>Grand Total:</span>
                                <span className="text-red-500 text-base md:text-lg">₹{calculateGrandTotal().toLocaleString()}/-</span>
                            </div>
                        </div>
                        
                        <p className="text-xs text-gray-400 mt-3 md:mt-4 leading-relaxed">
                            Platform Fee (2%) can be waived by paying via UPI, Net Banking, or Cash. Contact +91-63699-33507 for assistance.
                        </p>
                    </div>

                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 md:py-4 rounded-lg transition duration-300 text-sm md:text-base">
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CheckoutCo;