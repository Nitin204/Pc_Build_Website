import React, { useState } from 'react';
import axios from 'axios';
import { LogIn, MessageCircle, Phone } from 'lucide-react';
import image from '../../assets/image.png'; // Google icon
const googleLogin = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/google";
};

// Simple check for Google login success
window.addEventListener('message', (event) => {
  if (event.origin !== 'http://localhost:8080') return;
  
  if (event.data.type === 'GOOGLE_LOGIN_SUCCESS') {
    const { token, user } = event.data;
    
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify({
      name: user.name || 'Google User',
      firstName: user.firstName || user.name?.split(' ')[0] || 'User',
      email: user.email
    }));
    
    alert('🎉 Google Login Successful! Welcome to Fusion Gaming!');
    window.dispatchEvent(new Event('userLoggedIn'));
    window.location.reload();
  }
});

const LoginCo = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', formData);
            console.log('Full login response:', response.data);
            
            // Handle different response structures
            const userName = response.data.user?.name || response.data.user?.firstName || response.data.name || response.data.firstName || 'User';
            const userObj = {
                name: userName,
                firstName: response.data.user?.firstName || response.data.firstName,
                email: response.data.user?.email || response.data.email
            };
            
            alert(`Welcome ${userName}!`);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(userObj));
            
            // Force navbar update
            window.dispatchEvent(new Event('userLoggedIn'));
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        alert('Google login triggered!');
        // Here you can redirect to backend OAuth endpoint later
    };

    const inputClass = "w-full bg-white text-black p-2 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500 transition duration-150";

    return (
        <section className="py-25 px-4 bg-black flex justify-center items-center min-h-screen">
            <div className="bg-gray-950 text-white p-6 md:p-10 w-full max-w-md shadow-2xl rounded-lg border border-red-500 relative">
                
                <h2 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-4">Welcome Back</h2>
                <p className="text-center text-gray-400 mb-8">
                    Sign in to continue building your dream PC with <span className="text-red-500 font-semibold">Fusion Gaming</span>
                </p>

                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

                {/* Google Sign In */}
              <button
  onClick={googleLogin}
  className="w-full flex items-center justify-center border border-red-500 py-1 rounded"
>
  <img src={image} className="w-5 h-5 mr-3" />
  Sign in with Google
</button>



                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-700"></div>
                    <span className="mx-4 text-gray-500 text-sm">or use your email</span>
                    <div className="flex-grow border-t border-gray-700"></div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={inputClass}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className={inputClass}
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded transition duration-300 flex items-center justify-center">
                        <LogIn className="w-5 h-5 mr-2" />
                        {loading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>

                {/* Footer Links */}
                <div className="text-center mt-4 text-sm space-y-2">
                    <p className="text-gray-400">
                        New to Fusion Gaming? <a href="/register" className="text-red-500 font-semibold hover:underline">Create Account</a>
                    </p>
                    <p>
                        <a href="/reset" className="text-red-500 font-semibold hover:underline">Reset Password</a>
                    </p>
                </div>

                {/* Need Help */}
                <p className="text-center text-sm mt-4 text-gray-400 border-t border-gray-800 pt-4">
                    Need Help? Call <a href="tel:+916369933507" className="text-red-500 font-semibold hover:text-red-500 transition duration-300">+91-6369933507</a>
                </p>

                {/* Floating WhatsApp & Phone Buttons */}
                <div className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4">
                    <a href="https://wa.me/" className="bg-[#25D366] text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
                        <MessageCircle className="h-5 w-5 md:h-7 md:w-7" />
                    </a>
                    <a href="tel:+916369933507" className="bg-blue-600 text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
                        <Phone className="h-5 w-5 md:h-7 md:w-7" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LoginCo;
