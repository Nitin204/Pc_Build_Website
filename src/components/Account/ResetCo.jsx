import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const ResetCo = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        'http://localhost:8080/api/auth/reset-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      alert(data.message);
      setEmail('');
    } catch (error) {
      alert('❌ Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-white text-black p-2 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500 transition duration-150';

  return (
    <section className="min-h-screen px-4 bg-black flex justify-center items-center">
      <div className="bg-gray-950 text-white p-6 md:p-10 w-full max-w-md shadow-2xl rounded-lg border border-gray-800">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-8">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className={inputClass}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded transition duration-300"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className="text-center mt-6 text-sm">
          <p className="text-gray-400">
            Remember your password?{' '}
            <a
              href="/account"
              className="text-red-500 font-semibold hover:underline"
            >
              Back to Login
            </a>
          </p>
        </div>

        <p className="text-center text-sm mt-8 text-gray-400 border-t border-gray-800 pt-4">
          Need help? Call{' '}
          <a
            href="tel:+916369933507"
            className="text-red-500 font-semibold"
          >
            +91-6369933507
          </a>
        </p>
      </div>

      {/* Floating Buttons */}
      <div className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4">
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

export default ResetCo;
