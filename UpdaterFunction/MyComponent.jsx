import React, { useState } from "react";
import { motion } from "framer-motion";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);

  const animateCount = () => {
    setIsUpdating(true);
    setTimeout(() => setIsUpdating(false), 300);
  };

  function increment() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    animateCount();
  }

  function decrement() {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    animateCount();
  }

  function reset() {
    setCount(0);
    animateCount();
  }
  return (
<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-600 to-indigo-700 text-white">

    <motion.h1
        key={count}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-5xl font-bold mb-8"
      >
        Count: {count}
      </motion.h1>

      <div className="space-x-4">
        <button
          onClick={increment}
          disabled={isUpdating}
          className="px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition disabled:opacity-50"
        >
          Increment
        </button>
        <button
          onClick={reset}
          disabled={isUpdating}
          className="px-6 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition disabled:opacity-50"
        >
          Reset
        </button>
        <button
          onClick={decrement}
          disabled={isUpdating}
          className="px-6 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition disabled:opacity-50"
        >
          Decrement
        </button>
      </div>
      
    </div>
  );
}

export default MyComponent;
