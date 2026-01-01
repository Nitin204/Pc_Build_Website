import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        // Force check localStorage
        const userData = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        
        if (userData && token) {
            try {
                const parsedUser = JSON.parse(userData);
                setUser(parsedUser);
                setEditData({
                    name: parsedUser.firstName || parsedUser.name || '',
                    email: parsedUser.email || '',
                    phone: parsedUser.phone || '',
                    dob: parsedUser.dob || '',
                    gender: parsedUser.gender || '',
                    gst: parsedUser.gst || ''
                });
            } catch (error) {
                console.error('Error parsing user data:', error);
            }
        }
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            await axios.put(
                `http://localhost:8080/api/user/update/${user.email}`,
                editData
            );
            
            const updatedUser = {
                ...user,
                name: editData.name,
                firstName: editData.name,
                email: editData.email,
                phone: editData.phone,
                dob: editData.dob,
                gender: editData.gender,
                gst: editData.gst
            };
            
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);
            setIsEditing(false);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset edit data
        setEditData({
            name: user.firstName || user.name || '',
            email: user.email || '',
            phone: user.phone || '',
            dob: user.dob || '',
            gender: user.gender || '',
            gst: user.gst || ''
        });
    };

    const handleInputChange = (field, value) => {
        setEditData(prev => ({ ...prev, [field]: value }));
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    if (!user) {
        return (
            <div className="pt-32 pb-20 px-4 bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white mb-4">Please login to view profile</p>
                    <Link to="/account" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                        Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 px-4 bg-black min-h-screen">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                
                {/* Left Sidebar */}
                <div className="w-full lg:w-80 bg-gray-950 p-6 rounded-lg border border-red-500 h-fit">
                    {/* Welcome Section */}
                    <div className="bg-gray-900 p-4 rounded-lg border border-red-500 mb-6">
                        <h2 className="text-red-500 font-bold text-lg mb-2">Welcome!</h2>
                        <p className="text-white font-medium">{user.firstName || user.name || 'User'}</p>
                        <p className="text-gray-400 text-sm">{user.email || 'No email provided'}</p>
                    </div>

                    {/* Menu Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 mb-6">
                        <Link to="/profile" className="flex items-center text-red-500 font-medium py-2 px-3 bg-gray-800 rounded hover:bg-gray-700">
                            <i className="fa-solid fa-user mr-3"></i> My Profile
                        </Link>
                        <Link to="/orderhistory" className="flex items-center text-red-500 font-medium py-2 px-3 hover:bg-gray-800 rounded">
                            <i className="fa-solid fa-box mr-3"></i> My Orders
                        </Link>
                        <Link to="/orderdetails" className="flex items-center text-red-500 font-medium py-2 px-3 hover:bg-gray-800 rounded">
                            <i className="fa-solid fa-ticket mr-3"></i>Track Order
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
                <div className="flex-1 bg-gray-950 p-4 sm:p-6 rounded-lg border border-red-500">
                    <h2 className="text-red-500 font-bold text-xl sm:text-2xl mb-6">My Profile</h2>
                    
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <div className="flex items-center mb-2 sm:mb-0">
                                <i className="fa-solid fa-user text-red-500 mr-3"></i>
                                <span className="text-red-500 font-medium">Name:</span>
                            </div>
                            {isEditing ? (
                                <input 
                                    type="text" 
                                    value={editData.name} 
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    className="sm:ml-2 bg-gray-800 text-white px-2 py-1 rounded w-full sm:w-auto"
                                />
                            ) : (
                                <span className="text-white sm:ml-2">{user.firstName || user.name || 'Not Set'}</span>
                            )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <div className="flex items-center mb-2 sm:mb-0">
                                <i className="fa-solid fa-calendar text-red-500 mr-3"></i>
                                <span className="text-red-500 font-medium">Date of Birth:</span>
                            </div>
                            {isEditing ? (
                                <input 
                                    type="date" 
                                    value={editData.dob} 
                                    onChange={(e) => handleInputChange('dob', e.target.value)}
                                    className="sm:ml-2 bg-gray-800 text-white px-2 py-1 rounded w-full sm:w-auto"
                                />
                            ) : (
                                <span className="text-white sm:ml-2">{user.dob || 'Not Set'}</span>
                            )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <div className="flex items-center mb-2 sm:mb-0">
                                <i className="fa-solid fa-venus-mars text-red-500 mr-3"></i>
                                <span className="text-red-500 font-medium">Gender:</span>
                            </div>
                            {isEditing ? (
                                <select 
                                    value={editData.gender} 
                                    onChange={(e) => handleInputChange('gender', e.target.value)}
                                    className="sm:ml-2 bg-gray-800 text-white px-2 py-1 rounded w-full sm:w-auto"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            ) : (
                                <span className="text-white sm:ml-2">{user.gender || 'Not Set'}</span>
                            )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <div className="flex items-center mb-2 sm:mb-0">
                                <i className="fa-solid fa-phone text-red-500 mr-3"></i>
                                <span className="text-red-500 font-medium">Phone Number:</span>
                            </div>
                            {isEditing ? (
                                <input 
                                    type="tel" 
                                    value={editData.phone} 
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    className="sm:ml-2 bg-gray-800 text-white px-2 py-1 rounded w-full sm:w-auto"
                                />
                            ) : (
                                <span className="text-white sm:ml-2">{user.phone || 'Not Set'}</span>
                            )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <div className="flex items-center mb-2 sm:mb-0">
                                <i className="fa-solid fa-envelope text-red-500 mr-3"></i>
                                <span className="text-red-500 font-medium">Email:</span>
                            </div>
                            {isEditing ? (
                                <input 
                                    type="email" 
                                    value={editData.email} 
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className="sm:ml-2 bg-gray-800 text-white px-2 py-1 rounded w-full sm:w-auto"
                                />
                            ) : (
                                <span className="text-white sm:ml-2">{user.email || 'Not Set'}</span>
                            )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <div className="flex items-center mb-2 sm:mb-0">
                                <i className="fa-solid fa-file-invoice text-red-500 mr-3"></i>
                                <span className="text-red-500 font-medium">GST Number:</span>
                            </div>
                            {isEditing ? (
                                <input 
                                    type="text" 
                                    value={editData.gst} 
                                    onChange={(e) => handleInputChange('gst', e.target.value)}
                                    className="sm:ml-2 bg-gray-800 text-white px-2 py-1 rounded w-full sm:w-auto"
                                />
                            ) : (
                                <span className="text-white sm:ml-2">{user.gst || 'Not Set'}</span>
                            )}
                        </div>
                    </div>

                    {isEditing ? (
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={handleSave}
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
                            >
                                Save
                            </button>
                            <button 
                                onClick={handleCancel}
                                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button 
                            onClick={handleEdit}
                            className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;