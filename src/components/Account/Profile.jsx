import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';


const Profile = () => {
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({});
    const [activeSection, setActiveSection] = useState(location.state?.activeSection || 'profile');
    const [addresses, setAddresses] = useState([]);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editingAddressId, setEditingAddressId] = useState(null);
    
    const emptyAddressForm = {
        name: "", phone: "", street: "", city: "", state: "", pincode: ""
    };
    const [addressForm, setAddressForm] = useState(emptyAddressForm);
    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(false);

    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    useEffect(() => {
        const userData = localStorage.getItem('user');
        
        if (userData && token) {
            try {
                const parsedUser = JSON.parse(userData);
                setUser(parsedUser);
                setEditData({
                    firstName: parsedUser.firstName || '',
                    lastName: parsedUser.lastName || '',
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
    }, [token]);

    // Fetch Addresses when the Addresses section is active
   useEffect(() => {
    if (activeSection === 'addresses' && userId) {
        loadAddresses();
    }

    if (activeSection === 'orders' && userId) {
        loadOrders();
    }
}, [activeSection, userId]);

    /* ================= ADDRESS LOGIC ================= */
    const loadAddresses = async () => {
        try {
            const res = await axios.get(`http://localhost:8181/api/address/${userId}`);
            setAddresses(res.data || []);
        } catch (error) {
            console.error("Error loading addresses", error);
        }
    };

    const saveAddress = async () => {
        try {
            if (editingAddressId) {
                await axios.put(`http://localhost:8181/api/address/${editingAddressId}`, { ...addressForm, userId });
            } else {
                await axios.post(`http://localhost:8181/api/address`, { ...addressForm, userId });
            }
            resetAddressForm();
            loadAddresses();
        } catch (error) {
            alert("Error saving address");
        }
    };

    const deleteAddress = async (id) => {
        if (!window.confirm("Delete this address?")) return;
        await axios.delete(`http://localhost:8181/api/address/${id}`);
        loadAddresses();
    };

    const editAddress = (addr) => {
        setEditingAddressId(addr.id);
        setAddressForm({ ...addr });
        setShowAddressForm(true);
    };

    const resetAddressForm = () => {
        setEditingAddressId(null);
        setShowAddressForm(false);
        setAddressForm(emptyAddressForm);
    };

    /* ================= PROFILE LOGIC ================= */
    const handleEdit = () => setIsEditing(true);

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:8181/api/user/update/${user.email}`, editData);
            const updatedUser = { ...user, ...editData };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setUser(updatedUser);
            setIsEditing(false);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditData({
            firstName: user.firstName || '',
            lastName: user.lastName || '',
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
        localStorage.removeItem('userId');
        localStorage.removeItem('cart');
        window.dispatchEvent(new Event('userLoggedOut'));
        window.location.href = '/';
    };

    const loadOrders = async () => {
        try {
            setLoadingOrders(true);
            const res = await axios.get("http://localhost:8181/api/order/user/" + userId);
            setOrders(res.data || []);
        } catch (error) {
            console.error("Error loading orders", error);
        } finally {
            setLoadingOrders(false);
        }
    };

    const cancelOrder = async (orderId) => {
        if (!window.confirm("Cancel this order?")) return;
        try {
            await axios.delete(`http://localhost:8181/api/order/${orderId}`);
            loadOrders();
        } catch (error) {
            alert("Error cancelling order");
        }
    };

    if (!user) {
        return (
            <div className="pt-32 pb-20 px-4 bg-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white mb-4">Please login to view profile</p>
                    <Link to="/account" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Login</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 px-4 bg-black min-h-screen">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* Left Sidebar */}
                <div className="w-full lg:w-80 bg-gray-950 p-6 rounded-lg border border-red-500 h-fit">
                    <div className="bg-gray-900 p-4 rounded-lg border border-red-500 mb-6">
                        <h2 className="text-red-500 font-bold text-lg mb-2">Welcome!</h2>
                        <p className="text-white font-medium">{user.firstName || user.name || 'User'}</p>
                        <p className="text-gray-400 text-sm">{user.email || 'No email provided'}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 mb-6">
                        <button onClick={() => setActiveSection('profile')} className={`flex items-center font-medium py-2 px-3 rounded hover:bg-gray-700 ${activeSection === 'profile' ? 'text-red-500 bg-gray-800' : 'text-red-500'}`}><i className="fa-solid fa-user mr-3"></i> My Profile</button>
                        <button onClick={() => setActiveSection('orders')} className={`flex items-center font-medium py-2 px-3 rounded hover:bg-gray-700 ${activeSection === 'orders' ? 'text-red-500 bg-gray-800' : 'text-red-500'}`}><i className="fa-solid fa-box mr-3"></i> My Orders</button>
                        <button onClick={() => setActiveSection('addresses')} className={`flex items-center font-medium py-2 px-3 rounded hover:bg-gray-700 ${activeSection === 'addresses' ? 'text-red-500 bg-gray-800' : 'text-red-500'}`}><i className="fa-solid fa-map-marker-alt mr-3"></i> My Addresses</button>
                    </div>

                    <button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded flex items-center justify-center">
                        <i className="fa-solid fa-sign-out-alt mr-2"></i> Logout
                    </button>
                </div>

                {/* Right Content */}
                <div className="flex-1 bg-gray-950 p-4 sm:p-6 rounded-lg border border-red-500">
                    {/* PROFILE SECTION */}
                    {activeSection === 'profile' && (
                        <>
                            <h2 className="text-red-500 font-bold text-xl sm:text-2xl mb-6">My Profile</h2>
                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center">
                                    <div className="flex items-center mb-2 sm:mb-0 w-40"><i className="fa-solid fa-user text-red-500 mr-3"></i><span className="text-red-500 font-medium">First Name:</span></div>
                                    {isEditing ? <input type="text" value={editData.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} className="sm:ml-2 bg-gray-800 text-white px-3 py-2 rounded w-full sm:flex-1" /> : <span className="text-white sm:ml-2">{user.firstName || 'Not Set'}</span>}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center">
                                    <div className="flex items-center mb-2 sm:mb-0 w-40"><i className="fa-solid fa-user text-red-500 mr-3"></i><span className="text-red-500 font-medium">Last Name:</span></div>
                                    {isEditing ? <input type="text" value={editData.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} className="sm:ml-2 bg-gray-800 text-white px-3 py-2 rounded w-full sm:flex-1" /> : <span className="text-white sm:ml-2">{user.lastName || 'Not Set'}</span>}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center">
                                    <div className="flex items-center mb-2 sm:mb-0 w-40"><i className="fa-solid fa-envelope text-red-500 mr-3"></i><span className="text-red-500 font-medium">Email:</span></div>
                                    <span className="text-white sm:ml-2">{user.email}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center">
                                    <div className="flex items-center mb-2 sm:mb-0 w-40"><i className="fa-solid fa-phone text-red-500 mr-3"></i><span className="text-red-500 font-medium">Phone:</span></div>
                                    {isEditing ? <input type="text" value={editData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className="sm:ml-2 bg-gray-800 text-white px-3 py-2 rounded w-full sm:flex-1" /> : <span className="text-white sm:ml-2">{user.phone || 'Not Set'}</span>}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center">
                                    <div className="flex items-center mb-2 sm:mb-0 w-40"><i className="fa-solid fa-calendar text-red-500 mr-3"></i><span className="text-red-500 font-medium">DOB:</span></div>
                                    {isEditing ? <input type="date" value={editData.dob} onChange={(e) => handleInputChange('dob', e.target.value)} className="sm:ml-2 bg-gray-800 text-white px-3 py-2 rounded w-full sm:flex-1" /> : <span className="text-white sm:ml-2">{user.dob || 'Not Set'}</span>}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center">
                                    <div className="flex items-center mb-2 sm:mb-0 w-40"><i className="fa-solid fa-venus-mars text-red-500 mr-3"></i><span className="text-red-500 font-medium">Gender:</span></div>
                                    {isEditing ? (
                                        <select value={editData.gender} onChange={(e) => handleInputChange('gender', e.target.value)} className="sm:ml-2 bg-gray-800 text-white px-3 py-2 rounded w-full sm:flex-1">
                                            <option value="">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    ) : <span className="text-white sm:ml-2">{user.gender || 'Not Set'}</span>}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center">
                                    <div className="flex items-center mb-2 sm:mb-0 w-40"><i className="fa-solid fa-file-invoice text-red-500 mr-3"></i><span className="text-red-500 font-medium">GST:</span></div>
                                    {isEditing ? <input type="text" value={editData.gst} onChange={(e) => handleInputChange('gst', e.target.value)} className="sm:ml-2 bg-gray-800 text-white px-3 py-2 rounded w-full sm:flex-1" /> : <span className="text-white sm:ml-2">{user.gst || 'Not Set'}</span>}
                                </div>
                            </div>
                            {isEditing ? (
                                <div className="mt-8 flex gap-4">
                                    <button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">Save</button>
                                    <button onClick={handleCancel} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded">Cancel</button>
                                </div>
                            ) : <button onClick={handleEdit} className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">Edit</button>}
                        </>
                    )}

                    {/* ADDRESSES SECTION */}
{activeSection === 'addresses' && (
    <>
        <h2 className="text-red-500 font-bold text-xl sm:text-2xl mb-6">My Addresses</h2>
        
        <button 
            onClick={() => setShowAddressForm(true)} 
            className="mb-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-bold transition-colors"
        >
            Add A New Address
        </button>

        {showAddressForm && (
            <div className="mb-6 bg-gray-950 p-6 rounded-lg border border-red-500 space-y-3">
                <h3 className="text-red-500 font-bold mb-4">{editingAddressId ? 'Edit' : 'Add'} Address</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["name", "phone", "street", "city", "state", "pincode"].map((field) => (
                        <input
                            key={field}
                            placeholder={field.toUpperCase()}
                            value={addressForm[field]}
                            onChange={(e) => setAddressForm({ ...addressForm, [field]: e.target.value })}
                            className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded text-white focus:border-red-500 outline-none"
                        />
                    ))}
                </div>
                <div className="flex gap-3 pt-4">
                    <button onClick={saveAddress} className="bg-red-500 text-white px-6 py-2 rounded font-bold">SAVE</button>
                    <button onClick={resetAddressForm} className="bg-gray-800 text-white px-6 py-2 rounded font-bold">CANCEL</button>
                </div>
            </div>
        )}

        <div className="space-y-4">
            {addresses.length === 0 && !showAddressForm && (
                <p className="text-gray-400 text-center py-8">No addresses saved</p>
            )}
            
            {addresses.map((a) => (
                <div key={a.id} className="border border-red-900 p-6 rounded-lg bg-transparent relative group">
                    <h3 className="text-red-500 font-bold text-lg mb-2">{a.name}</h3>
                    <p className="text-white font-medium leading-relaxed">
                        <span className="text-gray-400 text-sm block mb-1">Mobile: {a.phone}</span>
                        {a.street}, {a.city}, {a.state}, {a.pincode}.
                    </p>
                    
                    <div className="flex gap-3 mt-4">
                        <button 
                            onClick={() => editAddress(a)} 
                            className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md text-sm font-bold transition-all"
                        >
                            EDIT
                        </button>
                        <button 
                            onClick={() => deleteAddress(a.id)} 
                            className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-md flex items-center justify-center transition-colors"
                        >
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                        
                       
                    </div>
                </div>
            ))}
        </div>
    </>
)}

                    {/* Placeholder for other sections */}
    {activeSection === 'orders' && (
    <>
        <h2 className="text-red-500 font-bold text-xl sm:text-2xl mb-6">
            My Orders
        </h2>

        {loadingOrders && (
            <p className="text-gray-400">Loading orders...</p>
        )}

        {!loadingOrders && orders.length === 0 && (
            <p className="text-gray-400">No orders found</p>
        )}

        <div className="space-y-4">
           {orders.map(order => (
  <div key={order.id} className="border border-red-900 rounded-lg p-3 sm:p-5 bg-gray-900">
    
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
      <span className="font-bold text-red-500 text-base sm:text-lg">
        Order #{order.id?.toString().slice(-6) || 'N/A'}
      </span>
      <span className="text-gray-400 text-xs sm:text-sm">{order.orderDate ? new Date(order.orderDate).toLocaleDateString() : 'N/A'}</span>
    </div>

    {order.items?.map((item, index) => (
      <div key={index} className="flex gap-3 sm:gap-4 mb-3 pb-3 border-b border-gray-800 last:border-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain bg-black rounded border border-gray-700"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{item.name}</h4>
          <p className="text-xs sm:text-sm text-gray-400">Qty: {item.quantity}</p>
          <p className="text-xs sm:text-sm font-bold text-red-500">₹{item.price?.toLocaleString()}</p>
        </div>
      </div>
    ))}

    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-4 pt-3 border-t border-gray-800">
      <span className="font-bold text-white text-base sm:text-lg">Total: ₹{order.totalAmount?.toLocaleString()}</span>
      <div className="flex gap-2 sm:gap-3 items-center flex-wrap">
        <span className="px-3 py-1 text-xs sm:text-sm rounded bg-red-500 text-white font-medium">{order.status || 'Pending'}</span>
        <button onClick={() => cancelOrder(order.id)} className="bg-gray-700 hover:bg-gray-600 text-white px-3 sm:px-4 py-1 rounded text-xs sm:text-sm font-medium">Cancel</button>
      </div>
    </div>


  </div>
))}

        </div>
    </>
)}


                </div>
            </div>
        </div>
    );
};

export default Profile;