import React from 'react';

const CardCo = () => {
    return (
        // Simple modal container replicating the screenshot's appearance
        <section className="py-20 px-4 bg-black flex justify-left items-center">
        <div className="w-200 h-40 bg-gray-950 mt-10 p-4 rounded-lg border border-gray-700 shadow-xl">
            
            {/* Header */}
            <h2 className="text-xl font-bold text-red-500 mb-3">
                My Cart
            </h2>
            
            {/* Empty State Message */}
            <p className="text-lg text-gray-300 font-medium">
                No Items in Cart!
            </p>
            
        </div>
        </section>
    );
}

export default CardCo;