import React from 'react';

const Popup = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div>{children}</div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Popup;
