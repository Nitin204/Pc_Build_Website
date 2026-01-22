import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { getUserId } from '../../constants';
const PaymentCo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userId = getUserId();
  const { cartItems = [], selectedAddress, grandTotal } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("upi");

 const handlePayment = async () => {
  try {
    const res = await axios.post("https://pc-build-websiteabackend-2.onrender.com/api/order", {
      userId,
      items: cartItems.map(i => ({
        productId: i.productId || i.id,
        productType: i.productType || "ACCESSORY",
        quantity: i.quantity,
        price: i.price
      })),
      address: selectedAddress,
      totalAmount: grandTotal,
      paymentMethod
    });

    alert("Order placed successfully!");  
    navigate("/");

  } catch (err) {
    console.error(err);
    const errorMsg = err.response?.data || "Order failed";
    alert("Out Of Stock");
  }
};


  return (
    <section className="pt-20 pb-20 bg-black min-h-screen px-3">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">Payment</h2>

        {/* Delivery Address */}
        <div className="bg-gray-950 p-5 rounded border border-gray-700 mb-6">
          <h3 className="text-lg font-bold text-red-500 mb-3">Delivery Address</h3>
          <p className="text-white font-medium">{selectedAddress?.name}</p>
          <p className="text-gray-400">{selectedAddress?.street}, {selectedAddress?.city}, {selectedAddress?.state}, {selectedAddress?.pincode}</p>
        </div>

        {/* Payment Method */}
        <div className="bg-gray-950 p-5 rounded border border-gray-700 mb-6">
          <h3 className="text-lg font-bold text-red-500 mb-4">Select Payment Method</h3>
          
          <div className="space-y-3">
            <label className={`flex items-center gap-3 p-4 border rounded cursor-pointer ${paymentMethod === "upi" ? "border-red-500 bg-gray-900/40" : "border-gray-700"}`}>
              <input type="radio" name="payment" value="upi" checked={paymentMethod === "upi"} onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5" />
              <span className="text-white font-medium">UPI</span>
            </label>

            <label className={`flex items-center gap-3 p-4 border rounded cursor-pointer ${paymentMethod === "card" ? "border-red-500 bg-gray-900/40" : "border-gray-700"}`}>
              <input type="radio" name="payment" value="card" checked={paymentMethod === "card"} onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5" />
              <span className="text-white font-medium">Credit/Debit Card</span>
            </label>

            <label className={`flex items-center gap-3 p-4 border rounded cursor-pointer ${paymentMethod === "cod" ? "border-red-500 bg-gray-900/40" : "border-gray-700"}`}>
              <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5" />
              <span className="text-white font-medium">Cash on Delivery</span>
            </label>
          </div>
        </div>

        {/* Total */}
        <div className="bg-gray-950 p-5 rounded border border-gray-700 mb-6">
          <div className="flex justify-between font-bold">
            <span className="text-white text-lg">Total Amount</span>
            <span className="text-red-500 text-xl">₹{grandTotal?.toLocaleString()}</span>
          </div>
        </div>

        <button onClick={handlePayment} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded">
          Complete Payment
        </button>
      </div>
    </section>
  );
};

export default PaymentCo;
