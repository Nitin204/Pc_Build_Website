import React, { useState } from 'react';
import { Mail, Lock, User, LogIn } from 'lucide-react';
import { MessageCircle, Phone } from 'lucide-react';
import image from '../../assets/image.png'; 
const LoginCo = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Attempting Sign In:', formData);
        alert('Sign In logic triggered.');
    };

    const inputClass = "w-full bg-white text-black p-2 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500 transition duration-150";

    return (
        <section className="py-25 px-4 bg-black flex justify-center items-center">
            <div className="bg-gray-950 text-white p-6 md:p-10 w-full max-w-md shadow-2xl rounded-lg border border-red-500">
                
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-4">
                    Welcome Back
                </h2>
                
                <p className="text-center text-gray-400 mb-8">
                    Sign in to continue building your dream PC with <span className="text-red-500 font-semibold">Fusion Gaming</span>
                </p>

                {/* Sign in with Google Button */}
                <button className="w-full flex items-center justify-center bg-transparent text-white border border-red-500 py-1 rounded font-semibold hover:bg-gray-800 transition duration-300 mb-6">
                    <img src={image} alt="Google logo" className="w-5 h-5 mr-3" />
                    Sign in with Google
                </button>

                {/* OR Separator */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-700"></div>
                    <span className="mx-4 text-gray-500 text-sm">or use your email</span>
                    <div className="flex-grow border-t border-gray-700"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1 text-white sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={inputClass}
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    
                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1 text-white sr-only">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className={inputClass}
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <div className="text-center pt-4">
                        <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded transition duration-300 flex items-center justify-center">
                            <LogIn className="w-5 h-5 mr-2" />
                            Sign In
                        </button>
                    </div>
                </form>

                {/* Footer Links */}
                <div className="text-center mt-2 text-sm space-y-2">
                    <p className="text-gray-400">
                        New to Fusion Gaming? <a href="/register" className="text-red-500 font-semibold hover:underline">Create Account</a>
                    </p>
                    <p>
                        <a href="/reset" className="text-red-500 font-semibold hover:underline">Reset Here</a>
                    </p>
                </div>
                
                {/* Need Help */}
                <p className="text-center text-sm mt-3 text-gray-400 border-t border-gray-800 pt-4">
                    Need Help? Call <a href="tel:+916369933507" className="text-red-500 font-semibold hover:text-red-500 transition duration-300">+91-6369933507</a>
                </p>
            </div>
            
        <div>

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
        </div>
            
        </section>
        
    );
};

export default LoginCo;