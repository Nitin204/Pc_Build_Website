import React, { useState, useEffect } from 'react';

const OrderStatus = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
        setAllOrders(savedOrders);
    }, []);

    const getProgressSteps = (status) => {
        const steps = ['Order Placed', 'Processing', 'Shipped', 'Delivered'];
        const currentIndex = steps.findIndex(step => 
            step.toLowerCase().includes(status.toLowerCase())
        );
        return steps.map((step, index) => ({
            name: step,
            completed: index <= currentIndex,
            current: index === currentIndex
        }));
    };

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
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-red-500 mb-8">Order Status</h2>
                
                {allOrders.length === 0 ? (
                    <div className="bg-gray-950 p-8 rounded-lg border border-red-500 text-center">
                        <p className="text-gray-300 text-lg">No orders found</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {allOrders.map((order) => (
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

                                <div className="mb-6">
                                    <div className="flex justify-between items-center">
                                        {getProgressSteps(order.status).map((step, index) => (
                                            <div key={index} className="flex flex-col items-center flex-1">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                    step.completed ? 'bg-green-500' : 
                                                    step.current ? 'bg-yellow-500' : 'bg-gray-600'
                                                }`}>
                                                    {step.completed ? '✓' : index + 1}
                                                </div>
                                                <p className={`text-sm mt-2 ${
                                                    step.completed ? 'text-green-500' : 
                                                    step.current ? 'text-yellow-500' : 'text-gray-400'
                                                }`}>
                                                    {step.name}
                                                </p>
                                                {index < 3 && (
                                                    <div className={`h-1 w-full mt-4 ${
                                                        step.completed ? 'bg-green-500' : 'bg-gray-600'
                                                    }`} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <h4 className="text-lg font-bold text-white">Order Items:</h4>
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

export default OrderStatus;