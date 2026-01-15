import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutCo = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [cartItems, setCartItems] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const emptyForm = {
    id: null,
    userId,
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    latitude: "",
    longitude: ""
  };

  const [addressForm, setAddressForm] = useState(emptyForm);

  /* ================= CART ================= */
  const loadCart = async () => {
    if (!userId || !token) return;
    const res = await axios.get(`http://localhost:8181/api/cart/${userId}`);
    setCartItems(res.data || []);
  };

  const deleteCartItem = async (itemId) => {
    await axios.delete(`http://localhost:8181/api/cart/${userId}/${itemId}`);
    loadCart();
  };

  /* ================= ADDRESS ================= */
  const loadAddresses = async () => {
    const res = await axios.get(
      `http://localhost:8181/api/address/${userId}`
    );
    setAddresses(res.data || []);
    if (res.data?.length) {
      setSelectedAddress(res.data[0]);
    }
  };
  const removeItem = async (id) => {
    await axios.delete(`http://localhost:8181/api/cart/${id}`);
    loadCart();
  };

  const saveAddress = async () => {
    if (editingId) {
      await axios.put(
        `http://localhost:8181/api/address/${editingId}`,
        addressForm
      );
    } else {
      await axios.post(
        `http://localhost:8181/api/address`,
        addressForm
      );
    }
    resetForm();
    loadAddresses();
  };

  const editAddress = (addr) => {
    setEditingId(addr.id);
    setAddressForm({ ...addr });
    setShowAddressForm(true);
  };

  const deleteAddress = async (id) => {
    if (!window.confirm("Delete this address?")) return;
    await axios.delete(`http://localhost:8181/api/address/${id}`);
    loadAddresses();
    setSelectedAddress(null);
  };

  const resetForm = () => {
    setEditingId(null);
    setShowAddressForm(false);
    setAddressForm(emptyForm);
  };

  useEffect(() => {
    loadCart();
    loadAddresses();
  }, [userId]);

  /* ================= PRICE ================= */
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst;

  const handleProceedToPayment = () => {
    if (!selectedAddress) {
      alert("Please select a delivery address");
      return;
    }
    navigate('/payment', {
      state: { cartItems, selectedAddress, grandTotal }
    });
  };

  return (
    <section className="pt-20 pb-20 bg-black min-h-screen px-3">
      <div className="max-w-2xl mx-auto">

        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
          Checkout
        </h2>

        {/* ================= ORDER SUMMARY ================= */}
        <div className="bg-gray-950 p-5 rounded border border-red-500 mb-6">
          <h3 className="text-lg font-bold text-red-500 mb-4">
            Order Summary ({cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'})
          </h3>

          <div className="space-y-4">
            {cartItems.map((item, i) => (
              <div key={i} className="flex gap-4 pb-4 border-b border-gray-800 last:border-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain bg-black rounded border border-gray-700"
                />
                
                <div className="flex-1">
                  <h4 className="text-white font-bold mb-1">{item.name}</h4>
                  <p className="text-gray-400 text-sm mb-2">{item.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Qty: {item.quantity}</span>
                    <div className="text-right">
                      <p className="text-white text-sm"><span className="text-red-500 font-semibold">Price:</span> ₹{item.price.toLocaleString()} x {item.quantity}</p>
                      <p className="text-white font-bold text-lg"><span className="text-red-500">Subtotal:</span> ₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded flex items-center justify-center self-start transition-colors"
                >
                  <i className="fa-solid fa-trash-can text-sm"></i>
                </button>
              </div>
            ))}
          </div>
        </div>

       {/* ================= ADDRESS ================= */}
<div className="bg-transparent p-0 mb-6">
  <h3 className="text-xl font-bold text-red-500 mb-6">
    Select Delivery Address
  </h3>

  <div className="space-y-4">
    {addresses.map((a) => (
      <div
        key={a.id}
        onClick={() => setSelectedAddress(a)}
        className={`border p-6 rounded-lg relative cursor-pointer transition-all ${
          selectedAddress?.id === a.id
            ? "border-red-500 bg-gray-900/40"
            : "border-gray-800 bg-transparent hover:border-gray-600"
        }`}
      >
        {selectedAddress?.id === a.id && (
          <div className="absolute top-4 right-4 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-check"></i>
          </div>
        )}
        
        <h4 className="text-red-500 font-bold text-lg mb-2">
          {a.name}
        </h4>

        <p className="text-white font-medium leading-relaxed">
          {a.street}, {a.city}, {a.state}, {a.pincode}.
        </p>
      </div>
    ))}
  </div>

  <button
    onClick={() => navigate('/profile', { state: { activeSection: 'addresses' } })}
    className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-bold transition-colors"
  >
    Add A New Address
  </button>
</div>

        {/* ================= PAYMENT ================= */}
        <div className="bg-gray-950 p-5 rounded border border-gray-700">
          <div className="flex justify-between text-white mb-2">
            <span className="font-semibold">Subtotal</span>
            <span className="font-bold">₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-white mb-2">
            <span className="font-semibold">GST (18%)</span>
            <span className="font-bold">₹{gst.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold border-t border-gray-600 pt-2 mt-2">
            <span className="text-white text-lg">Total</span>
            <span className="text-red-500 text-xl">
              ₹{grandTotal.toLocaleString()}
            </span>
          </div>
        </div>

        <button onClick={handleProceedToPayment} className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded">
          Proceed to Payment
        </button>

      </div>
    </section>
  );
};

export default CheckoutCo;
