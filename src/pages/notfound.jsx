import React from 'react';

export const Notfound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020406] px-6 py-20 text-white font-teko select-none">
      <h1 className="text-6xl md:text-7xl font-bold mb-6 text-yellow-400">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
      <p className="max-w-md text-center text-lg mb-8">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-block bg-yellow-400 text-black font-semibold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
};
