import React, { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { FaLaugh, FaSmileWink, FaThumbsUp } from 'react-icons/fa'; // Import emoji icons from react-icons

const App = () => {
  const funMessages = [
    "Still waiting... ⏳",
    "You know you should reply! 😂",
    "C'mon! It’s been too long... 🙈",
    "Friendly reminder… still waiting... 🤔",
  ];
  
  const igLink = "cysdef.kn"
  const [message, setMessage] = useState(funMessages[0]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

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