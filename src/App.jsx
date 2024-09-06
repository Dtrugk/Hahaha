import React, { useState, useEffect } from "react";
import {FaSuitcase, FaLaugh, FaSmileWink, FaThumbsUp } from 'react-icons/fa'; // Import emoji icons from react-icons

const App = () => {
   const funMessages = [
     "Still waiting... ⏳",
     "You know you should reply! 😂",
     "C'mon! It’s been too long... 🙈",
     "Friendly reminder… still waiting... 🤔",
   ];
  
   const igLink = "cysdef.kn"
   const [message, setMessage] = useState(funMessages[0]);   const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

   // Automatically change the message every 2 seconds
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % funMessages.length);
     }, 1750); // 2 seconds interval

     return () => clearInterval(interval); // Clean up interval on component unmount
   }, [funMessages.length]);

   // Update the message when the index changes
   useEffect(() => {
     setMessage(funMessages[currentMessageIndex]);
   }, [currentMessageIndex, funMessages]);

   // Function to redirect to Instagram page
   const handleInstagramRedirect = () => {
     window.location.href = "https://www.instagram.com/"+igLink;
   };

   return (
     <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-8 relative">
       <title>Reminder~</title>
       {/* Floating Emojis */}
       <div className="absolute top-10 left-20 animate-float">
         <FaLaugh className="text-yellow-400 text-4xl" />
       </div>
       <div className="absolute top-20 right-16 animate-float2">
         <FaSmileWink className="text-blue-400 text-4xl" />
       </div>
      

       {/* Title with Animation */}
      <h1 className="text-3xl font-bold mb-4 animate-pulse text-blue-500">Friendly REMINDER</h1>

      {/* Image Block */}
       <div className="w-full max-w-4xl bg-black rounded-xl overflow-hidden mb-4">
         <img src="/Pic3.png" alt="Conversation" className="w-full h-auto object-contain" />
       </div>

       {/* Dynamic Text Section */}
       <div className="mt-4 text-lg text-center px-4 text-gray-700 font-comic">
         <p className="mb-2">Kìa cô gái xinh đẹp, có vẻ cậu đang quên reply ai đó thì phải 😢</p>
         <p className="mb-2">Chờ đợi lâu quá không tốt cho sức khỏe <b>(tinh thần)</b> đâu cậu</p>
         <p className="mb-2">Cậu sẽ reply cho bạn ấy chứ?</p>
         <p>{message}</p>
       </div>

       {/* Funny Button Section */}
       <div className="mt-6 relative">
         <button
           className="bg-black text-white py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-3 hover:bg-blue-400"
           onClick={handleInstagramRedirect}
         >
           Go reply
         </button>
         {/* Tooltip */}
         <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 text-sm text-gray-600">
           Time to reply already!
         </span>
       </div>
     </div>
   );
 };

 export default App;



//--------------------------------------------
// import React from "react";

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
//       {/* Title Section */}
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">
//         Get Started with Font Awesome
//       </h1>

//       {/* Subheading */}
//       <p className="text-lg text-gray-600 text-center max-w-2xl mb-10">
//         The easiest way to get icons on your website is with a Kit. It's your very own custom version of Font Awesome, all bundled up with only the icons, tools, and settings you need.
//       </p>

//       {/* Input Form */}
//       <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl">
//         <p className="text-gray-700 text-lg mb-2">
//           Enter your email to get started with a free Kit!
//         </p>

//         <div className="flex items-center space-x-4 mb-4">
//           <input
//             type="email"
//             placeholder="e.g. yourname@domain.com"
//             className="flex-1 px-4 py-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           />
//           <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-lg border-2 border-blue-900 shadow-lg flex items-center space-x-2">
//             <span>Send Kit Embed Code</span>
//             <FaSuitcase />
//           </button>
//         </div>

//         <div className="text-sm text-gray-500">
//           <input type="checkbox" id="terms" className="mr-2" />
//           <label htmlFor="terms">
//             I agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
//           </label>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-8 text-gray-500 text-sm">
//         Already have an account? <a href="#" className="underline">Sign In</a>
//       </div>
//     </div>
//   );
// };

// export default App;
