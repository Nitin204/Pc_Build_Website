import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    if (!user) {
        return (
            <div className="pt-32 pb-20 px-4 bg-black min-h-screen flex items-center justify-center">
                <p className="text-white">Please login to view profile</p>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 px-4 bg-black min-h-screen">
            <div className="max-w-6xl mx-auto flex gap-8">
                
                {/* Left Sidebar */}
                <div className="w-80 bg-gray-950 p-6 rounded-lg border border-red-500 h-fit">
                    {/* Welcome Section */}
                    <div className="bg-gray-900 p-4 rounded-lg border border-red-500 mb-6">
                        <h2 className="text-red-500 font-bold text-lg mb-2">Welcome!</h2>
                        <p className="text-white font-medium">{user.firstName || user.name || 'User'}</p>
                        <p className="text-gray-400 text-sm">{user.email || 'No email provided'}</p>
                    </div>

                    {/* Menu Items */}
                    <div className="space-y-3 mb-6">
                        <Link to="/profile" className="flex items-center text-red-500 font-medium py-2 px-3 bg-gray-800 rounded hover:bg-gray-700">
                            <i className="fa-solid fa-user mr-3"></i> My Profile
                        </Link>
                        <Link to="/order-history" className="flex items-center text-red-500 font-medium py-2 px-3 hover:bg-gray-800 rounded">
                            <i className="fa-solid fa-box mr-3"></i> My Orders
                        </Link>
                        <Link to="/addresses" className="flex items-center text-red-500 font-medium py-2 px-3 hover:bg-gray-800 rounded">
                            <i className="fa-solid fa-map-marker-alt mr-3"></i> My Addresses
                        </Link>
                        <Link to="/coupons" className="flex items-center text-red-500 font-medium py-2 px-3 hover:bg-gray-800 rounded">
                            <i className="fa-solid fa-ticket mr-3"></i> My Coupons
                        </Link>
                        <Link to="/tickets" className="flex items-center text-red-500 font-medium py-2 px-3 hover:bg-gray-800 rounded">
                            <i className="fa-solid fa-headset mr-3"></i> My Tickets
                        </Link>
                    </div>

                    {/* Logout Button */}
                    <button 
                        onClick={handleLogout}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded flex items-center justify-center"
                    >
                        <i className="fa-solid fa-sign-out-alt mr-2"></i> Logout
                    </button>
                </div>

                {/* Right Content */}
                <div className="flex-1 bg-gray-950 p-6 rounded-lg border border-red-500">
                    <h2 className="text-red-500 font-bold text-2xl mb-6">My Profile</h2>
                    
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <i className="fa-solid fa-user text-red-500 mr-3"></i>
                            <span className="text-red-500 font-medium">Name:</span>
                            <span className="text-white ml-2">{user.firstName || user.name || 'Not Set'}</span>
                        </div>
                        
                        <div className="flex items-center">
                            <i className="fa-solid fa-calendar text-red-500 mr-3"></i>
                            <span className="text-red-500 font-medium">Date of Birth:</span>
                            <span className="text-white ml-2">Not Set</span>
                        </div>
                        
                        <div className="flex items-center">
                            <i className="fa-solid fa-venus-mars text-red-500 mr-3"></i>
                            <span className="text-red-500 font-medium">Gender:</span>
                            <span className="text-white ml-2">Not Set</span>
                        </div>
                        
                        <div className="flex items-center">
                            <i className="fa-solid fa-phone text-red-500 mr-3"></i>
                            <span className="text-red-500 font-medium">Phone Number:</span>
                            <span className="text-white ml-2">Not Set</span>
                        </div>
                        
                        <div className="flex items-center">
                            <i className="fa-solid fa-envelope text-red-500 mr-3"></i>
                            <span className="text-red-500 font-medium">Email:</span>
                            <span className="text-white ml-2">{user.email || 'Not Set'}</span>
                        </div>
                        
                        <div className="flex items-center">
                            <i className="fa-solid fa-file-invoice text-red-500 mr-3"></i>
                            <span className="text-red-500 font-medium">GST Number:</span>
                            <span className="text-white ml-2">Not Set</span>
                        </div>
                    </div>

                    <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;