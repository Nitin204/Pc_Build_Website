import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const handleAddToCart = () => {
        if (!isAuthenticated) {
            alert('Please login to add items to cart');
            navigate('/login');
            return;
        }
        
        // Add product to cart logic here
        console.log('Adding to cart:', product);
        
        // Get existing cart or create new one
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const updatedCart = [...existingCart, { ...product, quantity: 1 }];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        
        // Trigger cart update event
        window.dispatchEvent(new Event('cartUpdated'));
        
        // Show success popup
        const popup = document.createElement('div');
        popup.innerHTML = `
            <div style="position: fixed; top: 20px; right: 20px; background: #10b981; color: white; padding: 12px 20px; border-radius: 8px; z-index: 9999; box-shadow: 0 4px 12px rgba(0,0,0,0.3); font-weight: 500;">
                ✅ ${product?.name || 'Product'} added to cart!
            </div>
        `;
        document.body.appendChild(popup);
        setTimeout(() => document.body.removeChild(popup), 3000);
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-white font-bold mb-2">{product?.name || 'Product Name'}</h3>
            <p className="text-gray-300 mb-4">{product?.price || '₹50,000'}</p>
            
            <button 
                onClick={handleAddToCart}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;