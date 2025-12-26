import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
        setOrders(savedOrders);
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered': return 'text-green-500';
            case 'Shipped': return 'text-blue-500';
            case 'Processing': return 'text-yellow-500';
            case 'Cancelled': return 'text-red-500';
            default: return 'text-gray-400';
        }
    };

    return (
        <div className="pt-32 pb-20 px-4 bg-black min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-red-500 mb-8">Order History</h2>
                
                {orders.length === 0 ? (
                    <div className="bg-gray-950 p-8 rounded-lg border border-red-500 text-center">
                        <p className="text-gray-300 text-lg">No orders found</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div key={order.id} className="bg-gray-950 p-6 rounded-lg border border-red-500">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Order #{order.id}</h3>
                                        <p className="text-gray-400">Placed on {order.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className={`font-bold ${getStatusColor(order.status)}`}>{order.status}</p>
                                        <p className="text-white font-bold">₹{order.total.toLocaleString()}</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    {order.items.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-4 p-3 bg-gray-900 rounded">
                                            <div className="w-16 h-16 bg-black rounded overflow-hidden">
                                                {item.image && (
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
                                                )}
                                            </div>
                                            <div className="flex-grow">
                                                <p className="text-white font-medium">{item.name}</p>
                                                <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                                            </div>
                                            <p className="text-red-500 font-bold">₹{item.price.toLocaleString()}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderHistory;