import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const Support1 = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '13-12-2025', 
        details: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for form submission logic
        console.log('Form Submitted:', formData);
        alert('Request submitted! We will call you back soon.');
    };

    const inputClass = "w-full bg-white text-black p-2 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500 transition duration-150";

    return (
        <section className="py-30 px-4 bg-black flex justify-center items-center relative">
            <div className="bg-gray-950 text-white p-6 md:p-10 w-full max-w-lg shadow-2xl rounded-lg border border-gray-800">
                
                <h2 className="text-3xl font-bold text-center text-red-500 mb-10">
                    Request a Call Back
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={inputClass}
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1 text-white">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className={inputClass}
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={inputClass}
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Preferred Date */}
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium mb-1 text-white">Preferred Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className={inputClass}
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Additional Details */}
                    <div>
                        <label htmlFor="details" className="block text-sm font-medium mb-1 text-white">Additional Details (0/300)</label>
                        <textarea
                            id="details"
                            name="details"
                            rows="4"
                            maxLength="300"
                            className={inputClass}
                            placeholder="Enter any additional details or questions"
                            value={formData.details}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* SUBMIT Button */}
                    <div className="text-center pt-4">
                        <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition duration-300">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Support1;