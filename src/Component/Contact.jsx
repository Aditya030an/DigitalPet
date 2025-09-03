

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaStar } from "react-icons/fa";
// import { collection, addDoc } from 'firebase/firestore';
// import { useFeedback } from '../context/FeedbackContext';
// import db from "../firebase";

// export default function Contact() {
//   const [result, setResult] = useState("");
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [feedbackData, setFeedbackData] = useState({
//     full_name: '',
//     email: '',
//     message: '',
//     rating: 0,
//   });

//   const { updateFeedback } = useFeedback();

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending...");

//     const formData = new FormData(event.target);
//     formData.append("access_key", "2b224ec4-521a-4626-a94b-7bfa416c168a");
//     formData.append("rating", rating);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();
//     setResult(data.success ? "Form Submitted Successfully" : data.message);
//     event.target.reset();
//     setRating(0);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFeedbackData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="relative min-h-screen bg-[url('/paws.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-20">
//       <motion.div
//         initial={{ opacity: 0, y: 80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         className="w-full max-w-3xl bg-white/80 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-3xl px-10 py-12"
//       >
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center">
//           Contact a Vet
//         </h2>
//         <p className="text-center text-gray-600 mb-10 text-lg">
//           Get 24/7 expert vet support. Fill out the form below, and we’ll respond via email.
//         </p>

//         <form onSubmit={onSubmit} className="space-y-6">
//           {[
//             { label: "Full Name", required: true },
//             { label: "Email", required: true },
//             { label: "Phone", required: true },
//             { label: "Facebook ID", required: false },
//             { label: "Instagram ID", required: false },
//             { label: "State", required: true },
//             { label: "Country", required: true },
//             { label: "Pet Name", required: false }
//           ].map((field, i) => (
//             <div key={i}>
//               <label className="block mb-2 text-gray-800 font-medium">{field.label}</label>
//               <input
//                 type="text"
//                 name={field.label.replace(" ", "_").toLowerCase()}
//                 required={field.required}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 bg-white"
//               />
//             </div>
//           ))}

//           <div>
//             <label className="block mb-2 text-gray-800 font-medium">Pet Category</label>
//             <select
//               name="Pet_category"
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-800"
//             >
//               {["Dog", "Cat", "Bird", "Reptile", "Fish", "Other"].map((pet) => (
//                 <option key={pet}>{pet}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block mb-2 text-gray-800 font-medium">Your Query</label>
//             <textarea
//               name="message"
//               rows="4"
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 bg-white"
//               placeholder="Describe your pet's issue..."
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-gray-800 font-medium">How do you wish to be contacted?</label>
//             <select
//               name="How do you wish to be contacted"
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-gray-800"
//             >
//               {["-- Select an option--", "Instagram", "Facebook", "WhatsApp"].map((option) => (
//                 <option key={option}>{option}</option>
//               ))}
//             </select>
//           </div>

        
//           <motion.button
//   whileHover={{ scale: 1.04 }}
//   whileTap={{ scale: 0.98 }}
//   className="w-full bg-gray-900 text-white font-[lato] py-3 rounded-md text-xl font-semibold hover:bg-gray-800 transition-all"
// >
//   Submit Query
// </motion.button>

// {/* OR separator with lines */}
// <div className="flex items-center my-6">
//   <div className="flex-grow h-px bg-gray-300"></div>
//   <span className="mx-4 text-sm text-gray-500 uppercase font-semibold tracking-wider">or</span>
//   <div className="flex-grow h-px bg-gray-300"></div>
// </div>

// <motion.a
//   href="/Bookconsultation"
//   className="mt-2 w-full inline-block text-lg font-[lato] font-medium px-9 py-3 rounded-xl shadow-lg bg-[#5245c9] text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-center"
//   whileHover={{ scale: 1.07 }}
//   whileTap={{ scale: 0.95 }}
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 1.8, ease: "easeOut", delay: 0.9 }}
// >
//   Book Consultation →
// </motion.a>
//         </form>

    

//         {result && (
//           <p className="mt-6 text-center text-green-600 font-medium text-sm">{result}</p>
//         )}
//       </motion.div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from 'firebase/firestore';
import { useFeedback } from '../context/FeedbackContext';
import db from "../firebase";

export default function Contact() {
  const [result, setResult] = useState("");
  const [rating, setRating] = useState(0);
  const { updateFeedback } = useFeedback();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "2b224ec4-521a-4626-a94b-7bfa416c168a");
    formData.append("rating", rating);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "✅ Query submitted successfully!" : `❌ ${data.message}`);
    event.target.reset();
    setRating(0);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#dbeafe] via-[#f0fdf4] to-[#f0f9ff] flex items-center justify-center px-4 md:px-10 py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl rounded-[2rem] bg-white/70 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-white/20 px-12 py-16 relative z-10"
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Talk to a <span className="text-indigo-600">Vet</span>
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600">
            24/7 expert support for your furry, feathery, or scaly friends.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-8">
          {[
            { label: "Full Name", required: true },
            { label: "Email", required: true },
            { label: "Phone", required: true },
            { label: "Facebook ID", required: false },
            { label: "Instagram ID", required: false },
            { label: "State", required: true },
            { label: "Country", required: true },
            { label: "Pet Name", required: false }
          ].map((field, i) => (
            <div key={i}>
              <label className="block text-gray-800 font-semibold mb-1">{field.label}</label>
              <input
                type="text"
                name={field.label.replace(" ", "_").toLowerCase()}
                required={field.required}
                className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/90 backdrop-blur-lg shadow-sm transition-all duration-300"
              />
            </div>
          ))}

          <div>
            <label className="block text-gray-800 font-semibold mb-1">Pet Category</label>
            <select
              name="Pet_category"
              required
              className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-white/90 shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all"
            >
              {["Dog", "Cat", "Bird", "Reptile", "Fish", "Other"].map((pet) => (
                <option key={pet}>{pet}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-1">Your Query</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-white/90 shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="Describe your pet's issue..."
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-1">Preferred Contact Method</label>
            <select
              name="How do you wish to be contacted"
              required
              className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-white/90 shadow-sm focus:ring-2 focus:ring-indigo-500 transition-all"
            >
              {["-- Select an option--", "Instagram", "Facebook", "WhatsApp"].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white py-4 rounded-xl text-lg font-semibold shadow-xl transition-all duration-300 hover:from-indigo-700 hover:to-violet-700"
          >
            <span className="relative z-10">Submit Query</span>
            <span className="absolute inset-0 rounded-xl bg-white opacity-10 blur-md"></span>
          </motion.button>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500 uppercase font-semibold tracking-wider">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <motion.a
            href="/Bookconsultation"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg font-semibold shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all"
          >
            Book Consultation →
          </motion.a>
        </form>

        {result && (
          <p className="mt-6 text-center text-green-600 font-medium text-sm">{result}</p>
        )}
      </motion.div>

      {/* Background blur & glow effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#a5b4fc33_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none z-0" />
    </div>
  );
}
