import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleAddToCart = () => {
        // Add product to cart logic here
        console.log('Adding to cart:', product);
        
        // Navigate to cart page
        navigate('/cart');
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