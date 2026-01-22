// import React, { useState, useEffect } from 'react';

// const CardCo = () => {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//         setCartItems(savedCart);
//     }, []);

//     const removeFromCart = (index) => {
//         const updatedCart = cartItems.filter((_, i) => i !== index);
//         setCartItems(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
        
//         // Trigger custom event to update navbar count
//         window.dispatchEvent(new Event('cartUpdated'));
//     };

//     const updateQuantity = (index, change) => {
//         const updatedCart = [...cartItems];
//         const currentQty = updatedCart[index].quantity || 1;
//         const newQty = currentQty + change;
        
//         if (newQty <= 0) {
//             // Remove item if quantity becomes 0
//             removeFromCart(index);
//         } else {
//             updatedCart[index].quantity = newQty;
//             setCartItems(updatedCart);
//             localStorage.setItem('cart', JSON.stringify(updatedCart));
//         }
//     };

//     return (
//         <section className="pt-32 pb-20 px-4 bg-black min-h-screen">
//             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                
//                 {/* Cart Items - Left Side */}
//                 <div className="lg:w-2/3 bg-gray-950 p-8 rounded-lg border border-red-500 shadow-xl">
                
//                 <h2 className="text-2xl font-bold text-red-500 mb-6">
//                     My Cart ({cartItems.length} items)
//                 </h2>
                
//                 {cartItems.length === 0 ? (
//                     <p className="text-lg text-gray-300 font-medium">
//                         No Items in Cart!
//                     </p>
//                 ) : (
//                     <div className="space-y-4">
//                         {cartItems.map((item, index) => (
//                             <div key={index} className="flex flex-col md:flex-row p-6 bg-gray-900 rounded-lg space-y-4 md:space-y-0 md:space-x-6">
//                                 {/* Product Image */}
//                                 <div className="w-full md:w-32 h-32 bg-black rounded-lg overflow-hidden flex-shrink-0 cursor-pointer">
//                                     {item.image ? (
//                                         <img 
//                                             src={item.image} 
//                                             alt={item.name || 'Product'} 
//                                             className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-300"
//                                             onError={(e) => {
//                                                 e.target.style.display = 'none';
//                                                 e.target.nextSibling.style.display = 'flex';
//                                             }}
//                                         />
//                                     ) : null}
//                                     <div className={`w-full h-full bg-gray-700 flex items-center justify-center text-xs text-gray-400 ${item.image ? 'hidden' : 'flex'}`}>
//                                         {item.image ? 'Image Error' : 'No Image'}
//                                     </div>
//                                 </div>
                                
//                                 {/* Product Details */}
//                                 <div className="flex-grow">
//                                     <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
//                                     <p className="text-sm text-white leading-relaxed mb-3">{item.specs}</p>
//                                     <div className="space-y-1">
//                                         <p className="text-lg text-gray-300">Price: {typeof item.displayPrice === 'string' ? item.displayPrice : `₹${item.price}/-`}</p>
//                                         <p className="text-2xl font-semibold text-red-500">Subtotal: ₹{((typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price) * (item.quantity || 1)).toLocaleString()}/-</p>
//                                     </div>
                                    
//                                     {/* Quantity Controls */}
//                                     <div className="flex items-center mt-3 space-x-3">
//                                         <span className="text-white font-medium">Qty:</span>
//                                         <button 
//                                             onClick={() => updateQuantity(index, -1)}
//                                             className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold cursor-pointer"
//                                         >
//                                             -
//                                         </button>
//                                         <span className="text-white font-bold text-lg min-w-[2rem] text-center">{item.quantity || 1}</span>
//                                         <button 
//                                             onClick={() => updateQuantity(index, 1)}
//                                             className="bg-gray-700 hover:bg-gray-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold cursor-pointer"
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
                                
//                                 {/* Remove Button */}
//                                 <div className="flex md:flex-col justify-end items-end">
//                                     <button 
//                                         onClick={() => removeFromCart(index)}
//                                         className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-bold transition duration-300 cursor-pointer"
//                                     >
//                                         Remove
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
                
