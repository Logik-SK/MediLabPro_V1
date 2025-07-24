import React from 'react';

const TableWrapper = ({ title = 'Table', subtitle = 'Detailed overview of', children }) => (
  <div className="bg-white border rounded shadow-sm overflow-hidden">
    <div className="px-6 py-4 border-b bg-gradient-to-r from-blue-50 to-white">
      <h2 className="text-xl font-bold text-gray-800 tracking-tight">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    </div>
    {children}
  </div>
);

export default TableWrapper;
