import React from 'react';

const LoadingScreen = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-700 font-medium">
      <div className="w-12 h-12 border-4 border-slate-300 border-t-blue-600 rounded-full animate-spin" />
      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
};

export default LoadingScreen;
