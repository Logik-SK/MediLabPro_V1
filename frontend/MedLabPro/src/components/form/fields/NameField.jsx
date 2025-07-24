import React from 'react';

const NameField = ({
  label = 'Name',
  name = 'name',
  value,
  onChange,
  placeholder = 'Enter name',
  required = false,
  prefix = '',
  onPrefixChange,
  prefixOptions = ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'],
  margin = '' // 'top' or 'bottom'
}) => {
  // Determine margin class
  const marginClass = margin === 'top'
    ? 'mt-2'
    : margin === 'bottom'
    ? 'mb-2'
    : '';

  // Adjust placeholder
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

      {/* Prefix dropdown */}
      <select
        value={prefix}
        onChange={onPrefixChange}
        className="w-16 border border-gray-300 rounded px-2 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">--</option>
        {prefixOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {/* Name input */}
      <input
        type="text"
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

export default NameField;