//                 </div>

//                 {/* Checkout Section - Right Side */}
//                 <div className="lg:w-1/3 bg-gray-950 p-6 rounded-lg border border-red-500 shadow-xl h-fit">
//                     <h3 className="text-xl font-bold text-red-500 mb-4">Order Summary</h3>
                    
//                     <div className="space-y-3 mb-6">
//                         <div className="flex justify-between text-gray-300">
//                             <span>Subtotal ({cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)} items):</span>
//                             <span>₹{cartItems.reduce((sum, item) => {
//                                 const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price;
//                                 return sum + (price * (item.quantity || 1));
//                             }, 0).toLocaleString()}</span>
//                         </div>
//                         <div className="flex justify-between text-gray-300">
//                             <span>GST (18%):</span>
//                             <span>₹{Math.round(cartItems.reduce((sum, item) => {
//                                 const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price;
//                                 return sum + (price * (item.quantity || 1));
//                             }, 0) * 0.18).toLocaleString()}</span>
//                         </div>
//                         <div className="flex justify-between text-gray-300">
//                             <span>Shipping:</span>
//                             <span className="text-green-500">FREE</span>
//                         </div>
//                         <hr className="border-gray-700" />
//                         <div className="flex justify-between text-xl font-bold text-white">
//                             <span>Total:</span>
//                             <span className="text-red-500">₹{Math.round(cartItems.reduce((sum, item) => {
//                                 const price = typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, '')) : item.price;
//                                 return sum + (price * (item.quantity || 1));
//                             }, 0) * 1.18).toLocaleString()}</span>
//                         </div>
//                     </div>
                    
//                     <a href="/checkout"><button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300 mb-3 cursor-pointer">
//                         Proceed to Checkout
//                     </button></a>
                    
                    
                   
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CardCo;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CardCo = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const userId = localStorage.getItem("userId");

//     useEffect(() => {
//         if (!userId) return;

//         axios.get(`http://localhost:8181/api/cart/${userId}`)
//             .then(res => setCartItems(res.data.items || []));
//     }, [userId]);

//     const removeItem = (productId) => {
//         axios.delete(`http://localhost:8181/api/cart/${userId}/${productId}`)
//             .then(res => setCartItems(res.data.items));
//     };

//     const updateQty = (productId, qty) => {
//         if (qty <= 0) return removeItem(productId);

//         axios.put(`http://localhost:8181/api/cart/${userId}/update`, {
//             productId,
//             quantity: qty
//         }).then(res => setCartItems(res.data.items));
//     };

//     const subtotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);
//     const gst = Math.round(subtotal * 0.18);
//     const total = subtotal + gst;

//     return (
//         <section className="pt-32 pb-20 px-4 bg-black min-h-screen">
//             <div className="max-w-6xl mx-auto flex gap-8">

//                 <div className="w-2/3 bg-gray-950 p-6 rounded-lg border border-red-500">
//                     <h2 className="text-red-500 text-2xl mb-4">
//                         My Cart ({cartItems.length})
//                     </h2>

//                     {cartItems.map(item => (
//                         <div key={item.productId} className="flex justify-between mb-4">
//                             <h3>{item.name}</h3>
//                             <div>
//                                 <button onClick={() => updateQty(item.productId, item.quantity - 1)}>-</button>
//                                 <span className="mx-2">{item.quantity}</span>
//                                 <button onClick={() => updateQty(item.productId, item.quantity + 1)}>+</button>
//                             </div>
//                             <button onClick={() => removeItem(item.productId)}>Remove</button>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="w-1/3 bg-gray-950 p-6 rounded-lg border border-red-500">
//                     <p>Subtotal: ₹{subtotal}</p>
//                     <p>GST: ₹{gst}</p>
//                     <p className="text-xl text-red-500">Total: ₹{total}</p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CardCo;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { getUserId } from '../../constants';

