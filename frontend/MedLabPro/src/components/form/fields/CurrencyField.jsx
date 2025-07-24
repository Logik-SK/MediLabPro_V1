import React from 'react';

const CurrencyField = ({
  label = 'Amount',
  name,
  value = '',
  onChange,
  required = false,
  margin = ''
}) => {
  const marginClass =
    margin === 'top' ? 'mt-2' : margin === 'bottom' ? 'mb-2' : '';

  return (
    <div className={`flex items-center space-x-3 w-full ${marginClass}`}>
      {/* Label */}
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 whitespace-nowrap w-32"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Currency Input */}
      <div className="flex flex-1">
        <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-100 text-sm text-gray-700">
          ₹
        </span>
        <input
          type="number"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="flex-1 border border-gray-300 rounded-r px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
        />
      </div>
    </div>
  );
};

export default CurrencyField;
