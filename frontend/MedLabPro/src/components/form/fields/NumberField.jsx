import React from 'react';

const NumberField = ({
  label = 'Number',
  name = 'number',
  value,
  onChange,
  placeholder = 'Enter number',
  required = false,
  margin = '' // 'top' or 'bottom'
}) => {
  const marginClass =
    margin === 'top' ? 'mt-2' : margin === 'bottom' ? 'mb-2' : '';

  const effectivePlaceholder = required ? placeholder : `${placeholder} (Optional)`;

  // Allow only digits (optional: can allow decimal if needed)
  const handleChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '');
    onChange({ ...e, target: { ...e.target, value: digitsOnly } });
  };

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

      {/* Number input */}
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={effectivePlaceholder}
        inputMode="numeric"
        pattern="[0-9]*"
        required={required}
        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default NumberField;