const CardCo = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = getUserId();

  // 🔄 Load cart
  const loadCart = async () => {
    const token = localStorage.getItem('token');
    if (!token || !userId) {
      setCartItems([]); // ✅ no token/user → empty cart
      return;
    }

    try {
      const res = await axios.get(
        `https://pc-build-websiteabackend-2.onrender.com/api/cart/${userId}`
      );
      setCartItems(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load cart", err);
      setCartItems([]);
    }
  };

  useEffect(() => {
    loadCart();

    // 🔥 LOGOUT LISTENER
    const handleLogout = () => {
      setCartItems([]); // ✅ force empty
    };

    window.addEventListener("userLoggedOut", handleLogout);
    return () =>
      window.removeEventListener("userLoggedOut", handleLogout);
  }, [userId]); // 🔑 userId change = reload

  // ❌ Remove
  const removeItem = async (id) => {
    await axios.delete(`https://pc-build-websiteabackend-2.onrender.com/api/cart/${id}`);
    loadCart();
  };

  // ➕➖ Qty
  const updateQty = async (id, qty) => {
    if (qty <= 0) return removeItem(id);
    
    try {
      await axios.put(
        `https://pc-build-websiteabackend-2.onrender.com/api/cart/qty/${id}/${qty}`
      );
      loadCart();
    } catch (err) {
      console.error("Update quantity failed:", err);
      const errorMsg = err.response?.data || "Stock limit reached";
      alert("Out Of Stock");
    }
  };

  // 💰 Totals
  const subTotal = cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const total = subTotal ;

  return (
    <section className="pt-32 pb-20 px-4 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* LEFT */}
        <div className="lg:w-2/3 bg-gray-950 border border-red-500 rounded-xl p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-red-500 mb-4 md:mb-6">
            My Cart ({cartItems.length} items)
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-300">No items in cart</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row bg-gray-800 p-4 md:p-5 rounded-xl mb-4 space-y-4 md:space-y-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain bg-black rounded mx-auto md:mx-0"
                />

                <div className="flex-grow md:ml-6 text-center md:text-left">
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.specs}</p>
                  <p className="text-white text-sm mt-1"><span className="text-red-500 font-semibold">Price:</span> ₹{(item.price).toLocaleString()}/-</p>
                  <p className="text-white text-lg font-bold mt-1"><span className="text-red-500">Subtotal:</span> ₹{(item.price * item.quantity).toLocaleString()}/-</p>

                  <div className="flex items-center justify-center md:justify-start mt-4 space-x-3">
                    <span className="text-white font-medium">Qty:</span>
                    <button
                      onClick={() => updateQty(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-700 hover:bg-gray-600 text-white rounded flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQty(item.id, parseInt(e.target.value) || 1)}
                      className="w-16 text-center bg-gray-700 text-white rounded px-2 py-1 font-bold"
                    />
                    <button
                      onClick={() => updateQty(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-700 hover:bg-gray-600 text-white rounded flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

            
                
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded flex items-center justify-center self-start transition-colors"
                >
                  <i className="fa-solid fa-trash-can text-sm"></i>
                </button>
              </div>
            ))
          )}
        </div>

        {/* RIGHT */}
        <div className="lg:w-1/3 bg-gray-950 border border-red-500 rounded-xl p-4 md:p-6 h-fit">
          <h3 className="text-lg md:text-xl font-bold text-red-500 mb-4">
            Order Summary
          </h3>

          <div className="text-white space-y-2">
            
            
            <hr className="border-gray-700" />
            <div className="flex justify-between text-xl font-bold">
              <span className="text-red-500">Total</span>
              <span className="text-red-500">₹{total.toLocaleString()}</span>
            </div>
          </div>

          <a href="/checkout">
            <button className="w-full mt-6 bg-red-600 hover:bg-red-700 py-3 rounded font-bold text-white">
              Checkout
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CardCo;
