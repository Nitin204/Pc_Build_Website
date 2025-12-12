import React from 'react';
import heroImg from "../../assets/Homecard1.webp"; // update if name different

const RED_BUTTON_CLASSES = "bg-red-500 hover:bg-red-600";

const Homecard2 = () => {
  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">

       

        {/* RIGHT TEXT SECTION */}
        <div className="lg:w-2/5">
          
          <p className="text-2xl md:text-2xl font-bold text-red-500 mb-2 leading-tight">
            Build Smarter with India's Most <br /> Advanced PC Configurator
          </p>

          <p className="mb-2 text-white leading-relaxed">
            Take full control with India’s most advanced PC building tool—built for precision 
            and performance. It auto-validates compatibility across CPU, RAM, GPU, motherboard, 
            and PSU in real time. Get instant benchmarks for gaming, rendering, and AI workloads, 
            along with detailed power draw, thermals, and port availability.
          </p>

          <p className="text-red-500 font-semibold mb-2">
            Build → Benchmark → Buy
          </p>

          <p className="font-medium mb-2 text-lg font-light italic text-gray-400">
            Building PC, Made Easy!
          </p>

          {/* CTA BUTTON */}
          <button className={`px-10 py-3 uppercase font-bold text-white rounded transition duration-300 ${RED_BUTTON_CLASSES}`}>
            Build Your Own PC
          </button>
        </div>
         {/* LEFT IMAGE SECTION */}
        <div className="lg:w-2/3 mb-2 lg:mb-0 relative">
          <img
            src={heroImg}
            alt="Advanced PC Configurator"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Homecard2;
