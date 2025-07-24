import React from 'react';

const GenderField = ({
  label = 'Gender',
  name = 'gender',
  value,
  onChange,
  required = false,
  options = ['Male', 'Female', 'Other'],
  margin = '' // 'top' or 'bottom'
}) => {
  // Determine margin class
  const marginClass = margin === 'top'
    ? 'mt-2'
    : margin === 'bottom'
    ? 'mb-2'
    : '';

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

      {/* Gender select */}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenderField;
