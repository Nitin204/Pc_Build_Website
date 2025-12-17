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
        <section className="pt-32 pb-20 px-4 bg-black min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-red-500 mb-6">Checkout</h2>
                
                {/* Order Summary */}
                <div className="bg-gray-950 p-6 rounded-lg border border-gray-700 mb-6">
                    <h3 className="text-lg font-bold text-red-500 mb-4">Order Summary</h3>
                    
                    <div className="space-y-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex items-center p-4 bg-gray-800 rounded border border-gray-600">
                                <div className="w-16 h-16 bg-black rounded mr-4 flex items-center justify-center overflow-hidden">
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
                                <div className="flex-grow">
                                    <h4 className="text-white font-medium">{item.name}</h4>
                                    <p className="text-xs text-gray-400">{item.specs}</p>
                                    <div className="flex justify-between mt-2">
                                        <span className="text-white">Price: ₹{((typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price)).toLocaleString()}/-</span>
                                        <span className="text-red-500">Subtotal: ₹{((typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price) * (item.quantity || 1)).toLocaleString()}/-</span>
                                    </div>
                                    <div className="text-white mt-1">Qty: {item.quantity || 1}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Delivery Address */}
                    <div className="bg-gray-950 p-6 rounded-lg border border-gray-700">
                        <h3 className="text-lg font-bold text-red-500 mb-4">Select Delivery Address</h3>
                        
                       
                        
                        <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300">
                            Add a New Address
                        </button>
                    </div>

                    {/* Payment Summary */}
                    <div className="bg-gray-950 p-6 rounded-lg border border-gray-700">
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-white">
                                <span>Total Before Coupon: ₹{calculateSubtotal().toLocaleString()}/-</span>
                            </div>
                            <div className="flex justify-between text-white">
                                <span>Coupon Value: Not Applicable</span>
                            </div>
                            <div className="flex justify-between text-white">
                                <span>Total After Coupon: ₹{calculateSubtotal().toLocaleString()}/-</span>
                            </div>
                            <div className="flex justify-between text-white">
                                <span>Platform Fee (2%): ₹{calculatePlatformFee().toLocaleString()}/-</span>
                            </div>
                            <div className="flex justify-between text-white font-bold">
                                <span>Grand Total: ₹{calculateGrandTotal().toLocaleString()}/-</span>
                            </div>
                        </div>
                        
                        <p className="text-xs text-gray-400 mt-4">
                            Platform Fee (2%) can be waived by paying via UPI, Net Banking, or Cash. Contact +91-63699-33507 for assistance.
                        </p>
                    </div>

                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300">
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CheckoutCo;