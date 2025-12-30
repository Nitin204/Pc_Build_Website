import React, { useState } from 'react';
import axios from 'axios';
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('❌ Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/register',
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }
      );

      alert('🎉 Registration Successfull');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
      alert('❌ Registration failed');
    }
  };

  const inputClass =
    'w-full bg-white text-black p-2 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500';

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 pt-32 pb-20">
      <div className="bg-gray-950 text-white p-6 md:p-8 max-w-sm md:max-w-md w-full rounded-xl border border-red-500 shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-red-500 mb-2">
          CREATE ACCOUNT
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Welcome to <span className="text-red-500 font-semibold">System Builders</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className="text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className="text-sm">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label className="text-sm">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <p className="text-xs text-gray-400 mt-1">
              8+ chars, uppercase, lowercase, number & symbol
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-md font-bold transition"
          >
            SUBMIT
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{' '}
          <a href="/account" className="text-red-500 font-semibold hover:underline">
            Login here
          </a>
        </p>

        <p className="text-center text-sm text-gray-400 mt-4 border-t border-gray-800 pt-4">
          Need Help? Call{' '}
          <a href="tel:+916369933507" className="text-red-500 font-semibold">
            +91-6369933507
          </a>
        </p>
      </div>

      {/* Floating Icons */}
      <div className="fixed right-6 bottom-16 flex flex-col space-y-4">
        <a
          href="https://wa.me/916369933507"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          <MessageCircle />
        </a>

        <a
          href="tel:+916369933507"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          <Phone />
        </a>
      </div>
    </section>
  );
};

export default RegisterCo;
