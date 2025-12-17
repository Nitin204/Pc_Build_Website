import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
const ResetCo = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reset link requested for:', email);
        alert(`Password reset link sent to ${email} (if account exists).`);
        setEmail('');
    };

    const inputClass = "w-full bg-white text-black p-2 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500 transition duration-150";
    
    return (
        <section className="py-25 px-4 bg-black flex justify-center items-center">
            <div className="bg-gray-950 text-white p-6 md:p-10 w-full max-w-md shadow-2xl rounded-lg border border-gray-800">
                
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-8">
                    Reset Password
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={inputClass}
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-2">
                        <button 
                            type="submit" 
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition duration-300"
                        >
                            Send Reset Link
                        </button>
                    </div>
                </form>

                {/* Footer Links */}
                <div className="text-center mt-6 text-sm space-y-2">
                    <p className="text-gray-400">
                        Remember your password? <a href="/account" className="text-red-500 font-semibold hover:underline">Back to Login</a>
                    </p>
                </div>
                
                {/* Need Help */}
                <p className="text-center text-sm mt-8 text-gray-400 border-t border-gray-800 pt-4">
                    Need help? Call <a href="tel:+916369933507" className="text-red-500 font-semibold hover:text-red-500 transition duration-300">+91-6369933507</a>
                </p>
            </div>
             <div className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4">
                            <a href="https://wa.me/" 
                   // Used specific hex code for WhatsApp green and text-white for icon color
                   className="bg-[#25D366] text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 md:h-7 md:w-7" />
                </a>
                
                {/* Phone Icon: Changed to Blue bg and white icon */}
                <a href="tel:" 
                   // Used Tailwind's strong blue for phone and text-white for icon color
                   className="bg-blue-600 text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
                    <Phone className="h-5 w-5 md:h-7 md:w-7" />
                </a>
                        </div>
        </section>
    );
};

export default ResetCo;