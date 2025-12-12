import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 

const testimonials = [
    // ... (Testimonial data remains the same) ...
    { name: "Kevin", time: "7 months ago", avatar: "/avatars/kevin-avatar.webp", rating: 5, review: "I've had an absolutely amazing experience with Fusion Gaming and I would recommend them in a heartbeat to anyone looking to buy a customised PC. Here's why: the showroom staff and Sam are highly knowledgeable and I trust their advice completely." },
    { name: "PRASANNA 007", time: "a month ago", avatar: "/avatars/prasanna-avatar.webp", rating: 5, review: "I want a moment to appreciate the team for the amazing work they do. I recently built a pc; even though I gave it in at the last moment they did dispatch within a day. The PC is clean, and packaging was on point. Highly recommend!" },
    { name: "Vignesh Kanagaraj", time: "5 months ago", avatar: "/avatars/vignesh-avatar.webp", rating: 5, review: "I recently built a gaming PC through Fusion Gaming, and I couldn't be happier with the experience. Their website made it easy to configure a system based on my needs, and their WhatsApp consultation was quick and helpful." },
    { name: "Devaraj Kathiresan", time: "3 months ago", avatar: "/avatars/devaraj-avatar.webp", rating: 5, review: "Had a great experience at Fusion Gaming Chennai. The staff was helpful, the store had a good range of cabinets. Everything was well-organized, I was able to find what I needed quickly. The staff was fair and the product was fantastic." },
    { name: "Suresh P", time: "2 months ago", avatar: "/avatars/suresh-avatar.webp", rating: 5, review: "Fantastic service! The team helped me choose the perfect components for my budget. The build quality is superb, and the PC runs all my games smoothly. The delivery was fast and the setup was simple. Five stars!" }
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
    const scrollContainerRef = useRef(null);
    // Adjusted padding for better mobile fit
    const cardClasses = "bg-gray-800 p-6 rounded-lg shadow-xl text-white flex flex-col justify-between relative";

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            // Calculate scroll based on the actual width of a card (w-full on mobile)
            const cardWidth = scrollContainerRef.current.querySelector('.flex-shrink-0').offsetWidth;
            // Scroll by one card width plus the gap (space-x-6 is 24px)
            const scrollAmount = cardWidth + 24; 

            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="bg-gray-950 py-10 px-4 sm:px-6"> {/* Adjusted horizontal padding */}
            <div className="max-w-7xl mx-auto overflow-hidden">
                <h2 className="text-3xl md:text-3xl font-bold text-red-500 text-center mb-8 sm:mb-12">
                    {/* Restored the styling to match the image heading */}
                    This is how our customers feel!
                </h2>
                
                <div className="relative">
                    
                    <div 
                        ref={scrollContainerRef}
                        // Use scrollbar-none utility if you have the Tailwind CSS scrollbar plugin installed
                        className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-4 scrollbar-none"
                    >
                        
                        {testimonials.map((testimonial, index) => (
                            <div key={index} 
                                 className={`${cardClasses} flex-shrink-0 w-full sm:w-[48%] lg:w-[32%] xl:w-[23%] snap-start`}>
                                
                                <div className="flex flex-col items-center text-center">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name} 
                                        className="h-16 w-16 rounded-full object-cover mb-4 border-2 border-red-600"
                                    />
                                    <StarRating rating={testimonial.rating} />
                                </div>
                                
                                {/* FIX: Increased max-height slightly and removed the internal overflow to ensure full text readability on mobile without nested scrollbars */}
                                <p className="text-sm text-gray-300 mb-4 overflow-hidden max-h-48 relative">
                                    {testimonial.review}
                                </p>
                                
                                <div className="mt-auto pt-2 border-t border-gray-700/50">
                                    <p className="text-sm font-bold text-red-500">{testimonial.name}</p>
                                    <p className="text-xs text-gray-400">{testimonial.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows (Hidden on Mobile, Visible on MD+) */}
                    <button 
                        onClick={() => scroll('left')}
                        aria-label="Previous review"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition duration-200 z-30 hidden md:block">
                        <ChevronLeft className="h-6 w-6" /> 
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        aria-label="Next review"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition duration-200 z-30 hidden md:block">
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HomeReview;