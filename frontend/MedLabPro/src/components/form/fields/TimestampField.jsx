import React from 'react';

const TimestampField = ({
  label = 'Timestamp',
  name = 'timestamp',
  value,
  onChange,
  placeholder = 'Select date and time',
  required = false,
  margin = '' // 'top' or 'bottom'
}) => {
  const marginClass =
    margin === 'top' ? 'mt-2' : margin === 'bottom' ? 'mb-2' : '';

  const effectivePlaceholder = required ? placeholder : `${placeholder} (Optional)`;

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

      {/* Timestamp input */}
      <input
        type="datetime-local"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={effectivePlaceholder}
        required={required}
        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TimestampField;
