import React, { useState, useEffect } from 'react';

const testimonials = [
    { name: "Kevin", time: "7 months ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", rating: 5, review: "I've had an absolutely amazing experience with Fusion Gaming and I would recommend them in a heartbeat to anyone looking to buy a customised PC. Here's why: the showroom staff and Sam are highly knowledgeable and I trust their advice completely." },
    { name: "PRASANNA 007", time: "a month ago", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", rating: 5, review: "I want a moment to appreciate the team for the amazing work they do. I recently built a pc; even though I gave it in at the last moment they did dispatch within a day. The PC is clean, and packaging was on point. Highly recommend!" },
    { name: "Vignesh Kanagaraj", time: "5 months ago", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", rating: 5, review: "I recently built a gaming PC through Fusion Gaming, and I couldn't be happier with the experience. Their website made it easy to configure a system based on my needs, and their WhatsApp consultation was quick and helpful." },
    { name: "Devaraj Kathiresan", time: "3 months ago", avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face", rating: 5, review: "Had a great experience at Fusion Gaming Chennai. The staff was helpful, the store had a good range of cabinets. Everything was well-organized, I was able to find what I needed quickly. The staff was fair and the product was fantastic." },
    { name: "Suresh P", time: "2 months ago", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face", rating: 5, review: "Fantastic service! The team helped me choose the perfect components for my budget. The build quality is superb, and the PC runs all my games smoothly. The delivery was fast and the setup was simple. Five stars!" }
];

const StarRating = ({ rating }) => {
    return (
        <div className="flex justify-center text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star text-lg"></i>
            ))}
        </div>
    );
};

const HomeReview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 3) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-gray-950 py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-12">
                    This is how our customers feel!
                </h2>
                
                <div className="relative h-96 md:h-80 overflow-hidden">
                    <div className="flex md:grid md:grid-cols-3 md:gap-4 h-full">
                        {/* Mobile: Single review */}
                        <div className="md:hidden w-full">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                                        index === currentIndex 
                                            ? 'translate-x-0 opacity-100 scale-100' 
                                            : index < currentIndex 
                                                ? '-translate-x-full opacity-0 scale-95' 
                                                : 'translate-x-full opacity-0 scale-95'
                                    }`}
                                >
                                    <div className="bg-black/50 backdrop-blur-sm border border-red-500/30 p-4 rounded-2xl shadow-2xl h-full flex flex-col justify-center transition-transform duration-500 ease-in-out hover:scale-110 active:scale-95">
                                        <div className="flex justify-center mb-4">
                                            <img 
                                                src={testimonial.avatar} 
                                                alt={testimonial.name} 
                                                className="w-20 h-20 rounded-full border-2 border-red-500 object-cover"
                                                loading="eager"
                                            />
                                        </div>
                                        <StarRating rating={testimonial.rating} />
                                        <p className="text-sm text-gray-200 mb-4 italic leading-relaxed px-2">
                                            "{testimonial.review}"
                                        </p>
                                        <div className="border-t border-red-500/30 pt-4">
                                            <p className="text-xl font-bold text-red-400">{testimonial.name}</p>
                                            <p className="text-sm text-gray-400">{testimonial.time}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Desktop: Three reviews side by side */}
                        <div className="hidden md:contents">
                            {[currentIndex, (currentIndex + 1) % testimonials.length, (currentIndex + 2) % testimonials.length].map((index, position) => (
                                <div key={index} className="bg-black/50 backdrop-blur-sm border border-red-500 p-4 rounded-2xl shadow-2xl flex flex-col justify-center transition-transform duration-500 ease-in-out hover:scale-110 active:scale-95 cursor-pointer">
                                    <div className="flex justify-center mb-3">
                                        <img 
                                            src={testimonials[index].avatar} 
                                            alt={testimonials[index].name} 
                                            className="w-20 h-20 rounded-full border-2 border-red-500 object-cover"
                                            loading="eager"
                                        />
                                    </div>
                                    <div className="flex justify-center text-yellow-400 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="fa-solid fa-star text-sm"></i>
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-200 mb-3 italic leading-relaxed">
                                        "{testimonials[index].review.substring(0, 120)}..."
                                    </p>
                                    <div className="border-t border-red-500/30 pt-3">
                                        <p className="text-sm font-bold text-red-500">{testimonials[index].name}</p>
                                        <p className="text-xs text-gray-400">{testimonials[index].time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'bg-red-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                            }`} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeReview;