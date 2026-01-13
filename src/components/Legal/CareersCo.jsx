// import React, { useState } from 'react';
// import { MessageCircle, Phone, X, ArrowRight } from 'lucide-react'; 
// // Define reusable styles
// const RED_BUTTON_CLASSES = 'bg-red-500 hover:bg-red-600'; 
// const INPUT_CLASSES = 'w-full px-4 py-1 bg-white text-black rounded-lg border-none focus:ring-2 focus:ring-red-500';

// const CareersCo = () => {
//     // State for form data 
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         description: '',
//         resume: null
//     });

//     const MAX_CHARS = 300;

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: files ? files[0] : value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Placeholder submission logic (send application data to HR API)
//         console.log("Submitting Careers Application:", formData);
//         alert("Your application has been submitted successfully!");
//         // Reset form or redirect on successful API response
//     };

//     return (
//         // Full page container with dark background
//         <div className="flex items-start justify-center min-h-screen bg-black text-white p-4 pt-25">
            
//             {/* Form Box */}
//             <div className="w-full max-w-sm bg-gray-950 p-8 md:p-10 rounded-xl  border border-gray-800" 
//                 >
                
//                 {/* Title */}
//                 <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-red-600">
//                     Careers
//                 </h2>
                
//                 <form onSubmit={handleSubmit} className="space-y-6">
                    
//                     {/* Name */}
//                     <div>
//                         <label className="block text-base font-medium text-white mb-2">Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Enter your name"
//                             className={INPUT_CLASSES}
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     {/* Email Address */}
//                     <div>
//                         <label className="block text-base font-medium text-white mb-2">Email address</label>
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             className={INPUT_CLASSES}
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
                    
//                     {/* Phone Number */}
//                     <div>
//                         <label className="block text-base font-medium text-white mb-2">Phone number</label>
//                         <input
//                             type="tel"
//                             name="phone"
//                             placeholder="Enter your phone number"
//                             className={INPUT_CLASSES}
//                             value={formData.phone}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
                    
//                     {/* Resume Upload */}
//                     <div>
//                         <label className="block text-base font-medium text-white mb-2">Resume</label>
//                         <input
//                             type="file"
//                             name="resume"
//                             accept=".pdf,.doc,.docx"
//                             className="w-full px-4 py-2 bg-white text-black rounded-lg border-none focus:ring-2 focus:ring-red-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-red-500 file:text-white file:cursor-pointer hover:file:bg-red-600"
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
                    
//                     {/* Description (Textarea) */}
//                     <div>
//                         <label className="block text-base font-medium text-white mb-2">Description (0/{MAX_CHARS})</label>
//                         <textarea
//                             name="description"
//                             placeholder="Explain how you could make a difference to our organization"
//                             rows="5"
//                             maxLength={MAX_CHARS}
//                             className={`${INPUT_CLASSES} resize-none`}
//                             value={formData.description}
//                             onChange={handleChange}
//                             required
//                         ></textarea>
//                         {/* Character counter (Optional, but useful for user experience) */}
//                         <p className="text-right text-sm text-gray-400 mt-1">
//                             {formData.description.length}/{MAX_CHARS}
//                         </p>
//                     </div>
                    
//                     {/* Submit Button */}
//                     <button 
//                         type="submit"
//                         className={`w-full py-3 mt-2 uppercase font-bold text-white rounded-lg transition duration-300 ${RED_BUTTON_CLASSES}`}
//                     >
//                         SUBMIT
//                     </button>
//                 </form>

//             </div>

//             <div className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4">
//                 <a href="https://wa.me/" 
//                     className="bg-[#25D366] text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
//                     <MessageCircle className="h-5 w-5 md:h-7 md:w-7" />
//                 </a>
                
//                 <a href="tel:" 
//                     className="bg-blue-600 text-white p-3 rounded-full shadow-lg text-xl hover:scale-105 transition duration-200 flex items-center justify-center">
//                     <Phone className="h-5 w-5 md:h-7 md:w-7" />
//                 </a>
//             </div>
//         </div>
//     );
// }

// export default CareersCo;
import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

// Reusable styles
const RED_BUTTON_CLASSES = 'bg-red-500 hover:bg-red-600';
const INPUT_CLASSES =
  'w-full px-4 py-1 bg-white text-black rounded-lg border-none focus:ring-2 focus:ring-red-500';

const CareersCo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    resume: null,
  });
  const [errors, setErrors] = useState({});

  const MAX_CHARS = 300;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) return;

  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("phone", formData.phone);
  formDataToSend.append("description", formData.description);
  formDataToSend.append("resume", formData.resume);

  try {
    const response = await fetch("http://localhost:8181/api/careers", {
      method: "POST",
      body: formDataToSend // ❗ no headers
    });

    if (!response.ok) {
      throw new Error("Failed to submit application");
    }

    alert("Application submitted successfully!");
  } catch (error) {
    console.error(error);
    alert("Error submitting application");
  }
};

  return (
    <div className="flex items-start justify-center min-h-screen bg-black text-white p-4 pt-25">
      <div className="w-full max-w-sm bg-gray-950 p-8 md:p-10 rounded-xl border border-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-red-600">
          Careers
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-base font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              className={`${INPUT_CLASSES} ${errors.name ? 'ring-2 ring-red-500' : ''}`}
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-base font-medium mb-2">Email address</label>
            <input
              type="email"
              name="email"
              className={`${INPUT_CLASSES} ${errors.email ? 'ring-2 ring-red-500' : ''}`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-base font-medium mb-2">Phone number</label>
            <input
              type="tel"
              name="phone"
              className={`${INPUT_CLASSES} ${errors.phone ? 'ring-2 ring-red-500' : ''}`}
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Resume */}
          <div>
            <label className="block text-base font-medium mb-2">Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 bg-white text-black rounded-lg file:bg-red-500 file:text-white file:border-0 hover:file:bg-red-600 ${errors.resume ? 'ring-2 ring-red-500' : ''}`}
            />
            {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-base font-medium mb-2">
              Description (0/{MAX_CHARS})
            </label>
            <textarea
              name="description"
              rows="5"
              maxLength={MAX_CHARS}
              className={`${INPUT_CLASSES} resize-none ${errors.description ? 'ring-2 ring-red-500' : ''}`}
              value={formData.description}
              onChange={handleChange}
              required
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            <p className="text-right text-sm text-gray-400 mt-1">
              {formData.description.length}/{MAX_CHARS}
            </p>
          </div>

          <button
            type="submit"
            className={`w-full py-3 uppercase font-bold rounded-lg ${RED_BUTTON_CLASSES}`}
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Floating buttons */}
      <div className="fixed right-6 bottom-16 z-50 flex flex-col space-y-4">
        <a
          href="https://wa.me/"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          <MessageCircle />
        </a>

        <a
          href="tel:"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          <Phone />
        </a>
      </div>
    </div>
  );
};

export default CareersCo;
