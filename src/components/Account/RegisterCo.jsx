import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
const RegisterCo = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation placeholder
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        console.log('Attempting Account Creation:', formData);
        alert('Account creation logic triggered.');
    };

    const inputClass = "w-full bg-white text-black p-1 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500 transition duration-150";

    return (
        <section className="py-20 px-4 bg-black flex justify-center items-center">
            <div className="bg-gray-950 text-white p-6 md:p-10 w-full max-w-md shadow-2xl rounded-lg border border-red-500">
                
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-4">
                    CREATE ACCOUNT
                </h2>
                
                <p className="text-center text-gray-400 mb-8">
                    Welcome to <span className="text-red-500 font-semibold">Fusion Gaming</span>
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* First Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-white">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            className={inputClass}
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    {/* Last Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-white">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            className={inputClass}
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-white">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            className={inputClass}
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-white">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            className={inputClass}
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-white">Password</label>
                        <input
                            type="password"
                            name="password"
                            className={inputClass}
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-white">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className={inputClass}
                            placeholder="Retype password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                         <p className="text-xs text-gray-400 mt-1">
                            Must contain 8+ chars, 1 uppercase, 1 lowercase, 1 number & 1 symbol.
                        </p>
                    </div>

                    {/* Terms & Submit */}
                    <div className="pt-4">
                         <p className="text-center text-xs text-gray-400 mb-4">
                            By clicking submit, you agree to our <a href="#" className="text-red-500 font-semibold hover:underline">Privacy Policy</a> and <a href="#" className="text-red-500 font-semibold hover:underline">Terms & Conditions</a>.
                        </p>
                        <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded transition duration-300">
                            SUBMIT
                        </button>
                    </div>
                </form>

                {/* Login Link */}
                <div className="text-center mt-4 text-sm">
                    <p className="text-gray-400">
                        Already have an account? <a href="/account/login" className="text-red-500 font-semibold hover:underline">Login here</a>
                    </p>
                </div>
                
                {/* Need Help */}
                <p className="text-center text-sm mt-5 text-gray-400 border-t border-gray-800 pt-4">
                    Need Help? Call <a href="tel:+916369933507" className="text-red-500 font-semibold hover:text-red-500 transition duration-300">+91-6369933507</a>
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

export default RegisterCo;